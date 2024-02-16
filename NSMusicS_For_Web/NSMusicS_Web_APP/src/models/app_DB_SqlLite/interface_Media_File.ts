interface Media_File {
    favorite:boolean;
    duration_txt:string;
    selected:boolean;

    id: string;
    path: string;
    title: string;
    album: string;
    artist: string;
    artist_id: string;
    album_artist: string;
    album_id: string;
    has_cover_art: boolean;
    track_number: number;
    disc_number: number;
    year: number;
    size: number;
    suffix: string;
    duration: number;
    bit_rate: number;
    genre: string;
    compilation: boolean;
    created_at?: string;
    updated_at?: string;
    full_text: string;
    album_artist_id?: string;
    order_album_name: string;
    order_album_artist_name: string;
    order_artist_name: string;
    sort_album_name: string;
    sort_artist_name: string;
    sort_album_artist_name: string;
    sort_title: string;
    disc_subtitle: string;
    mbz_track_id: string;
    mbz_album_id: string;
    mbz_artist_id: string;
    mbz_album_artist_id: string;
    mbz_album_type: string;
    mbz_album_comment: string;
    catalog_num: string;
    comment: string;
    lyrics: string;
    bpm: number;
    channels: number;
    order_title: string;
    mbz_release_track_id: string;
    rg_album_gain: number;
    rg_album_peak: number;
    rg_track_gain: number;
    rg_track_peak: number;
}