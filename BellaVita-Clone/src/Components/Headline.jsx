import styles from "./Headline.module.css"
export default function Headline({ text }) {
    return (
        <div className={styles.Headline}>
            <span className={styles.dashes}></span><h2>{text}</h2><span className={styles.dashes}></span>
        </div>
    )
}