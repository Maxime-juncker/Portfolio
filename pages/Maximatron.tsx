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
                    href={"/"}>← Go Back</Link>
                <img src={("/Images/Projects/Maximatron/Maximatron-logo.png")} alt="Maximatron logo" />
                <h1>THE MAXIMATRON</h1>
                <PointLight left={70} top={80} backgroundColor={"var(--red)"}/>
                <PointLight left={30} top={60} backgroundColor={"var(--red)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--red)"}/>
                <PointLight left={50} top={120} backgroundColor={"var(--red)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--red)"}/>

            </header>
            <section className={styles.Content}>
                <div className={styles.Summary}>
                    <article>
                        <div>
                            <h2 >Project Idea</h2>
                            <p>The Maximatron is a productivity app 
                                where the user can add 
                                multiple type of blocks to do a variety of things like,
                                which include basic text field, 
                                check box, lists and more are planned to come.</p>
                        </div>
                        <div>
                            <h2>Tools Used</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"C#"} src={("/Images/Cards/cs.svg")}/>
                                <SkillCard content={"RIDER"} src={("/Images/Cards/jetbrains.svg")}/>
                                <SkillCard content={"GITHUB"} src={("/Images/Cards/github.svg")}/>
                                <SkillCard content={"AVALONIA UI"} src={("/Images/Cards/avalonia.svg")}/>
                            </div>
                        </div>
                        <div>
                            <h2>Platform supported</h2>
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
                <div className={styles.Features}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--red)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--red)"}/>

                    <h2>Features</h2>
                    <li>Files hierachy</li>
                    <li>Opening folder / file</li>
                    <li>Saving / Quick saving file</li>
                    <li>All action contain shortcut</li>
                    <li>Custom saving using .maximatron format</li>
                    <li>App theme match windows accent colors</li>
                    <li>Lists / note / checkbox blocks</li>
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