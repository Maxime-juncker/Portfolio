import SkillCard from '../Components/SkillCard';
import PointLight from '../Components/PointLight';
import ProjectCard from '../Components/ProjectCard';
import Link from 'next/link';

const violet = "#6C399F";
const blue = "#306AFF";
const red = "#FF3055";
const green = "#387256"; 

export default function Home() {
  return (
      <main className="App">
              {/* <Navbar/> */}
        
                <section className='Hero' id='Hero'>
                  <PointLight left={10} top={60} backgroundColor={violet}/>
                  <PointLight left={80} top={45} backgroundColor={violet}/>
                  <PointLight left={25} top={10} backgroundColor={violet}/>
        
                  <h1>JUNCKER <br /> MAXIME</h1>
                  <h3>SOFTWARE DEVELOPPER</h3>
                </section>
        
                <section className='About' id='About'>
                  <PointLight left={0} backgroundColor={blue}/>
                  <PointLight left={65} top={20} backgroundColor={blue}/>
                  <div className="Presentation">
                    <h1>ABOUT ME</h1>
                    <p>
                      I’m a frensh student who’s looking into software developpement, 
                      I also know web and game developpement. <br /><br />
                      I use object oriented language and mainly 
                      use c++ and c# language to create some small app 
                      for android or windows. <br /><br />
                      I’m also looking into creating 
                      simulation and machine learning stuff.
                    </p>
                  </div>
                  <div className="Skills">
                    <h1>SKILLS</h1>
                    <div className="Card-conterner">
                      <SkillCard content={"C#"} src={"/Images/Cards/cs.svg"}/>
                      <SkillCard content={"C++"} src={"/Images/Cards/cpp.svg"}/>
                      <SkillCard content={"CSS"} src={"/Images/Cards/css.svg"}/>
                      <SkillCard content={"PYTHON"} src={"/Images/Cards/html.svg"}/>
                      <SkillCard content={"UNITY"} src={"/Images/Cards/unity.svg"}/>
                      <SkillCard content={"UNREAL"} src={"/Images/Cards/unreal.svg"}/>
                      <SkillCard content={"BLENDER"} src={"/Images/Cards/blender.svg"}/>
                      <SkillCard content={"VS CODE"} src={"/Images/Cards/visual-studio-code.svg"}/>
                      <SkillCard content={"VISUAL STUDIO"} src={"/Images/Cards/visual-studio.svg"}/>
                      <SkillCard content={"RIDER"} src={"/Images/Cards/jetbrains.svg"}/>
                      <SkillCard content={"GITHUB"} src={"/Images/Cards/github.svg"}/>
                      <SkillCard content={"XAMARIN"} src={"/Images/Cards/xamarin.svg"}/>
                      <SkillCard content={"AVALONIA UI"} src={"/Images/Cards/avalonia.svg"}/>
                    </div>
                  </div>
                </section>
        
                <section className='Work' id='Work'>
                  <h1>WORK</h1>
                  <h2>MY LATEST PROJECT</h2>
                  <ProjectCard src={"/Images/Projects/Maximatron/Maximatron-screen.png"}
                               title="The Maximatron" description="Desktop development"
                               logo={"/Images/Projects/Maximatron/Maximatron-logo.png"}
                               nav={`/Maximatron/`}/>
                  <ProjectCard src={"/Images/Projects/HumanSI/HumanSI-screen.png"}
                               title="HumanSI" 
                               description="Human Simulation"
                               logo={"/Images/Projects/HumanSI/HumanSI-logo.png"}
                               nav={"/HumanSI"}/>
                  <ProjectCard src={"/Images/Projects/Pronout/Pronoute-screen.png"}
                               title="Pronout" 
                               description="Mobile App"
                               logo={"/Images/Projects/Pronout/Pronoute_logo.png"}
                               nav={"/Pronout"}/>
                  <PointLight left={70} top={20} backgroundColor={red}/>
                  <PointLight left={10} top={5} backgroundColor={red}/>
                  <PointLight left={65} top={55} backgroundColor={red}/>
                  <PointLight left={0} top={70} backgroundColor={red}/>
                  <PointLight left={80} top={80} backgroundColor={red}/>
                  <PointLight left={80} top={150} backgroundColor={green}/>
                  <PointLight left={0} top={100} backgroundColor={green}/>
                  <PointLight left={10} top={150} backgroundColor={green}/>               
        
                </section>
        
                <section id='Contact' className='Contact'>
                  <h1>CONTACT</h1>
                  <section>
                    <article className='Contact-card'>
                      {/* <ContactForm/> */}
                    </article>
                  </section>
                </section>
            </main>  
  )
}
