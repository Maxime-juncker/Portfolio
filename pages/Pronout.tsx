import PointLight from "../Components/PointLight";
import Link from "next/link";
import SkillCard from "../Components/SkillCard";
import styles from '../styles/about.module.css'
import { useState } from "react";

const Maximatron = () => 
{
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>               

            <header className={styles.ProjectAbout}>
            <Link className='link' style={{zIndex: 1, width:"100%",textAlign:"left", marginLeft:"5vw",
                    textDecoration: "underline" ,fontSize: "24px"}}
                    href={"/"}>← Go Back</Link>
                <img src={("/Images/Projects/Pronout/Pronout-logo.png")} alt="Pronout logo" />
                <h1>PRONOUT</h1>
                <h1 style={{position: 'absolute', bottom: "3vh", fontSize: "24px"}}>SROLL</h1>
                <PointLight left={70} top={80} backgroundColor={"var(--pronout)"}/>
                <PointLight left={30} top={60} backgroundColor={"var(--pronout)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--pronout)"}/>
                <PointLight left={50} top={120} backgroundColor={"var(--pronout)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--pronout)"}/>

            </header>

            <div></div>

            <section className={styles.Content}>
                <div className={styles.Summary}>
                    <article>
                        <div>
                            <h2 >Project Idea</h2>
                            <p>Pronout is a clone from the Pronote application</p>
                        </div>
                        <div>
                            <h2>Tools Used</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"C#"} src={("/Images/Cards/cs.svg")}/>
                                <SkillCard content={"XAMARIN"} src={("/Images/Cards/xamarin.svg")}/>
                                <SkillCard content={"RIDER"} src={("/Images/Cards/jetbrains.svg")}/>
                                <SkillCard content={"GITHUB"} src={("/Images/Cards/github.svg")}/>
                            </div>
                        </div>
                        <div>
                            <h2>Platform supported</h2>
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
                <div className={styles.Features}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--pronout)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--pronout)"}/>

                    <h2>Features</h2>
                    <li>It's just an app clone <br /> nothing to fancy</li>
                    
                </div>

            </section>

            <Link href={"/Maximatron"} className={styles.NextProject}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <section>
                    <h3>NEXT PROJECT</h3>
                    <h1 style={{color:"var(--pronout)"}}>Maximatron</h1>
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