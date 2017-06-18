import React from 'react';

const Footer = () => {
  // console.log("props",props);

  const styles = {
    display: 'block',
    margin: '15px',
    paddingBottom: '15px'
  };

  return (
    <div className="footer-main" style={styles}>
      <div className="footer-third">
        <img style={{width:'75px'}} src="./imgs/GC_flag.png" alt="" />
      </div>
      <div style={{textAlign:'center', fontSize:'12px'}} className="footer-third">
        <p><div className="hash-tag">#</div>FuledByDefeat <div className="hash-tag">#</div>SecretToVictoryPodcast</p>
      </div>
      <div style={{textAlign:'right'}} className="footer-third">
        <a href="https://www.google.com/"><img style={{width:'20px', margin:'0 10px'}} src="./imgs/Icon_Fb.svg" alt="" /></a>
        <a href="https://www.google.com/"><img style={{width:'20px', margin:'0 10px'}} src="./imgs/Icon_Twitter.svg" alt="" /></a>
        <a href="https://www.google.com/"><img style={{width:'20px', margin:'0 10px'}} src="./imgs/Icon_Snapchat.svg" alt="" /></a>
      </div>
    </div>
  );
};


export default Footer;