import styles from './sidebar.module.css'
import pfp from '../assets/profile-picture.jpeg'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <section className={styles.sidebar_container}>
                <div className={styles.sidebar_images}>
                    <img className={styles.sidebar_cover}src='https://i.pinimg.com/564x/f4/84/78/f48478a0fc251d2e9593d9836943de5c.jpg' alt='Foto de fundo'/>
                    <img className={styles.sidebar_pfp} src={pfp} alt='Foto de perfil Tarsila Barros Fritz'/>
                </div>

                <div className={styles.sidebar_titles}>
                    <strong>Tarsila Barros Fritz</strong>
                    <p>Desenvolvedora Front-End</p>
                </div>

                <section className={styles.sidebar_contact}>
                    <a href='https://github.com/tarsibfritz' target='_blank'>
                        <button>Github</button>
                    </a>
                    <span>|</span>
                    <a href='https://www.linkedin.com/in/tarsilafritz/' target='_blank'>
                        <button>Linkedin</button>
                    </a>
                </section>

                <hr className={styles.hr_style}/>

                <footer className={styles.footer}>
                    <div className={styles.footer_content}>
                        <h5>Soft Skills</h5>
                        <ul>
                            <li>Organização</li>
                            <li>Planejamento</li>
                            <li>Comunicação</li>
                            <li>Adaptabilidade</li>
                            <li>Aprendizado Continuo</li>
                        </ul>
                    </div>
                </footer>
            </section>
        </aside>
    )
}