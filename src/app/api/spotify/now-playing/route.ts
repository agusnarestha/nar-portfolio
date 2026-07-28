import { NextResponse } from "next/server";
import { getNowPlaying, getRecentlyPlayed } from "@/utils/spotify";
import { SpotifyCurrentlyPlayingResponse, SpotifyRecentlyPlayedResponse, SpotifyNowPlayingData } from "@/types/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const response = await getNowPlaying();

        // Log response status for debugging
        console.log("Spotify API response status:", response.status);

        if (response.status === 204 || response.status > 400) {
            // Not currently playing, fetch recently played
            const recentResponse = await getRecentlyPlayed();

            if (recentResponse.ok) {
                const recentData: SpotifyRecentlyPlayedResponse = await recentResponse.json();

                if (recentData.items && recentData.items.length > 0) {
                    const lastTrack = recentData.items[0].track;
                    console.log("Returning recently played track");

                    return NextResponse.json<SpotifyNowPlayingData>({
                        isPlaying: false,
                        isRecentlyPlayed: true,
                        title: lastTrack.name,
                        artist: lastTrack.artists.map((artist) => artist.name).join(", "),
                        album: lastTrack.album.name,
                        albumImageUrl: lastTrack.album.images[0]?.url,
                        songUrl: lastTrack.external_urls.spotify,
                    });
                }
            }

            console.log("Spotify API returned error or no content:", response.status);
            return NextResponse.json<SpotifyNowPlayingData>({ isPlaying: false });
        }

        const song: SpotifyCurrentlyPlayingResponse = await response.json();

        // If not actively playing or no track, fetch recently played
        if (!song.item || !song.is_playing) {
            const recentResponse = await getRecentlyPlayed();

            if (recentResponse.ok) {
                const recentData: SpotifyRecentlyPlayedResponse = await recentResponse.json();

                if (recentData.items && recentData.items.length > 0) {
                    const lastTrack = recentData.items[0].track;
                    console.log("Returning recently played track");

                    return NextResponse.json<SpotifyNowPlayingData>({
                        isPlaying: false,
                        isRecentlyPlayed: true,
                        title: lastTrack.name,
                        artist: lastTrack.artists.map((artist) => artist.name).join(", "),
                        album: lastTrack.album.name,
                        albumImageUrl: lastTrack.album.images[0]?.url,
                        songUrl: lastTrack.external_urls.spotify,
                    });
                }
            }

            console.log("Spotify API returned no active playback or recent tracks");
            return NextResponse.json<SpotifyNowPlayingData>({ isPlaying: false });
        }

        // Actively playing
        const isPlaying = song.is_playing;
        const title = song.item.name;
        const artist = song.item.artists.map((artist) => artist.name).join(", ");
        const album = song.item.album.name;
        const albumImageUrl = song.item.album.images[0]?.url;
        const songUrl = song.item.external_urls.spotify;

        return NextResponse.json<SpotifyNowPlayingData>({
            isPlaying,
            isRecentlyPlayed: false,
            title,
            artist,
            album,
            albumImageUrl,
            songUrl,
        });
    } catch (error) {
        console.error("Error fetching Spotify data:", error);
        return NextResponse.json<SpotifyNowPlayingData>(
            { isPlaying: false },
            { status: 500 }
        );
    }
}
