import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'


const posts = [
  {
    id: 1,
    author: {
      name: "Ícaro Gabriel",
      avatarUrl: 'https://github.com/XaloDev.png',
      role: 'Software Engineer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2023-03-02 14:00:00')
  },
  {
    id: 2,
    author: {
      name: "Graziele Loiola",
      avatarUrl: 'https://github.com/grazieleloiola.png',
      role: 'Web Designer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Oi oi oi'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'testandoooo'
      }
    ],
    publishedAt: new Date('2023-03-01 21:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post {...post} key={post.id} />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
