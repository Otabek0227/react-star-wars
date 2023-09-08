import styles from './PersonInfo.module.css'

export default function PersonInfo({ personInfo }) {
    return (
        <ul className={styles.person__container}>
            {personInfo.map(({ title, data }) => (
                <li key={title}>
                    <span>{title}: </span>
                    {data}
                </li>
            ))}
        </ul>
    )
}
