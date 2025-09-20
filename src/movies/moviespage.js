import "./moviespage.css";
import pimg from "../images/rakshabandhan.jpg";
import rimg from "../images/farzi.jpg";
import simg from "../images/sk.jpg";
import londonimg from "../images/Londonmovie.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Headerpage1 from "../header1/headerpage1";
import FooterPage from "../footer/footerpage";
import { Carousel } from 'primereact/carousel';
import logo from "../images/pic1.jpg";
import logo1 from "../images/darknight.jpg";
import logo2 from "../images/genius.jpg";
import logo3 from "../images/gangubai.jpg";
import logo4 from "../images/rrrmovie.jpg";
import logo5 from "../images/cuttputli.jpg";
import logo6 from "../images/bahubali.jpg";
import logo7 from "../images/kgf.jpg";
import logo8 from "../images/geetha-govindam.jpg";
import logo9 from "../images/yashoda.jpg";
import logo10 from "../images/wanted.jpg";
import img from "../images/tujhuthi.jpg";
import img2 from "../images/pathan1.jpg";
import img3 from "../images/bholaa.jpg";
import img4 from "../images/bhediya.jpeg";
import img5 from "../images/Brahmastra.png";
import img6 from "../images/shehzada.jpg";
import img7 from "../images/rrrmovie.jpg";
import img8 from "../images/83.jpg";
import bollywood from "../images/vikramvedha.jpg";
import bollywood1 from "../images/missionmajnu.jpg";
import bollywood2 from "../images/gangubai1.jpg";
import bollywood3 from "../images/shershah.jpg";
import bollywood4 from "../images/selfiee.jpg";
import bollywood5 from "../images/goodbye.jpg";
import bollywood6 from "../images/rakshabandhan.jpg";
import bollywood7 from "../images/Ek-Villain-Returns.jpg";
import movie from "../images/lalsingh.jpg";
import movie1 from "../images/atrangi.jpg";
import movie2 from "../images/radhe.png";
import movie3 from "../images/tanhajimovie.jpg";
import movie4 from "../images/toofan.jpg";
import movie5 from "../images/Drishyam.jpg";
import movie6 from "../images/jersey.jpg";
import movie7 from "../images/saaho.jpeg";
import skf from "../images/bhoolbhulaiyaa.jpg";
import skf1 from "../images/Shiddat.jpg";
import skf2 from "../images/kabirsingh.jpg";
import skf3 from "../images/aedilhai.jpg";
import skf4 from "../images/raees-review-1.jpg";
import skf5 from "../images/Liger.jpg";
import skf6 from "../images/sanamteriksm.jpg";
import skf7 from "../images/dangal.jpeg";
import hollywood from "../images/incaption.jpg";
import hollywood1 from "../images/65.jpg";
import hollywood2 from "../images/titanic.jpg";
import hollywood3 from "../images/exorcist.jpg";
import hollywood4 from "../images/catchme.jpg";
import hollywood5 from "../images/lordofthe.jpg";
import hollywood6 from "../images/shazam.jpg";
import hollywood7 from "../images/alien.jpg";
import hwm from "../images/avengers.jpg";
import hwm1 from "../images/spiderman.jpg";
import hwm2 from "../images/jocker.jpg";
import hwm3 from "../images/avatar.jpg";
import hwm4 from "../images/johnwick.jpg";
import hwm5 from "../images/godfather.jpg";
import hwm6 from "../images/jaws.jpg";
import south from "../images/dearcomrade.jpg";
import south1 from "../images/businessman.jpg";
import south2 from "../images/Kaithi.jpg";
import south3 from "../images/Kaala.jpg";
import south4 from "../images/googly.jpeg";
import south5 from "../images/jaibhim.jpg";
import south6 from "../images/anjan.jpg";
import south7 from "../images/makkhi.jpg";
import southhindi from "../images/beast.jpg";
import southhindi1 from "../images/bahubali2.jpg";
import southhindi2 from "../images/srimanthudu.jpg";
import southhindi3 from "../images/vivegam.jpg";
import southhindi4 from "../images/sivajitheboss.jpg";
import southhindi5 from "../images/Yevadu.jpg";
import southhindi6 from "../images/suriya-24.jpg";
import horrar from "../images/redsnow.jpeg";
import horrar1 from "../images/noone.jpg";
import horrar2 from "../images/it.jpg";
import horrar3 from "../images/evil.jpg";
import horrar4 from "../images/classic.jpg";
import horrar5 from "../images/llorona.jpg";
import horrar6 from "../images/winnie.jpg";
import horrar7 from "../images/london.jpg";
import horrar8 from "../images/nh7.jpg";
import horrar9 from "../images/Waktu.jpg";
import horrar10 from "../images/jagat.jpeg";
import award from "../images/sir.jpg";
import award1 from "../images/83.jpg";
import award2 from "../images/zindagi-na-milegi-dobara.jpg";
import award3 from "../images/3_idiots.jpeg";
import award4 from "../images/bhaag.jpeg";
import award5 from "../images/rrrmovie.jpg";
import award6 from "../images/tanhaji.jpg";
import award7 from "../images/pathan1.jpg";
import top from "../images/pathan1.jpg";
import top1 from "../images/chatterjee.jpg";
import top2 from "../images/tujhuthi.jpg";
import top3 from "../images/themother.jpg";
import top4 from "../images/shehzada.jpg";
import top5 from "../images/raees.jpg";
import top6 from "../images/kisikabhai.jpg";
import top7 from "../images/farzi.jpg";
import top8 from "../images/dangal.jpeg";
import top9 from "../images/suryavanshi.jpg";
import axios from "axios";
import { FaRegBookmark } from "react-icons/fa";
import {FaBookmark} from "react-icons/fa";
import { DBURL_MYLIST } from "../constants";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useRef } from "react";

