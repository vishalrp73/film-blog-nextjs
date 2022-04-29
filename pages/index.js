import { useGlobalContext } from '../store/context';
import { SortGenres } from '../handlers/sortGenres';
import styles from '../styles/Index.module.css';

import { useState, useEffect } from 'react';

import Header from '../components/header';
import MovieBox from '../components/movieBox';


export default function Home ({ films }) {

  const { filteredResults, setFilteredResults } = useGlobalContext();
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const genres = SortGenres(films)
    setGenres(genres);
  }, [])

  return (
    <>
      <Header films = {films} />
      <div div className = {styles.coreContainer}>
      {
        filteredResults[0] ?
          <div className = {styles.filteredContainer}>
            {
              filteredResults.map(film => {
                return <MovieBox key = {film._id} film = {film} />
              })
            }
          </div>
          : genres ?
            <>
              {Object.entries(genres).map(entry => {
                return (
                  <div className = {styles.genreContainer}>
                    <h3 className = {styles.genreTitle}>{entry[0].toUpperCase()}</h3>
                    <div className = {styles.filmsContainer}>
                      {
                        (entry[1].sort((a, b) => 0.5 - Math.random())).map(film => {
                          return <MovieBox key = {film._id} film = {film} />
                        })
                      }
                    </div>
                  </div>
                )
              })}
            </>
            :
            films.map( film => {
              return <MovieBox key = {film._id} film = {film} />
            })
      }
      </div>
    </>
  )
}


export async function getServerSideProps () {
  const response = await fetch('http://localhost:4000/films')
  const data = await response.json();

  return {
    props: {
      films: data
    }
  }
}