import Section from './Componenets/Section';
import Footer from './Componenets/Footer'
import Introvideo from './Componenets/Introvideo';
import freshTopicImg from './Assets/academy.png';
import freshTopic2Img from './Assets/story.png';
import tedTalksImg from './Assets/in-the-news.gif';
import franchiseImg from './Assets/franchise.gif';
import maps from './Assets/locations.png';
import coursesImg from './Assets/image2.png';
import albumImg from './Assets/image3.png';
import chaiwalaImg from './Assets/image3.png';
import baratImg from './Assets/image1.png';
import Misc from './Componenets/Misc';
import data from "./Data/data.json";
import './Styles/App.scss';
import "./Styles/intro.scss";
import "./Styles/section.scss";
import "./Styles/Footer.scss";
import "./Styles/Misc.scss";
import "./Styles/mediaQuery.scss";
import { useEffect } from 'react';





const yellow="#fff100",pink="#ed1e79",white="#fff",brown="#6d3d0f"

function App() {
  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala}=data;

  const dotCursor=(e)=>{
    const cursor=document.querySelector(".cursor");
      
    cursor.style.top=`$(e.pageY)px`;
    cursor.style.left=`$(e.pageX)px`;
  }

  useEffect(()=>{
    window.addEventListener("mousemove",dotCursor)

    return ()=>{
      window.removeEventListener("mouseleave",dotCursor)
    }
  })
  
  return (
    <>
      <Introvideo/>
     {/* FreshTopic1  */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/*FreshTopic2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow }
      />

       {/*TedTalks*/}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={tedTalksImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

     {/*frenchise*/}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/*maps*/}
      <Section
        h3={map.heading}
        text={map.text}
        
        imgSrc={maps}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />

      {/*courses*/}

      <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSrc={coursesImg}
        imgSize={'30%'}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/*album*/}
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/*barat*/} 
      <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/*chaiwala*/} 

      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgSrc={chaiwalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
       
      <Footer/>
      <Misc/>

    </>
  );
}

export default App;
