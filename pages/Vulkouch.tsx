import PointLight from "../Components/PointLight";
import Link from "next/link";
import SkillCard from "../Components/SkillCard";
import styles from '../styles/about.module.css'
import GithubBtn from "../Components/GithubBtn";
import Head from "next/head";
import { useState } from "react";

const Raytracing = () => 
{
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>               
              <Head>
                <title>Maxime Juncker | Vulkouch</title>
              </Head>
            <header className={styles.ProjectAbout}>
            <Link className='link' style={{zIndex: 1, width:"100%",textAlign:"left", marginLeft:"5vw",
                    textDecoration: "underline" ,fontSize: "24px"}}
                    href={"/"}>← Go Back</Link>
                <img src={("/Images/Projects/Vulkouch/Vulkouch_screenshot.png")} style={{borderRadius:"40px", width: "100%"}} />
                <h1>Vulkouch</h1>
                <PointLight left={30} top={60} backgroundColor={"var(--grey)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--grey)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--grey)"}/>

            </header>
            <section className={styles.Content}>
                <div className={styles.Summary}>
                    <article>
                        <div>
                            <h2 >Project Idea</h2>
                            <p>
                            This is an implementation of the vulkan api in c++
                             (based on https://vulkan-tutorial.com/). 
                             This project is using glfw, glm and vulkan libraries. 
                            </p>
                        </div>
                        <div>
                            <h2>Tools Used</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"C++"} src={("/Images/Cards/cpp.svg")}/>
                                <SkillCard content={"Visual studio"} src={("/Images/Cards/visual-studio.svg")}/>
                                <SkillCard content={"glfw"} src={("/Images/Cards/lib-icon.png")}/>
                                <SkillCard content={"glm"} src={("/Images/Cards/lib-icon.png")}/>
                                <SkillCard content={"Vuklan"} src={("/Images/Cards/lib-icon.png")}/>
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
                        <img src={("/Images/Projects/Vulkouch/Vulkouch_screenshot.png")} alt="" />
                    </article>
                </div>
                <div className={styles.Features}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--grey)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--grey)"}/>

                    <h2>Feetures</h2>
                    <li>Renderer wich can use multiple render system</li>
                    <li>Implementation of the pipeline, device, swapchain and window</li>
                    <li>dynamic shader compile </li>
                    <li>Using gameobject / model for displaying stuff.</li>
                </div>

                <GithubBtn href="https://github.com/Maxime-juncker/Vulkouch"/>
            </section>

            <Link href={"/Maximatron"} className={styles.NextProject}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <section>
                    <h3>NEXT PROJECT</h3>
                    <h1 style={{color:"var(--grey)"}}>Maximatron</h1>
                </section>
                <img src="/arrow.svg" className="arrow" style={!isHovered ? {filter: "grayscale(1) brightness(2)"}
                : {filter: "grayscale(1) brightness(10)"}}/>
                <div className={styles.background} style={{backgroundColor: "var(--grey)"}}/>
            </Link>

            <section className={styles.Footer}>
                <article>
                    
                </article>
            </section>

        </div>
    );
}

export default Raytracing;