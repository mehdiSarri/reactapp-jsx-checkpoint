import './App.css';
import './css/Style.css'
import React from 'react';
import myImageInSrc from "./imageInSrc.jpg"
function App() {
  return (
    <>
    <div style={{border:"solid 1px black",maxWidth:"500px"}}>

      <h1 class="title red">Me In Djanet</h1>

      <br/>

      <img src={myImageInSrc} alt={"in-src"}/>

      <br/>

      <img src={"/imageInPublic.jpg"} alt={"in-public"}/>

    </div>
    <video width="320" height="240" controls>

      <source src="myVideo.mp4" type="video/mp4"/>
   
   </video>
   </>
  );
}

export default App;
