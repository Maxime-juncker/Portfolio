import SkillCard from '../Components/SkillCard';
import PointLight from '../Components/PointLight';
import ProjectCard from '../Components/ProjectCard';
import ContactForm from '../Components/ContactForm'
import Link from 'next/link';
import styles from '../styles/githubBtn.module.css'
import Head from 'next/head';
import favicon from '../public/favicon.ico'

const violet = "#6C399F";
const blue = "#306AFF";
const red = "#FF3055";
const green = "#387256"; 

export default function Home() {
  return (
    <div>

      <main className="App">
              <Head>
                <title>Maxime Juncker | Developper</title>
                <link rel="shortcut icon" href={favicon.src} />              </Head>
              {/* <Navbar/> */}
        
                <section className='Hero' id='Hero'>
                  <PointLight left={10} top={60} backgroundColor={violet}/>
                  <PointLight left={25} top={10} backgroundColor={violet}/>
                  <img src="/Images/header-img.png" alt="" className='background-img' style={{marginTop:"5vh"}}/>
        
                  <h1>JUNCKER <br /> MAXIME</h1>
                  <h3>DEVELOPPER</h3>
                </section>
        
                <section className='About' id='About'>
                  <PointLight left={0} backgroundColor={blue}/>
                  <PointLight left={65} top={20} backgroundColor={blue}/>
                  <div className="Presentation">
                    <h1>A PROPOS</h1>
                    <p>
                      Je suis un étudiant passioné d&apos;informatique
                      actuellement en étude à 42 lyon
                    </p>
                    <h1>FORMATIONS</h1>
                    <p>- Brevet des collèges (mention assez bien) 2017-2021</p>
                    <p>- Baccalauréat général (mention bien) 2021-2024</p>
                    <p>- 42 Lyon Auvergne Rhône Alpes 2024-auj</p>
                  </div>
                  <div className="Skills">
                    <h1>COMPETENCES</h1>
                    <div className="Card-conterner">
                      <SkillCard content={"C#"} src={"/Images/Cards/cs.svg"}/>
                      { <SkillCard content={"C++"} src={"/Images/Cards/cpp.svg"}/> }
                      { <SkillCard content={"C"} src={"/Images/Cards/C.svg"}/> }
                      {/* <SkillCard content={"CSS"} src={"/Images/Cards/css.svg"}/> */}
                      {/* <SkillCard content={"HTML"} src={"/Images/Cards/html.svg"}/> */}
                      <SkillCard content={"PYTHON"} src={"/Images/Cards/python.svg"}/>
                      {/* <SkillCard content={"UNITY"} src={"/Images/Cards/unity.svg"}/> */}
                      {/* <SkillCard content={"UNREAL"} src={"/Images/Cards/unreal.svg"}/> */}
                      {/* <SkillCard content={"BLENDER"} src={"/Images/Cards/blender.svg"}/> */}
                      <SkillCard content={"VS CODE"} src={"/Images/Cards/visual-studio-code.svg"}/>
                      <SkillCard content={"VISUAL STUDIO"} src={"/Images/Cards/visual-studio.svg"}/>
                      {/* <SkillCard content={"RIDER"} src={"/Images/Cards/jetbrains.svg"}/> */}
                      <SkillCard content={"GITHUB / GIT"} src={"/Images/Cards/github.svg"}/>

                    </div>
                  </div>
                </section>
        
                <section className='Work' id='Work'>
                <img src="/Images/rasberryPI.png" alt="" className='background-img' style={{marginTop:"5vh", marginLeft:"60vw"}}/>

                  <h1>PROJETS</h1>
                  <ProjectCard src={"/Images/Projects/Maximatron/Maximatron-screen.png"}
                               title="The Maximatron" description="Application de bureau"
                               logo={"/Images/Projects/Maximatron/Maximatron-logo.png"}
                               nav={`/Maximatron/`}/>
                  <ProjectCard src={"/Images/Projects/HumanSI/HumanSI-screen.png"}
                               title="HumanSI" 
                               description="Simulation de civilisation"
                               logo={"/Images/Projects/HumanSI/HumanSI-logo.png"}
                               nav={"/HumanSI"}/>
                  <ProjectCard src={"/Images/Projects/Pronout/Pronoute-screen.png"}
                               title="Pronout" 
                               description="Application mobile"
                               logo={"/Images/Projects/Pronout/Pronout-logo.png"}
                               nav={"/Pronout"}/>
                  <ProjectCard src={"/Images/Projects/Raytracing/Raytracing_2.png"}
                               title="Raytracing" 
                               description="Raytracer"
                               nav={"/Raytracing"}/>
                  <ProjectCard src={"/Images/Projects/Vulkouch/Vulkouch_screenshot.png"}
                               title="Vulkouch" 
                               description="Implementation de Vulkan"
                               nav={"/Vulkouch"}/>
                               
                  <ProjectCard src={"/Images/Projects/nextcloud/nextcloud-screen.png"}
                               title="next cloud" 
                               description="serveur a pas cher"
                               nav={"/nextcloud"}/>
                  <PointLight left={70} top={20} backgroundColor={red}/>
                  <PointLight left={10} top={5} backgroundColor={red}/>
                  <PointLight left={65} top={55} backgroundColor={red}/>
                  <PointLight left={0} top={70} backgroundColor={red}/>
                  <PointLight left={80} top={80} backgroundColor={red}/>
                  <PointLight left={-10} top={150} backgroundColor={red}/>
                  <PointLight left={60} top={170} backgroundColor={red}/>
                </section>
                <section id='Contact' className='Contact'>
                  <h1>CONTACT</h1>
                  <section>

                      <img src="/Images/pc.png" alt="" className='background-img' style={{marginRight:"40vw", marginBottom:"30vh"}}/>
                    <article className='Contact-card'>
                      <ContactForm/>
                    </article>
                <Link href="https://github.com/Maxime-juncker" className={styles.Github} style={{marginLeft:"5vw"}}>
                  <img src="/Images/Cards/github.svg" alt="The github logo"/>
                  <h1>Github</h1>
                </Link>
                <Link href="CV.pdf" className={styles.Github} style={{ marginLeft:"5vw"}}>
                  <img src="/Images/Cards/github.svg" alt="The github logo"/>
                  <h1>Mon CV</h1>
                </Link>
                  </section>
                  <PointLight left={10} top={0} backgroundColor={green}/>
                  <PointLight left={80} top={20} backgroundColor={green}/>
                  <PointLight left={0} top={60} backgroundColor={green}/>
                </section>


            </main>  
    </div>
  )
}
