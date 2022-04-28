import styles from '../styles/components/DetailBox.module.css';

export default function DetailBox ( props ) {
    return (
        <div className = {styles.detailBox}>
            <h3 className = {styles.detailTitle}>{props.title}</h3>
            <p className = {styles.detailEntries}>{props.entry}</p>
        </div>
    )
}