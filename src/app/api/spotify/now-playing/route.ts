import { NextResponse } from "next/server";
import { getNowPlaying } from "@/utils/spotify";
import { SpotifyCurrentlyPlayingResponse, SpotifyNowPlayingData } from "@/types/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const response = await getNowPlaying();

        if (response.status === 204 || response.status > 400) {
            return NextResponse.json<SpotifyNowPlayingData>({ isPlaying: false });
        }

        const song: SpotifyCurrentlyPlayingResponse = await response.json();

        if (!song.item) {
            return NextResponse.json<SpotifyNowPlayingData>({ isPlaying: false });
        }

        const isPlaying = song.is_playing;
        const title = song.item.name;
        const artist = song.item.artists.map((artist) => artist.name).join(", ");
        const album = song.item.album.name;
        const albumImageUrl = song.item.album.images[0]?.url;
        const songUrl = song.item.external_urls.spotify;

        return NextResponse.json<SpotifyNowPlayingData>({
            isPlaying,
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
