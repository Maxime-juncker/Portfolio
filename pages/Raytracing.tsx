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
                <title>Maxime Juncker | Raytracing</title>
              </Head>
            <header className={styles.ProjectAbout}>
            <Link className='link' style={{zIndex: 1, width:"100%",textAlign:"left", marginLeft:"5vw",
                    textDecoration: "underline" ,fontSize: "24px"}}
                    href={"/"}>← Go Back</Link>
                <img src={("/Images/Projects/Raytracing/Raytracing_2.png")} alt="Human SI logo" style={{borderRadius:"40px", width: "600px"}} />
                <h1>RAYTRACER</h1>
                <PointLight left={70} top={80} backgroundColor={"var(--violet)"}/>
                <PointLight left={30} top={60} backgroundColor={"var(--violet)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--violet)"}/>
                <PointLight left={50} top={120} backgroundColor={"var(--violet)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--violet)"}/>

            </header>
            <section className={styles.Content}>
                <div className={styles.Summary}>
                    <article>
                        <div>
                            <h2 >Project Idea</h2>
                            <p>
                            This is a basic raytracer running on the cpu
                             (with multithreading enable). It’s using a 
                             custom The Walnut and ImGUI labraries. All shadow 
                             / ambiant occlusion come only from the raytracing
                            </p>
                        </div>
                        <div>
                            <h2>Tools Used</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"C++"} src={("/Images/Cards/cpp.svg")}/>
                                <SkillCard content={"Visual studio"} src={("/Images/Cards/visual-studio.svg")}/>
                                <SkillCard content={"ImGUI"} src={("/Images/Cards/lib-icon.png")}/>
                                <SkillCard content={"Wallnut"} src={("/Images/Cards/lib-icon.png")}/>
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
                        <img src={("/Images/Projects/Raytracing/Raytracing_2.png")} alt="" />
                        <img src={("/Images/Projects/Raytracing/Raytracing_1.png")} alt="" />
                    </article>
                </div>
                <div className={styles.Features}>
                <PointLight left={-40} top={-20} backgroundColor={"var(--violet)"}/>
                <PointLight left={0} top={-20} backgroundColor={"var(--violet)"}/>

                    <h2>Feetures</h2>
                    <li>Ratracer with accumulation</li>
                    <li>Custom random generator (based on PCG_Hash)</li>
                    <li>Material : color, roughness</li>
                    <li>Emissive materials</li>
                    <li>Dynamics sphere : position, radius, materials</li>
                </div>

                <GithubBtn href="https://github.com/Maxime-juncker/RayTracing"/>
            </section>

            <Link href={"/Vulkouch"} className={styles.NextProject}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <section>
                    <h3>NEXT PROJECT</h3>
                    <h1 style={{color:"var(--violet)"}}>Vulkouch</h1>
                </section>
                <img src="/arrow.svg" className="arrow" style={!isHovered ? {filter: "hue-rotate(275deg) saturate(72%) brightness(100%)"}
                : {filter: "grayscale(1) brightness(10)"}}/>
                <div className={styles.background} style={{backgroundColor: "var(--violet)"}}/>
            </Link>

            <section className={styles.Footer}>
                <article>
                    
                </article>
            </section>

        </div>
    );
}

export default Raytracing;