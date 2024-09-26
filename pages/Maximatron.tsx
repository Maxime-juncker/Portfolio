import PointLight from "../Components/PointLight";
import Link from "next/link";
import SkillCard from "../Components/SkillCard";
import styles from '../styles/about.module.css'
import GithubBtn from "../Components/GithubBtn";
import Head from "next/head";
import { useState } from "react";

const Maximatron = () => 
{
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>               
              <Head>
                <title>Maxime Juncker | Maximatron</title>
              </Head>
            <header className={styles.ProjectAbout}>
            <Link className='link' style={{zIndex: 1, width:"100%",textAlign:"left", marginLeft:"5vw",
                    textDecoration: "underline" ,fontSize: "24px"}}
                    href={"/"}>← Retour</Link>
                <img src={("/Images/Projects/Maximatron/Maximatron-logo.png")} alt="Maximatron logo" />
                <h1>THE MAXIMATRON</h1>
                <PointLight left={30} top={60} backgroundColor={"var(--red)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--red)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--red)"}/>

            </header>
            <section className={styles.Content}>
                <div className={styles.Summary}>
                    <article>
                        <div>
                            <h2 >Idée</h2>
                            <p>Le Maximation est une application permettant une prise de note sous forme de blocks. L'utilisateur peut ajouter une du texte, des listes, des titres, ou des todos.</p>
                            <p>L'application permet la sauvegarde des note avec le format ".maximatron", l'utilisateur peut charger individuellement des pages ou alors charger un dossier, toutes les pages avec l'éxtension .maximatron serons détécter et afficher
                                <br/>
                                l'utilisateur peut également interagire avec l'application soit avec les boutons dans le menu, soit avec des racourcis claviers.
                            </p>

                        </div>
                        <div>
                            <h2>Outils utilisés</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"C#"} src={("/Images/Cards/cs.svg")}/>
                                <SkillCard content={"RIDER"} src={("/Images/Cards/jetbrains.svg")}/>
                                <SkillCard content={"GITHUB"} src={("/Images/Cards/github.svg")}/>
                                <SkillCard content={"AVALONIA UI"} src={("/Images/Cards/avalonia.svg")}/>
                            </div>
                        </div>
                        <div>
                            <h2>Platformes supportées</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"WINDOWS"} src={("../Images/Cards/windows.svg")}/>
                            </div>

                        </div>
                    </article>
                    <article className={styles.screenshotContener} style={{backgroundColor: "var(--redLow)"}}> 
                        <img src={("/Images/Projects/Maximatron/Maximatron-app-screen01.png")} alt="" />
                        <img src={("/Images/Projects/Maximatron/Maximatron-app-screen02.png")} alt="" />
                    </article>
                </div>
                <div className={styles.Caractéristiques}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--red)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--red)"}/>

                    <h2>Caractéristiques</h2>
                    <li>Hierarchie de fichiers</li>
                    <li>Chargement de fichier / dossier</li>
                    <li>Sauvegarde des fichiers</li>
                    <li>Racourcis clavier pour toutes les interactions</li>
                    <li>Format de sauvegarde ".maximatron" custom</li>
                    <li>Couleur d'accent correspond à la couleur d'accent windows</li>
                </div>

                <GithubBtn href="https://github.com/Maxime-juncker/Maximatron"/>
            </section>

            <Link href={"/HumanSI"} className={styles.NextProject}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <section>
                    <h3>NEXT PROJECT</h3>
                    <h1 style={{color:"var(--red)"}}>Human SI</h1>
                </section>
                <img src="/arrow.svg" className="arrow" style={!isHovered ? {filter: "hue-rotate(348deg) saturate(57%) brightness(100%)"}
                : {filter: "grayscale(1) brightness(10)"}}/>
                <div className={styles.background} style={{backgroundColor: "var(--red)"}}/>
            </Link>

            <section className={styles.Footer}>
                <article>
                    
                </article>
            </section>

        </div>
    );
}

export default Maximatron;