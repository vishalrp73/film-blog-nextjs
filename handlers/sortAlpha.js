export const sortAlpha = ( films ) => {
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

    let exportArray = [];

    alpha.forEach(char => {
        Object.values(char).forEach(zeroIndex => {
            zeroIndex.forEach(film => {
                exportArray.push(film);
            })
        })
    })

    return exportArray;
}