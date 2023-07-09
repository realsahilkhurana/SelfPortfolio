import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
      <div className="imgContainer">
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/QNKdW1D/SAHIL.png" alt="SAHIL" border="0" /></a>
      </div></div>
      <div className="right">
        
        <div className="wrapper">
          <h2 margin="0">Hi there, I'm</h2>
          <h1>Sahil Khurana</h1>
          <h2>Computer Science Sophomore<span></span></h2>
          </div>
          <a href="#portfolio">
            <img className="myimg" src="free-arrow-down-icon-3101-thumb.png" alt=""></img>
          </a>
        
      </div>
    </div>
  );
}
