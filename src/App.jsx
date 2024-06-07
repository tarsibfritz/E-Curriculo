import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'
import styles from './content.module.css'
import './Styles.global.css'

function App() {
  return(
    <div>
      <Header/>
      <div className={styles.content}>
        <Sidebar/>
        <Post/>
      </div>
    </div>
  )
}

export default App
