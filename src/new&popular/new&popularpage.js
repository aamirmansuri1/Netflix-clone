
import "./new&popularpage.css";
import pimg from "../images/jocker.jpg";
import rimg from "../images/farzi.jpg";
import simg from "../images/godfather.jpg";
import londonimg from "../images/spiderman.jpg"
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
import img from "../images/squid-game.jpg";
import img1 from "../images/justwayyouare.jpg";
import img2 from "../images/born.jpg";
import img3 from "../images/newgirl.jpg";
import img4 from "../images/pasion.jpg";
import img5 from "../images/panhandle.jpg";
import img6 from "../images/alice.jpg";
import img7 from "../images/class.jpg";
import img8 from "../images/wednesday.jpg";
import img9 from "../images/stranger.jpg";
import colours from "../images/Dharampatni-2.jpg";
import colours2 from "../images/Sherdil-Sherdil.jpg";
import colours3 from "../images/sanchi.jpg";
import colours4 from "../images/vishachini.jpg";
import colours5 from "../images/Harphoulmohini.jpg";
import colours6 from "../images/Molkki.jpg";
import colours7 from "../images/shakti.jpg";
import colours8 from "../images/Chotisarrdaarni.jpeg";
import colours9 from "../images/Pavitra_Bhagya.jpg";
import colours10 from "../images/barrister.jpg";
import skf from "../images/bhoolbhulaiyaa.jpg";
import skf1 from "../images/Shiddat.jpg";
import skf2 from "../images/kabirsingh.jpg";
import skf3 from "../images/aedilhai.jpg";
import skf4 from "../images/raees-review-1.jpg";
import skf5 from "../images/Liger.jpg";
import skf6 from "../images/sanamteriksm.jpg";
import skf7 from "../images/dangal.jpeg"; 
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
import tv from "../images/tmkoc.jpg";
import tv1 from "../images/crorepati.jpg";
import tv2 from "../images/danceplus.jpeg";
import tv3 from "../images/kapilshow.jpg";
import tv4 from "../images/balveers.jpg";
import tv5 from "../images/Khatronkekhiladi.jpg";
import tv6 from "../images/Bigg_Boss.jpg";
import tv7 from "../images/CID.jpg";
import tv8 from "../images/yerishtah.jpg";
import tv9 from "../images/imli.jpg";
import axios from "axios";
import { FaRegBookmark } from "react-icons/fa";
import {FaBookmark} from "react-icons/fa";
import { DBURL_MYLIST } from "../constants";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useRef } from "react";
 
function NewpopularPage() {
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
      {image:img,url:"https://www.youtube.com/results?search_query=squid+game"},
      {image:img1,url:"https://www.youtube.com/watch?v=o-xNumuL6-8&list=PLalQNACgOUSe0O9tf_ekkasRWXijK0njj"},
      {image:img2,url:"https://www.youtube.com/watch?v=XJQ8bvaedhM&list=PLalQNACgOUScR_I0NXdw2IhrjejiwAv4L"},
      {image:img3,url:"https://www.youtube.com/watch?v=WsjtaqpjCJk"},
      {image:img4,url:"https://www.youtube.com/watch?v=AAyvF2nZ6kw&list=PLds7A-mRMvNQWiI-Zr-jfGvskwQj9eA8k"},
      {image:img5,url:"https://www.youtube.com/watch?v=ydVoT2OCoW8"},
      {image:img6,url:"https://www.youtube.com/watch?v=UH15db1KMpw"},
      {image:img7,url:"https://www.youtube.com/results?search_query=class+trailer"},
      {image:img8,url:"https://www.youtube.com/results?search_query=wednesday+trailer"},
      {image:img9,url:"https://www.youtube.com/watch?v=bjFVq3g59CQ"},
  ];

  const products2 = [
    {image:colours,url:"https://www.youtube.com/results?search_query=dharampatni+all+episodes+"},
    {image:colours2,url:"https://www.youtube.com/watch?v=ufSzuFH7R0M&list=PLcC6hSpO26KviZ6EEaALzQeBvH0V3P1Ol"},
    {image:colours3,url:"https://www.youtube.com/results?search_query=sanchi+ki+sawari+all+episodes+"},
    {image:colours4,url:"https://www.youtube.com/watch?v=Gqdi5JCYLao&list=PLcC6hSpO26KsjzTMQnqZfSc_vLOW2pkOE"},
    {image:colours5,url:"https://www.youtube.com/watch?v=xr_Zuy7VXeA&list=PLcC6hSpO26KsVfWkQf_ugcQ49jJth6sWz"},
    {image:colours6,url:"https://www.youtube.com/watch?v=CXNAnUXqpb8&list=PLcC6hSpO26KtaK2UBrhMk8ieDcdkzon5N"},
    {image:colours7,url:"https://www.youtube.com/watch?v=cM4hvBkrcns&list=PLcC6hSpO26KuPs5XduE2EsCMVrjOSrA0m"},
    {image:colours8,url:"https://www.youtube.com/watch?v=sWCtYFU3nzg&list=PLcC6hSpO26KsPaIZCqqpzqssng_RYJ6ei"},
    {image:colours9,url:"https://www.youtube.com/watch?v=R-yqwRDXdXk&list=PLcC6hSpO26KvdWZWACD4UI34Y03BYmDd4"},
    {image:colours10,url:"https://www.youtube.com/watch?v=BlgB8FduGtA&list=PLcC6hSpO26KsnubP5AdvPAkdNNddbgOxI"},
]

