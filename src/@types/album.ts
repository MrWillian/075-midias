export type AlbumType = {
    id?: string;
    name?: string;
    description?: string;
    date?: string;
    images?: ImageType;
}

export type ImageType = {
    src: string[];
}