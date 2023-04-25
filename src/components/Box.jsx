import styles from "./Box.module.css";

export function Box(props) {
    return (
        <div className={styles.box}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}
