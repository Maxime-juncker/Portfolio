import PointLight from "../Components/PointLight";
import Link from "next/link";
import SkillCard from "../Components/SkillCard";
import styles from '../styles/about.module.css'
import Head from "next/head";
import { useState } from "react";

const Maximatron = () => 
{
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={styles.main}>               
              <Head>
                <title>Maxime Juncker | Pronout</title>
              </Head>
            <header className={styles.ProjectAbout}>
            <Link className='link' style={{zIndex: 1, width:"100%",textAlign:"left", marginLeft:"5vw",
                    textDecoration: "underline" ,fontSize: "24px"}}
                    href={"/"}>← Retour</Link>
                <img src={("/Images/Projects/Pronout/Pronout-logo.png")} alt="Pronout logo" />
                <h1>PRONOUT</h1>
                <PointLight left={30} top={60} backgroundColor={"var(--pronout)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--pronout)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--pronout)"}/>

            </header>

            <div></div>

            <section className={styles.Content}>
                <div className={styles.Summary}>
                    <article>
                        <div>
                            <h2 >Description:</h2>
                            <p>Clone de l'application Pronote</p>
                        </div>
                        <div>
                            <h2>Outils utilisés</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"C#"} src={("/Images/Cards/cs.svg")}/>
                                <SkillCard content={"XAMARIN"} src={("/Images/Cards/xamarin.svg")}/>
                                <SkillCard content={"RIDER"} src={("/Images/Cards/jetbrains.svg")}/>
                                <SkillCard content={"GITHUB"} src={("/Images/Cards/github.svg")}/>
                            </div>
                        </div>
                        <div>
                            <h2>Platformes supportées</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"Android (API 10+)"} src={("/Images/Cards/android.svg")}/>
                            </div>

                        </div>
                    </article>
                    <article className={styles.screenshotContener} style={{flexDirection:"row", justifyContent:'center'}}> 
                        <img src={("/Images/Projects/Pronout/Pronout-app-screen.png")} style={{width: "30%"}} alt="" />
                        <img src={("/Images/Projects/Pronout/Pronote-app-screen.png")} style={{width: "30%"}} alt="" />
                    </article>
                </div>
                <div className={styles.Caractéristiques}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--pronout)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--pronout)"}/>                    
                </div>
            </section>

            <Link href={"/Raytracing"} className={styles.NextProject}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <section>
                    <h3>NEXT PROJECT</h3>
                    <h1 style={{color:"var(--pronout)"}}>Raytracing</h1>
                </section>
                <img src="/arrow.svg" className="arrow" style={!isHovered ? {filter: "hue-rotate(130deg) saturate(70%) brightness(100%)"}
                : {filter: "grayscale(1) brightness(10)"}}/>
                <div className={styles.background} style={{backgroundColor: "var(--pronout)"}}/>
            </Link>

            <section className={styles.Footer}>
                <article>
                    
                </article>
            </section>

        </div>
    );
}

export default Maximatron;