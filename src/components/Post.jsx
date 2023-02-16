import styles from './Post.module.css'

export function Post() {
    return (
       <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/XaloDev.png" alt="Post Author Picture" />
                    <div className={styles.authorInfo}>
                        <strong>Ícaro Xavier</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>
                <time title="13 de Fevereiro às 15:37" dateTime="2023-02-13 15:37:01">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href='#'>jane.design/doctorcare</a></p>
                <p><a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
       </article>
    )
}