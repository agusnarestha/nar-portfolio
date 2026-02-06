import { SpotifyTokenResponse, SpotifyCurrentlyPlayingResponse } from "@/types/spotify";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

let cachedToken: string | null = null;
let tokenExpiresAt: number = 0;

export const getAccessToken = async (): Promise<{ access_token: string }> => {
    // Return cached token if still valid (with 60s buffer)
    if (cachedToken && Date.now() < tokenExpiresAt - 60000) {
        return { access_token: cachedToken };
    }

    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refresh_token!,
            client_id: client_id!,
        }),
        next: {
            revalidate: 0, // Don't cache the fetch request itself, we manage token manually
        },
    });

    const data: SpotifyTokenResponse = await response.json();

    if (data.access_token) {
        cachedToken = data.access_token;
        // Set expiration based on expires_in (usually 3600s), default to 1 hour if missing
        tokenExpiresAt = Date.now() + (data.expires_in || 3600) * 1000;
    }

    return { access_token: data.access_token };
};

export const getNowPlaying = async (): Promise<Response> => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};