function MoviePage() {
    const [photo, setPhoto] = useState(1);
    const[myList,setMyList] = useState([]);
    const toast = useRef(null);


    useEffect(() => {
      const interval = setInterval(() => {
        change();
      }, 4000);
  
      return () => {
        clearInterval(interval);
      };
    }, [photo]);
  
    const change = () => {
      if (photo === 4) {
        setPhoto(1);
        return;
      }
  
      setPhoto((prev) => prev + 1);
    };
  
    const returnPhotoURL = () => {
      switch (photo) {
        case 1:
          return pimg;
        case 2:
          return rimg
        case 3:
          return simg;
        case 4:
          return londonimg;
        default:
          return null;
      }
    };

    useEffect(() => {
    
      axios.get(DBURL_MYLIST).then((res) => {
        setMyList(res.data)
    }).catch((err) => {
        console.log(err);
    })

    },[]);

    const products = [

      {image:logo,url:"https://www.youtube.com/watch?v=4tMtXq8XmHw"},
      {image:logo1,url:"https://www.youtube.com/watch?v=KyXWkoRlthY"},
      {image:logo2,url:"https://www.youtube.com/watch?v=oXfkjTQoUUA&t=7836s"},
      {image:logo3,url:"https://www.youtube.com/watch?v=1amiEcnjGE8"},
      {image:logo4,url:"https://www.youtube.com/watch?v=ikSPSDjhTaQ"},
      {image:logo5,url:"https://www.youtube.com/watch?v=OTibJ9k1nEk"},
      {image:logo6,url:"https://www.youtube.com/watch?v=j_WxBojwsZ8"},
      {image:logo7,url:"https://www.youtube.com/watch?v=gKizDojsdvs&t=2177s"},
      {image:logo8,url:"https://www.youtube.com/watch?v=sPArOhLkO3k"},
      {image:logo9,url:"https://www.youtube.com/watch?v=1uXn1GCYwGc"},
      {image:logo10,url:"https://www.youtube.com/watch?v=m2pCw3zYbJ0"},
       
  ];

    const products1 = [
        {image:img,url:"https://www.youtube.com/watch?v=JzGGF4JPFIQ"},
        {image:img2,url:"https://www.youtube.com/watch?v=vqu4z34wENw"},
        {image:img3,url:"https://www.youtube.com/watch?v=0bWhOuE8QtY"},
        {image:img4,url:"https://www.youtube.com/watch?v=U8vHUgDrcWM"},
        {image:img5,url:"https://www.youtube.com/watch?v=BUjXzrgntcY"},
        {image:img6,url:"https://www.youtube.com/watch?v=vbSGPIS2_ao"},
        {image:img7,url:"https://www.youtube.com/watch?v=ikSPSDjhTaQ"},
        {image:img8,url:"https://www.youtube.com/watch?v=7vD70_5Xadc"},
  ];

  const products2 = [
        {image:bollywood,url:"https://www.youtube.com/watch?v=hpwnlr-ZHB0"},
        {image:bollywood1,url:"https://www.youtube.com/watch?v=Gw77Nx4eBMc"},
        {image:bollywood2,url:"https://www.youtube.com/watch?v=1amiEcnjGE8"},
        {image:bollywood3,url:"https://www.youtube.com/watch?v=Q0FTXnefVBA"},
        {image:bollywood4,url:"https://www.youtube.com/watch?v=lS1KScfdr70"},
        {image:bollywood5,url:"https://www.youtube.com/watch?v=n5gICDMQOcA"},
        {image:bollywood6,url:"https://www.youtube.com/watch?v=lpqswH6FY-c"},
        {image:bollywood7,url:"https://www.youtube.com/watch?v=swPhyd0g6K8"},
];


const products3 = [
    {image:movie,url:"https://www.youtube.com/watch?v=7Jbt2XsPH4k"},
    {image:movie1,url:"https://www.youtube.com/watch?v=x3oMm5JGXZM"},
    {image:movie2,url:"https://www.youtube.com/watch?v=n5MVzhwupBY"},
    {image:movie3,url:"https://www.youtube.com/watch?v=cffAGIYTEHU&t=12s"},
    {image:movie4,url:"https://www.youtube.com/watch?v=4qalsBNwZds"},
    {image:movie5,url:"https://www.youtube.com/watch?v=m3L0hDrEPcw"},
    {image:movie6,url:"https://www.youtube.com/watch?v=BT0zd0kmTxM"},
    {image:movie7,url:"https://www.youtube.com/watch?v=lD0-ztCFydA"},
];

const products4 = [
    {image:skf,url:"https://www.youtube.com/watch?v=P2KRKxAb2ek"},
    {image:skf1,url:"https://www.youtube.com/watch?v=x60tMH7Pz9s"},
    {image:skf2,url:"https://www.youtube.com/watch?v=RiANSSgCuJk"},
    {image:skf3,url:"https://www.youtube.com/watch?v=Z_PODraXg4E"},
    {image:skf4,url:"https://www.youtube.com/results?search_query=raees"},
    {image:skf5,url:"https://www.youtube.com/watch?v=TgcruVx0dNM"},
    {image:skf6,url:"https://www.youtube.com/watch?v=Q9WMfd96qVo"},
    {image:skf7,url:"https://www.youtube.com/watch?v=x_7YlGv9u1g&t=2s"},
];

const products5 = [
  {image:hollywood,url:"https://www.youtube.com/watch?v=YoHD9XEInc0"},
  {image:hollywood1,url:"https://www.youtube.com/watch?v=bHXejJq5vr0"},
  {image:hollywood2,url:"https://www.youtube.com/watch?v=kVrqfYjkTdQ"},
  {image:hollywood3,url:"https://www.youtube.com/watch?v=0iS59iV2Ffs"},
  {image:hollywood4,url:"https://www.youtube.com/watch?v=s-7pyIxz8Qg"},
  {image:hollywood5,url:"https://www.youtube.com/watch?v=x8UAUAuKNcU"},
  {image:hollywood6,url:"https://www.youtube.com/results?search_query=shazam+fury+of+the+gods"},
  {image:hollywood7,url:"https://www.youtube.com/watch?v=H-vcRILkJp4"},
];


const products6 = [
    {image:hwm,url:"https://www.youtube.com/results?search_query=avengers+movie"},
    {image:hwm1,url:"https://www.youtube.com/watch?v=s1lN_1JP8j0"},
    {image:hwm2,url:"https://www.youtube.com/watch?v=zAGVQLHvwOY"},
    {image:hwm3,url:"https://www.youtube.com/results?search_query=avtar+movie"},
    {image:hwm4,url:"https://www.youtube.com/results?search_query=johnwick+movie"},
    {image:hwm5,url:"https://www.youtube.com/watch?v=UaVTIH8mujA"},
    {image:hwm6,url:"https://www.youtube.com/watch?v=dg-HlHMhthY&list=PLZaDZbCr93GdFIURpebBfit5oBjCisRNT"},
];

const products7 = [
    {image:south,url:"https://www.youtube.com/watch?v=zzhfvt5vZHI"},
    {image:south1,url:"https://www.youtube.com/watch?v=r6B7X1nkFe0"},
    {image:south2,url:"https://www.youtube.com/watch?v=-I12_W7UHh0"},
    {image:south3,url:"https://www.youtube.com/watch?v=aeV9HpHe_T4&list=PLDzvTFEtakc37hKKgHM3Xf3JnSxvrLPbC"},
    {image:south4,url:"https://www.youtube.com/watch?v=IMCDispQSTI"},
    {image:south5,url:"https://www.youtube.com/watch?v=nnXpbTFrqXA"},
    {image:south6,url:"https://www.youtube.com/watch?v=MJxEQPMh_io"},
    {image:south7,url:"https://www.youtube.com/watch?v=TEajGiOff_0"},
];

const products8 = [
   {image:southhindi,url:"https://www.youtube.com/watch?v=0E1kVRRi6lk"},
   {image:southhindi1,url:"https://www.youtube.com/watch?v=XqMROUQ_iRE"},
   {image:southhindi2,url:"https://www.youtube.com/watch?v=LS6XiINMc2s"},
   {image:southhindi3,url:"https://www.youtube.com/watch?v=eHkke8hsy1I"},
   {image:southhindi4,url:"https://www.youtube.com/watch?v=NenlQz-FkLY"},
   {image:southhindi5,url:"https://www.youtube.com/watch?v=AgwszFUm_yQ"},
   {image:southhindi6,url:"https://www.youtube.com/watch?v=wqXE_es_I3M"},
];

  const products9 = [
      {image:horrar,url:"https://www.youtube.com/watch?v=XoXzOYGq7ag"},
      {image:horrar1,url:"https://www.youtube.com/watch?v=sY2TLiK27g4"},
      {image:horrar2,url:"https://www.youtube.com/watch?v=bKL1ImsN-DU"},
      {image:horrar3,url:"https://www.youtube.com/watch?v=R7Bm7JJrBPM"},
      {image:horrar4,url:"https://www.youtube.com/watch?v=wFStgrO7AGQ"},
      {image:horrar5,url:"https://www.youtube.com/watch?v=ojuqj8_wWo8"},
      {image:horrar6,url:"https://www.youtube.com/watch?v=W3E74j_xFtg"},
      {image:horrar7,url:"https://www.youtube.com/watch?v=s2FJlLkmIbs"},
      {image:horrar8,url:"https://www.youtube.com/watch?v=cyft-rSF1Wo"},
      {image:horrar9,url:"https://www.youtube.com/watch?v=qS1THPxeGkg"},
      {image:horrar10,url:"https://www.youtube.com/watch?v=mCbmMJ1EtwU"},
    
      
];

  const products10 = [
      {image:award,url:"https://www.youtube.com/watch?v=7vD70_5Xadc"},
      {image:award1,url:"https://www.youtube.com/watch?v=QHdkC6Kn0Io"},
      {image:award2,url:"https://www.youtube.com/watch?v=lHubgWDweAE"},
      {image:award3,url:"https://www.youtube.com/watch?v=s98hkZ4FeXQ"},
      {image:award4,url:"https://www.youtube.com/watch?v=QVKCl3qVuu0&list=PL42nJcEXOOwvZ9AhtFPjXMHuWNz12pcdq"},
      {image:award5,url:"https://www.youtube.com/watch?v=ikSPSDjhTaQ"},
      {image:award6,url:"https://www.youtube.com/watch?v=cffAGIYTEHU"},
      {image:award7,url:"https://www.youtube.com/watch?v=vqu4z34wENw"},
  ]

  const products11 = [
      {image:top,url:"https://www.youtube.com/watch?v=vqu4z34wENw"},
      {image:top1,url:"https://www.youtube.com/watch?v=1Bll53fBa9U"},
      {image:top2,url:"https://www.youtube.com/watch?v=JzGGF4JPFIQ"},
      {image:top3,url:"https://www.youtube.com/watch?v=8BFdFeOS3oM"},
      {image:top4,url:"https://www.youtube.com/watch?v=vbSGPIS2_ao"},
      {image:top5,url:"https://www.youtube.com/watch?v=JKMpoTYjo1E"},
      {image:top6,url:"https://www.youtube.com/watch?v=bsi8_9EoYyg&t=23s"},
      {image:top7,url:"https://www.youtube.com/watch?v=rcQ_xZdzPBc"},
      {image:top8,url:"https://www.youtube.com/watch?v=x_7YlGv9u1g"},
      {image:top9,url:"https://www.youtube.com/watch?v=cYJTJhQsY_w"},
]


 




  const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  const onSaveButton = (product) => {
      let index = myList.findIndex((a) => a.image === product.image)
      if (index === -1) {
        axios.post(DBURL_MYLIST,product).then((res) => {
        console.log(res.data);
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      }).catch((err) => {
        console.log(err);
      })
        axios.get(DBURL_MYLIST).then((res) => {
          setMyList(res.data)
      }).catch((err) => {
          console.log(err);
      })
      }
      
  }
  const accept = (product) => {
    onSaveButton(product)
}

const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
}

  const confirm1 = (product) => {
    confirmDialog({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept : () => accept(product),
        reject
    });
};


  const productTemplate = (product) => {
    let index = myList.findIndex((a) => a.image === product.image)
    return (
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3" style={{position:"relative"}}>              
              <a href={product.url} target="_"><img src={product.image} className="img" /></a>
             {index !== -1 ?  <  FaBookmark               
                className="iconSave"                  
              /> : <FaRegBookmark  className="iconSave"   onClick={() => confirm1(product)}/>}
         </div>
    );
};
  
  
    return (
      <>
       <Toast ref={toast} />
       <ConfirmDialog />
      <div
        className="imageBackground"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${rimg})`,
          backgroundImage: ` url(${returnPhotoURL()})`
        }}
       
      >
        
        <div className="">{<Headerpage1 />}</div>
        
      </div>   

      <div className="movie">
        <h6>Trending Now</h6>
        <div className="slider">
                <Carousel value={products} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" 
                autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
       </div>

      <div className="movie">
        <h6>Bollywood  Movies</h6>
          <div className="slider">
                  <Carousel value={products1} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
          <div className="slider">
                  <Carousel value={products2} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
          <div className="slider">
                  <Carousel value={products3} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
          <div className="slider">
                  <Carousel value={products4} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
        <h6>Hollywood Movies</h6>
          <div className="slider">
                  <Carousel value={products5} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div> 

      <div className="movie">
          <div className="slider">
                  <Carousel value={products6} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>  

      <div className="movie">
        <h6>South Movies</h6>
          <div className="slider">
                  <Carousel value={products7} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
          <div className="slider">
                  <Carousel value={products8} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>
      
      <div className="movie">
        <h6>Horrar Movies</h6>
          <div className="slider">
                  <Carousel value={products9} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
        <h6>Award-Winning Films</h6>
          <div className="slider">
                  <Carousel value={products10} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
        <h6>Top 10 Movies In India </h6>
          <div className="slider">
                  <Carousel value={products11} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

     

      <div className="body1">{<FooterPage />}</div>
      
    
      </>
    );
}
export default MoviePage;