export interface SpotifyNowPlayingData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
}

export interface SpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}

export interface SpotifyCurrentlyPlayingResponse {
    is_playing: boolean;
    item?: {
        name: string;
        artists: Array<{
            name: string;
        }>;
        album: {
            name: string;
            images: Array<{
                url: string;
                height: number;
                width: number;
            }>;
        };
        external_urls: {
            spotify: string;
        };
    };
}
