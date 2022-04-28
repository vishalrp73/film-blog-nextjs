export const SortGenres = ( films ) => {
    let warList = [];
    let horrorList = [];
    let dramaList = [];
    let thrillerList = [];
    let scifiList = [];
    let forLangList = [];
    let comedyList = [];
    let epicList = [];
    let crimeList = [];
    let animatedList = [];
    let artList = [];
    let neoNoirList = [];
    let mysteryList = [];
    let romanceList = [];
    let actionList = [];
    let adventureList = [];
    let bioList = [];
    let silentList = [];
    let wholesomeList = [];
    let surrealList = [];
    let topList = [];

    films.forEach(film => {
        film.genre.filter(genre => {
            switch (genre) {
                case 'War':
                    warList.push(film)
                    break;
                case 'Horror':
                    horrorList.push(film)
                    break;
                case 'Drama':
                    dramaList.push(film)
                    break;
                case 'Thriller':
                    thrillerList.push(film)
                    break;
                case 'Science Fiction':
                    scifiList.push(film)
                    break;
                case 'Foreign Language':
                    forLangList.push(film)
                    break;
                case 'Comedy':
                    comedyList.push(film)
                    break;
                case 'Epic':
                    epicList.push(film)
                    break;
                case 'Crime':
                    crimeList.push(film)
                    break;
                case 'Animated':
                    animatedList.push(film)
                    break;
                case 'Art':
                    artList.push(film)
                    break;
                case 'Neo-Noir':
                    neoNoirList.push(film)
                    break;
                case 'Mystery':
                    mysteryList.push(film)
                    break;
                case 'Romance':
                    romanceList.push(film)
                    break;
                case 'Action':
                    actionList.push(film)
                    break;
                case 'Adventure':
                    adventureList.push(film)
                    break;
                case 'Biographical':
                    bioList.push(film)
                    break;
                case 'Silent':
                    silentList.push(film)
                    break;
                case 'Wholesome':
                    wholesomeList.push(film)
                    break;
                case 'Surreal':
                    surrealList.push(film)
                    break;
                default: console.log('no genre matched for FILM:', film.title + ', GENRE:', genre);
            }
        })
        film.special_category.filter(cat => {
            if (cat === 'TOP 5') {
                topList.push(film)
            }
        })
    })

    let genres = {
        "top 5": topList,
        "war": warList,
        "horror": horrorList,
        "drama": dramaList,
        "thriller": thrillerList,
        "science fiction": scifiList,
        "foreign language (for me)": forLangList,
        "comedy": comedyList,
        "epic": epicList,
        "crime": crimeList,
        "animated": animatedList,
        "art": artList,
        "neo-noir": neoNoirList,
        "mystery": mysteryList,
        "romance": romanceList,
        "action": actionList,
        "adventure": adventureList,
        "biographical": bioList,
        "silent": silentList,
        "wholesome": wholesomeList,
        "surreal": surrealList,
    }

    return genres;
}