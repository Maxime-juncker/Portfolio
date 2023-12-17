const PointLight = ({ left=0, top=0, backgroundColor="#FFF" }) => {
    
    const style = {
        left: left + "vw",
        top: top + "vh",
        backgroundColor,
      };
    return (
            <div className="Point-light" style={style}></div>
        );
};

export default PointLight;
