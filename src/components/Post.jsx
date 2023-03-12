import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect } from 'react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event) {
        event.preventDefault()
        setComments([...comments, newCommentText])
    }

    function handleNewCommentTextChange(event) {
        setNewCommentText(event.target.value)
    }

    function deleteComment (comment) {
        setComments(comments.filter(item => item !== comment))
    }

    useEffect(() => {
        setNewCommentText("")
    }, [comments])

    return (
       <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map((row, index) => {
                    if(row.type === 'paragraph') {
                        return <p key={row.content + index}>{row.content}</p>
                    }
                    if(row.type === 'link') {
                        return <p><a href='#' key={row.content + index}>{row.content}</a></p>
                    }   
                    return <span key={row.content + index}>{row.content}</span>
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentTextChange}
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return <Comment key={comment.id} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
       </article>
    )
}