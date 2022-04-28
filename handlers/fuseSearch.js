import Fuse from "fuse.js";

export const FuseSearch = (string, films) => {

    const fuse = new Fuse (films, {
        keys: ['title',
        'director',
        'year',
        'writers',
        'genre',
        'cinematography',
        'soundtrack',
        'blurb',
        'tags',
        'trivia',
        'review_text',
        'review_score',
        'special_category'],
        includeScore: true, threshold: 0.2, ignoreLocation: true
    });

    const filtered = fuse.search(string).map(({ item }) => item);
    return filtered;

}