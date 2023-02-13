import { PencilSimpleLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                alt='User cover image' 
                src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' 
            />
            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    alt='User avatar'
                    src='https://avatars.githubusercontent.com/u/73499961?v=4'
                ></img>
                <strong>Ícaro Xavier</strong>
                <span>Front-end Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}