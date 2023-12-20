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
            <Link className='link' style={{zIndex: 1, width:"100%",textAlign:"left", marginLeft:"5vw",
                    textDecoration: "underline" ,fontSize: "24px"}}
                    href={"/"}>← Go Back</Link>
                <img src={("/Images/Projects/HumanSI/HumanSI-logo.png")} alt="Human SI logo" style={{borderRadius:"40px", width: "600px"}} />
                <h1>Human SI</h1>
                <h1 style={{position: 'absolute', bottom: "3vh", fontSize: "24px"}}>SROLL</h1>
                <PointLight left={70} top={80} backgroundColor={"var(--human-si)"}/>
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
                            <h2 >Project Idea</h2>
                            <p>HumanSI is a simple project about simulating multiple
                                 population inside a procedurally generated world, 
                                 they can expand, create new inhabitant, new house or 
                                 event wonders, if two civilisation are to close to each 
                                 other, they could start a war.
                                 Note : Project made with 4 friend for a competition</p>
                        </div>
                        <div>
                            <h2>Tools Used</h2>
                            <div className="Card-conterner">
                            <SkillCard content={"PYTHON"} src={"/Images/Cards/html.svg"}/>
                            <SkillCard content={"BLENDER"} src={"/Images/Cards/blender.svg"}/>
                            <SkillCard content={"RIDER"} src={"/Images/Cards/jetbrains.svg"}/>
                            <SkillCard content={"GITHUB"} src={"/Images/Cards/github.svg"}/>

                            </div>
                        </div>
                        <div>
                            <h2>Platform supported</h2>
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
                <div className={styles.Features}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--human-si)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--human-si)"}/>

                    <h2>Features</h2>
                    <li>Procedural Map generation</li>
                    <li>Old generated map are save for future sessions</li>
                    <li>Multiple civilisation type with there unique stats</li>
                    <li>Relation system between civilisation</li>
                    <li>State machine AI</li>
                    <li>Simple object system that allow user to add it’s on civilisation (tutorial on github)</li>
                    <li>inspect menu</li>
                    <li>User tools (damage, place buildings, etc...)</li>
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