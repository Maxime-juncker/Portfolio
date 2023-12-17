import Image from "next/image";


const SkillCard = ({ src, content }) => {
    return (
    <>
      <div className='Skill-card'>
        <Image alt={"The app icon"} src={src} width={50} height={50}/>
        <h3>{content}</h3>
      </div>
    </>
  );
};

export default SkillCard;
