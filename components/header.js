import { useState, useEffect } from 'react';
import { stringCleanse } from '../handlers/stringCleanse';
import { FuseSearch } from '../handlers/fuseSearch';
import { useGlobalContext } from '../store/context';
import { QuickSort } from '../handlers/quickSort';
import { sortAlpha } from '../handlers/sortAlpha';

import styles from '../styles/components/Header.module.css';

export default function Header ( props ) {

    const [searchInput, setSearchInput] = useState('');
    const [yearSwitch, setYearSwitch] = useState('asc');
    const [yearOperator, setYearOperator] = useState('^');
    const [alphaSwitch, setAlphaSwitch] = useState('a');
    const [alphaOperator, setAlphaOperator] = useState('v');
    const [backImg, setBackImg] = useState(0);
    const [filmNum, setFilmNum] = useState(0);
    const [randFilm, setRandFilm] = useState(0);
    const [btnSwitch, setBtnSwitch] = useState(true);
    const { setFilteredResults } = useGlobalContext();

    const backImgList = [
        "https://film-img.s3.ap-southeast-2.amazonaws.com/slides/apoc-8.png",
        "https://film-img.s3.ap-southeast-2.amazonaws.com/slides/julia-fox.jpg",
        "https://film-img.s3.ap-southeast-2.amazonaws.com/slides/solaris.png"
    ]

    useEffect(() => {
        let randNum = Math.floor(Math.random() * backImgList.length - 0);
        setBackImg(randNum);

        let filmNum = Math.floor(Math.random() * 50 - 0)
        setFilmNum(filmNum)
    }, [])

    const handleReset = () => {
        setSearchInput('')
        setFilteredResults([]);
        setBtnSwitch(true)
    }

    const handleRandomFilm = () => {
        let randomNum = Math.floor(Math.random() * props.films.length - 0)
        try {
            let temp = props.films[randomNum]
            setFilteredResults([temp])
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearch = ( str ) => {
        const cleansed = stringCleanse(str);
        setSearchInput(cleansed);
        const searchRes = FuseSearch(searchInput, props.films);
        setFilteredResults(searchRes)
        setBtnSwitch(false);
    }

    const handleYear = ( str ) => {
        const sorted = QuickSort(props.films)
        if (str === 'asc' ) {
            setFilteredResults(sorted);
            setYearOperator('v');
            setYearSwitch('desc');
        } else if (str === 'desc' ) {
            setFilteredResults([...sorted].reverse())
            setYearOperator('^');
            setYearSwitch('asc');
        }
    }

    const handleAlpha = ( char ) => {
        const alphaSort = sortAlpha(props.films);
        if ( char === 'a') {
            setFilteredResults(alphaSort);
            setAlphaOperator('v');
            setAlphaSwitch('z');
        } else if ( char === 'z' ) {
            setFilteredResults([...alphaSort].reverse());
            setAlphaOperator('^');
            setAlphaSwitch('a');
        }
    }

    return (
        <div className = {styles.headerContainer}
            style = {{backgroundImage: `url(${backImgList[backImg]})`}}>
                <h1 className = {styles.headerTitle}>VISHAL'S PRETENTIOUS FILM BLOG</h1>
                <div className = {styles.prefaceContainer}>
                    <p className = {styles.prefaceText}>
                        Howdy friends ! <br />
                        Welcome to my film blog - created from scratch using Next.js, React, Express and MongoDB!<br/>
                        Further documentation relating to the production process can be found at<br/>
                        <i>vishalrp.com</i><br/>
                        NOW WITH HAND-CRAFTED GRAPHICS!
                    </p>
                </div>

                <div className = {styles.searchContainer}>
                    
                    <input type = 'button'
                        onClick = {() => handleReset()}
                        className = {styles.sortBtn}
                        value = 'reset' />

                    <input type = 'text'
                        onChange = {(e) => handleSearch(e.target.value)}
                        className = {styles.searchInput}
                        value = {searchInput} />

                    {
                        btnSwitch ?
                            <>
                                <input onClick = {
                                    (yearSwitch === 'asc') ?
                                        () => handleYear('asc') : () => handleYear('desc')}
                                        className = {styles.sortBtn}
                                        value = {`year ${yearOperator}`}
                                        type = 'button' />
                                <input onClick = {
                                    (alphaSwitch === 'a') ?
                                        () => handleAlpha('a') : () => handleAlpha('z')}
                                        className = {styles.sortBtn}
                                        value = {`a-z ${alphaOperator}`}
                                        type = 'button' />
                            </> : <></>
                            
                    }

                    <input type = 'button' value = {`I'M FEELING STUPID`}
                        className = {styles.fsBtn}
                        onClick = {() => handleRandomFilm()} />

                </div>
        </div>
    )
}