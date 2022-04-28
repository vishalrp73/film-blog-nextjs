import { QuickSort } from "./quickSort"
import { useState, useEffect } from 'react';

export const FetchFilms = () => {

    const [filmExport, setFilmExport] = useState([]);

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

    let twentyList = [];
    let thirtyList = [];
    let fourtyList = [];
    let fiftyList = [];
    let sixtyList = [];
    let seventyList = [];
    let eightyList = [];
    let ninetyList = [];
    let thousandsList = [];
    let twentyTensList = [];

    let aList = [];
    let bList = [];
    let cList = [];
    let dList = [];
    let eList = [];
    let fList = [];
    let gList = [];
    let hList = [];
    let iList = [];
    let jList = [];
    let kList = [];
    let lList = [];
    let mList = [];
    let nList = [];
    let oList = [];
    let pList = [];
    let qList = [];
    let rList = [];
    let sList = [];
    let tList = [];
    let uList = [];
    let vList = [];
    let wList = [];
    let xList = [];
    let yList = [];
    let zList = [];

    const sortGenres = ( films ) => {
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
        })

        let genres = {
            war: warList,
            horror: horrorList,
            drama: dramaList,
            thriller: thrillerList,
            scifi: scifiList,
            forLang: forLangList,
            comedy: comedyList,
            epic: epicList,
            crime: crimeList,
            animated: animatedList,
            art: artList,
            neoNoir: neoNoirList,
            mystery: mysteryList,
            romance: romanceList,
            action: actionList,
            adventure: adventureList,
            biographical: bioList,
            silent: silentList,
            wholesome: wholesomeList,
            surreal: surrealList,
        }

        return genres;
    }

    const sortAlpha = ( films ) => {
        films.forEach(film => {
            switch (film.title[0]) {
                case 'A':
                    aList.push(film)
                    break;
                case 'B':
                    bList.push(film)
                    break;
                case 'C':
                    cList.push(film)
                    break;
                case 'D':
                    dList.push(film)
                    break;
                case 'E':
                    eList.push(film)
                    break;
                case 'F':
                    fList.push(film)
                    break;
                case 'G':
                    gList.push(film)
                    break;
                case 'H':
                    hList.push(film)
                    break;
                case 'I':
                    iList.push(film)
                    break;
                case 'J':
                    jList.push(film)
                    break;
                case 'K':
                    kList.push(film)
                    break;
                case 'L':
                    lList.push(film)
                    break;
                case 'M':
                    mList.push(film)
                    break;
                case 'N':
                    nList.push(film)
                    break;
                case 'O':
                    oList.push(film)
                    break;
                case 'P':
                    pList.push(film)
                    break;
                case 'Q':
                    qList.push(film)
                    break;
                case 'R':
                    rList.push(film)
                    break;
                case 'S':
                    sList.push(film)
                    break;
                case 'T':
                    tList.push(film)
                    break;
                case 'U':
                    uList.push(film)
                    break;
                case 'V':
                    vList.push(film)
                    break;
                case 'W':
                    wList.push(film)
                    break;
                case 'X':
                    xList.push(film)
                    break;
                case 'Y':
                    yList.push(film)
                    break;
                case 'Z':
                    zList.push(film)
                    break;
                case '8':
                    eList.push(film)
                default: console.log('no alphabet match for first letter of FILM:', film.title)
            }
        })

        const alpha = [
            {'A': aList},
            {'B': bList},
            {'C': cList},
            {'D': dList},
            {'E': eList},
            {'F': fList},
            {'G': gList},
            {'H': hList},
            {'I': iList},
            {'J': jList},
            {'K': kList},
            {'L': lList},
            {'M': mList},
            {'N': nList},
            {'O': oList},
            {'P': pList},
            {'Q': qList},
            {'R': rList},
            {'S': sList},
            {'T': tList},
            {'U': uList},
            {'V': vList},
            {'W': wList},
            {'X': xList},
            {'Y': yList},
            {'Z': zList}

        ]
        return alpha
        
    }

    const decadeSort = ( films ) => {
        films.forEach(film => {
            const year = film.year
            switch (true) {
                case (year >= 1920 && year <= 1929):
                    twentyList.push(film)
                    break;
                case (year >= 1930 && year <= 1939):
                    thirtyList.push(film)
                    break;
                case (year >= 1940 && year <= 1949):
                    fourtyList.push(film)
                    break;
                case (year >= 1950 && year <= 1959):
                    fiftyList.push(film)
                    break;
                case (year >= 1960 && year <= 1969):
                    sixtyList.push(film)
                    break;
                case (year >= 1970 && year <= 1979):
                    seventyList.push(film)
                    break;
                case (year >= 1980 && year <= 1989):
                    eightyList.push(film)
                    break;
                case (year >= 1990 && year <= 1999):
                    ninetyList.push(film)
                    break;
                case (year >= 2000 && year <= 2009):
                    thousandsList.push(film)
                    break;
                case (year >= 2010 && year <= 2019):
                    twentyTensList.push(film)
                    break;
                default: console.log('No decade sorted for FILM:', film.title, ', YEAR:', film.year)
            }
        });

        const decades = {
            '1920s': twentyList,
            '1930s': thirtyList,
            '1940s': fourtyList,
            '1950s': fiftyList,
            '1960s': sixtyList,
            '1970s': seventyList,
            '1980s': eightyList,
            '1990s': ninetyList,
            '2000s': thousandsList,
            '2010s': twentyTensList
        }

        return decades;
    }

    const fetchJSON = async ( url ) => {
        const response = await fetch(url);
        return response.json();
    }

    useEffect(() => {
        fetchJSON('http://localhost:4000/films')
            .then ( items => {
                    const genres = sortGenres(items)
                    const alpha = sortAlpha(items)
                    const years = QuickSort(items)
                    const decades = decadeSort(items)

                    const exportObject = {
                        films: items,
                        genres: genres,
                        alphabet: alpha,
                        years: years,
                        decades: decades
                    }

                    setFilmExport(exportObject)
                })
            .catch (err => console.log(err));

    }, []);

    return filmExport;

}