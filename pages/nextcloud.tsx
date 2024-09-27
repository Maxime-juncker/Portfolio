import PointLight from "../Components/PointLight";
import Link from "next/link";
import SkillCard from "../Components/SkillCard";
import styles from '../styles/about.module.css'
import GithubBtn from "../Components/GithubBtn";
import Head from "next/head";
import { useState } from "react";

const Maximatron = () => 
{
    const [isHovebleu, setIsHovebleu] = useState(false);
    return (
        <div>               
              <Head>
                <title>Maxime Juncker | Maximatron</title>
              </Head>
            <header className={styles.ProjectAbout}>
            <Link className='link' style={{zIndex: 1, width:"100%",textAlign:"left", marginLeft:"5vw",
                    textDecoration: "underline" ,fontSize: "24px"}}
                    href={"/"}>← Retour</Link>
                <img src={("/Images/Projects/nextcloud/nextcloud.png")} alt="nextcloud logo" />
                <h1>SERVER NEXTCLOUD</h1>
                <PointLight left={30} top={60} backgroundColor={"var(--bleu)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--bleu)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--bleu)"}/>

            </header>
            <section className={styles.Content}>
                <div className={styles.Summary}>
                    <article>
                        <div>
                            <h2 >Idée</h2>
                            Faire un server nas en utilisant le plus petit budget possible, la carte même provient d&apos;un Asus E406m avec 4go de ram et 64go de stockage, open ssh est installer pour pouvoir intéragir avec un pc distant.
                            <br />
                            Ubutun server est l&apos;os installer pour maximiser les performances et la carte même est installer dans un boitier en aluminium avec un heatsink récuperer sur une ps2

                        </div>
                        <div>
                            <h2>Outils utilisés</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"Linux"} src={("/Images/Cards/linux.svg")}/>
                                <SkillCard content={"next cloud"} src={("/Images/Cards/nextcloud.svg")}/>
                            </div>
                        </div>
                        <div>
                            <h2>Platformes supportées</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"WINDOWS"} src={("../Images/Cards/windows.svg")}/>
                                <SkillCard content={"MAC"} src={("../Images/Cards/mac.svg")}/>
                                <SkillCard content={"LINUX"} src={("../Images/Cards/linux.svg")}/>
                                <SkillCard content={"ANDROID"} src={("../Images/Cards/android.svg")}/>
                            </div>

                        </div>
                    </article>
                    <article className={styles.screenshotContener} style={{backgroundColor: "var(--bleuLow)"}}> 
                        <img src={("/Images/Projects/nextcloud/nextcloud-screen.png")} alt="" />
                        <img src={("/Images/Projects/nextcloud/serv.jpg")} alt="" />
                    </article>
                </div>
                <div className={styles.Caractéristiques}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--bleu)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--bleu)"}/>
                </div>
            </section>

            <Link href={"/Maximatron"} className={styles.NextProject}
            onMouseEnter={() => setIsHovebleu(true)}
            onMouseLeave={() => setIsHovebleu(false)}>
                <section>
                    <h3>NEXT PROJECT</h3>
                    <h1 style={{color:"var(--bleu)"}}>MAXIMATRON</h1>
                </section>
                <img src="/arrow.svg" className="arrow" style={!isHovebleu ? {filter: "hue-rotate(200deg) saturate(57%) brightness(100%)"}
                : {filter: "grayscale(1) brightness(10)"}}/>
                <div className={styles.background} style={{backgroundColor: "var(--bleu)"}}/>
            </Link>

            <section className={styles.Footer}>
                <article>
                    
                </article>
            </section>

        </div>
    );
}

export default Maximatron;