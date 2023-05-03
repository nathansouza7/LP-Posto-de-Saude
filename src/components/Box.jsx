import styles from "./Box.module.css";

export function Box(props) {
    return (
        <div className={styles.box}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}
