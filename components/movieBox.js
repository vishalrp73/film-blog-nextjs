import styles from '../styles/MovieBox.module.css';
import Link from 'next/link';

export default function MovieBox ( props ) {
    return (
        <>
            <Link href = {`${props.film._id}`}>
                <div className = {styles.movieBoxContainer}
                    style = {{backgroundImage: `url(${props.film.thumbnail})`}}>
                </div>
            </Link>
        </>
    )
}