const products3 = [
    {image:skf,url:"https://www.youtube.com/watch?v=P2KRKxAb2ek"},
    {image:skf1,url:"https://www.youtube.com/watch?v=x60tMH7Pz9s"},
    {image:skf2,url:"https://www.youtube.com/watch?v=RiANSSgCuJk"},
    {image:skf3,url:"https://www.youtube.com/watch?v=Z_PODraXg4E"},
    {image:skf4,url:"https://www.youtube.com/results?search_query=raees"},
    {image:skf5,url:"https://www.youtube.com/watch?v=TgcruVx0dNM"},
    {image:skf6,url:"https://www.youtube.com/watch?v=Q9WMfd96qVo"},
    {image:skf7,url:"https://www.youtube.com/watch?v=x_7YlGv9u1g&t=2s"},
];

  const products4 = [
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

  const products5 = [
      {image:award,url:"https://www.youtube.com/watch?v=7vD70_5Xadc"},
      {image:award1,url:"https://www.youtube.com/watch?v=QHdkC6Kn0Io"},
      {image:award2,url:"https://www.youtube.com/watch?v=lHubgWDweAE"},
      {image:award3,url:"https://www.youtube.com/watch?v=s98hkZ4FeXQ"},
      {image:award4,url:"https://www.youtube.com/watch?v=QVKCl3qVuu0&list=PL42nJcEXOOwvZ9AhtFPjXMHuWNz12pcdq"},
      {image:award5,url:"https://www.youtube.com/watch?v=ikSPSDjhTaQ"},
      {image:award6,url:"https://www.youtube.com/watch?v=cffAGIYTEHU"},
      {image:award7,url:"https://www.youtube.com/watch?v=vqu4z34wENw"},
  ]

  const products6 = [
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


  const products7 = [
      {image:tv,url:"https://www.youtube.com/results?search_query=tarak+mehta+ka+ooltah+chashmah"},
      {image:tv1,url:"https://www.youtube.com/results?search_query=crorepati"},
      {image:tv2,url:"https://www.youtube.com/results?search_query=dance+plus+4"},
      {image:tv3,url:"https://www.youtube.com/results?search_query=kapil+sharma+shows"},
      {image:tv4,url:"https://www.youtube.com/results?search_query=balveer"},
      {image:tv5,url:"https://www.youtube.com/results?search_query=khatron+ke+khiladi"},
      {image:tv6,url:"https://www.youtube.com/results?search_query=bigg+boss+all+season"},
      {image:tv7,url:"https://www.youtube.com/results?search_query=cid+all+episodes"},
      {image:tv8,url:"https://www.youtube.com/results?search_query=yeh+rishta+kya+kehlata+hai+all+episodes"},
      {image:tv9,url:"https://www.youtube.com/results?search_query=imli+all+episodes"},
      
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
        <h6>International TV Shows</h6>
          <div className="slider">
                  <Carousel value={products1} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
        <h6>Popular TV Shows</h6>
          <div className="slider">
                  <Carousel value={products2} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
      <h6>New Movies</h6>
          <div className="slider">
                  <Carousel value={products3} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      
      <div className="movie">
        <h6>Horrar Movies</h6>
          <div className="slider">
                  <Carousel value={products4} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
        <h6>Award-Winning Films</h6>
          <div className="slider">
                  <Carousel value={products5} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
        <h6>Top 10 Movies In India </h6>
          <div className="slider">
                  <Carousel value={products6} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
          </div>
      </div>

      <div className="movie">
        <h6>TV Shows</h6>
        <div className="slider">
                  <Carousel value={products7} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div>
  

      <div className="body1">{<FooterPage />}</div>
      
    
      </>
    );
}
export default NewpopularPage;