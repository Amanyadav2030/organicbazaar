import { Text } from "@chakra-ui/react"
import styles from "./Headline.module.css"
export default function Headline({ text }) {
    return (
        <div className={styles.Headline}>
            <span className={styles.dashes}></span><Text fontSize={['18px', '20px', '27px']} >{text}</Text><span className={styles.dashes}></span>
        </div>
    )
}