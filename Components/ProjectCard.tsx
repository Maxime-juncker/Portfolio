import Link from "next/link";

const ProjectCard = ({src="", title="", description="", logo="", nav=""}) => 
{
    
    return(
      
        <Link href={nav} className='Project-card'>
          <img src={src} alt="" />
          <section>
            <article>
              <h1>{title}</h1>
              <h3>{description}</h3>
            </article>
            <img src={logo} alt="" />
          </section>
        </Link>
      );
};

export default ProjectCard;