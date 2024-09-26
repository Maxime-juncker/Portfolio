import PointLight from "../Components/PointLight";
import Link from "next/link";
import SkillCard from "../Components/SkillCard";
import styles from '../styles/about.module.css'
import { useState } from "react";
import GithubBtn from "../Components/GithubBtn";
import Head from "next/head";
const Maximatron = () => 
{
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>               
              <Head>
                <title>Maxime Juncker | Human SI</title>
              </Head>
            <header className={styles.ProjectAbout}>
            <Link style={{zIndex: 1, width:"100%",textAlign:"left", marginLeft:"5vw",
                    textDecoration: "underline" ,fontSize: "24px"}}
                    href={"/"}>← Retour</Link>
                <img src={("/Images/Projects/HumanSI/HumanSI-logo.png")} alt="Human SI logo" style={{borderRadius:"40px", width: "30%"}} />
                <h1>Human SI</h1>
                <PointLight left={30} top={60} backgroundColor={"var(--human-si)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--human-si)"}/>
                <PointLight left={50} top={120} backgroundColor={"var(--human-si)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--human-si)"}/>

            </header>

            <div></div>

            <section className={styles.Content}>
                <div className={styles.Summary}>
                    <article>
                        <div>
                            <h2 >Description:</h2>
                            <p>HumanSI est un simple projet réaliser pour un concours d'informatique de lycée (les trophées de la nsi) en équipe de 5.
                                <br/>
                                Une carte et plusieurs civilisation sont généré aléatoirement, ces civilisations vont trouver des ressources éparpier sur la carte et ce développerons en construsant des habitations etc...
                                <br/>
                                Les différentes civilisations peuvent intéragire entre elle en choisisant de s'ignorer ou de s'attaquer.
                                <br/>
                                Les civilisation sont modulaire et toutes leurs statistique sont sauvegardés dans un fichier csv permettant l'ajout facile de nouvelles civilisations.  
                            </p>
                        </div>
                        <div>
                            <h2>Outils utilisés</h2>
                            <div className="Card-conterner">
                            <SkillCard content={"PYTHON"} src={"/Images/Cards/html.svg"}/>
                            <SkillCard content={"BLENDER"} src={"/Images/Cards/blender.svg"}/>
                            <SkillCard content={"RIDER"} src={"/Images/Cards/jetbrains.svg"}/>
                            <SkillCard content={"GITHUB"} src={"/Images/Cards/github.svg"}/>

                            </div>
                        </div>
                        <div>
                            <h2>Platformes supportées</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"WINDOWS"} src={("../Images/Cards/windows.svg")}/>
                                <SkillCard content={"MAC OS"} src={("../Images/Cards/mac.svg")}/>
                                <SkillCard content={"LINUX"} src={("../Images/Cards/linux.svg")}/>
                            </div>

                        </div>
                    </article>
                    <article className={styles.screenshotContener}> 
                        <img src={("/Images/Projects/HumanSI/HumanSI-app-screen01.png")} />
                        <img src={("/Images/Projects/HumanSI/HumanSI-app-screen02.png")}  alt="" />
                        <img src={("/Images/Projects/HumanSI/HumanSI-app-screen03.png")}  alt="" />
                    </article>
                </div>
                <div className={styles.Caractéristiques}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--human-si)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--human-si)"}/>

                    <h2>Caractéristiques</h2>
                    <li>Génération de carte / ressources procédurale</li>
                    <li>Sauvegarde des ancienes carte déjà généré</li>
                    <li>Plusieurs type de civilisations</li>
                    <li>Relation entre civilisations</li>
                    <li>IA sous forme de state machine</li>
                    <li>Menu pour l'interaction entre utilisateur et la carte</li>
                </div>
                <GithubBtn href="https://github.com/Maxime-juncker/HumanSI"/>
                
            </section>

            <Link href={"/Pronout"} className={styles.NextProject}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <section>
                    <h3>NEXT PROJECT</h3>
                    <h1 style={{color:"var(--human-si)"}}>Pronout</h1>
                </section>
                <img src="/arrow.svg" className="arrow" style={!isHovered ? {filter: "hue-rotate(130deg) saturate(70%) brightness(100%)"}
                : {filter: "grayscale(1) brightness(10)"}}/>
                <div className={styles.background} style={{backgroundColor: "var(--human-si)"}}/>
            </Link>

            <section className={styles.Footer}>
                <article>
                    
                </article>
            </section>

        </div>
    );
}

export default Maximatron;