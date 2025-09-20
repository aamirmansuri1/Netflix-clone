
import "./tvshowspage.css";
import pimg from "../images/tmkoc.jpg";
import rimg from "../images/TeraYaarHoonMain.jpg";
import simg from "../images/sanchi.jpg";
import londonimg from "../images/Yeh-Rishta-Kya-Kehlata-Hai.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Headerpage1 from "../header1/headerpage1";
import FooterPage from "../footer/footerpage";
import { Carousel } from 'primereact/carousel';
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
import star from "../images/Anupamaatvseries.jpg";
import star1 from "../images/sathiya.jpg";
import star2 from "../images/pandya.jpg";
import star3 from "../images/chahhate.jpg";
import star4 from "../images/imli.png";
import star5 from "../images/ghum.jpg";
import star6 from "../images/Yeh-Rishta-Kya-Kehlata-Hai.jpg";
import star7 from "../images/Shaadi_Mubarak.jpg";
import star8 from "../images/aashiqana.jpg";
import star9 from "../images/Zindagi-Mere-Ghar-Aana-Star-Plus.jpg";
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
import sab from "../images/taarak-mehta-ka-oolta-chashma.jpg"; 
import sab1 from "../images/wagle-ki-duniya.jpg"; 
import sab2 from "../images/Chidiya-Ghar.jpg"; 
import sab3 from "../images/Lapataganj.jpg"; 
import sab4 from "../images/Pushpa_Impossible.jpg"; 
import sab5 from "../images/Tenali_Rama.jpg"; 
import sab6 from "../images/Maddam_Sir.jpg";
import sab7 from "../images/TeraYaarHoonMain.jpg";
import zee from "../images/kumkum.jpg";
import zee1 from "../images/Kundali_Bhagya.jpg";
import zee2 from "../images/Rabb_Se_Hai_Dua.jpg";
import zee3 from "../images/maitri.jpg";
import zee4 from "../images/Meet.jpg";
import zee5 from "../images/aparajita.jpg";
import zee6 from "../images/lagjagale.jpg";
import zee7 from "../images/radhamohan.jpg";
import zee8 from "../images/Bhagya-Lakshmi.jpg";
import zee9 from "../images/Rishton_Ka_Manjha.png";
import top from "../images/Yeh-Rishta-Kya-Kehlata-Hai.jpg";
import top1 from "../images/imli.png";
import top2 from "../images/Pushpa_Impossible.jpg";
import top3 from "../images/lagjagale.jpg";
import top4 from "../images/TeraYaarHoonMain.jpg";
import top5 from "../images/Bigg_Boss.jpg";
import top6 from "../images/kapilshow.jpg";
import top7 from "../images/taarak-mehta-ka-oolta-chashma.jpg";
import top8 from "../images/kumkum.jpg";
import romantic from "../images/punarvivah.jpg";
import romantic1 from "../images/Tujhse_Hai_Raabta.jpg";
import romantic2 from "../images/iashqsubhan.jpg";
import romantic3 from "../images/jamairaza.jpg";
import romantic4 from "../images/aapkeaajanese.jpg";
import romantic5 from "../images/doliarmanoki.jpg";
import romantic6 from "../images/kubulhai.jpg";
import romantic7 from "../images/jindagikimahek.jpg";
import romantic8 from "../images/jodhaakbar.jpg";
import romantic9 from "../images/esidewangi.jpg";
import horror from "../images/fearfiles.jpg";
import horror1 from "../images/thezee.jpg";
import horror2 from "../images/Daayan_TV_series.png";
import horror3 from "../images/brahmarakshas.jpg";
import horror4 from "../images/mastersun.jpg";
import horror5 from "../images/FearFiles-Darr-Ki-Sacchi-Tasveerein1.jpg";
import axios from "axios";
import { FaRegBookmark } from "react-icons/fa";
import {FaBookmark} from "react-icons/fa";
import { DBURL_MYLIST } from "../constants";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useRef } from "react";

function TvshowsPage() {
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
    {image:tv9,url:"https://www.youtube.com/results?search_query=imli+all+episodes"},
       {image:tv4,url:"https://www.youtube.com/results?search_query=balveer"},
      {image:tv5,url:"https://www.youtube.com/results?search_query=khatron+ke+khiladi"},
      {image:tv6,url:"https://www.youtube.com/results?search_query=bigg+boss+all+season"},
      {image:tv7,url:"https://www.youtube.com/results?search_query=cid+all+episodes"},
      {image:tv8,url:"https://www.youtube.com/results?search_query=yeh+rishta+kya+kehlata+hai+all+episodes"},
      {image:tv,url:"https://www.youtube.com/results?search_query=tarak+mehta+ka+ooltah+chashmah"},
      {image:tv1,url:"https://www.youtube.com/results?search_query=crorepati"},
      {image:tv2,url:"https://www.youtube.com/results?search_query=dance+plus+4"},
      {image:tv3,url:"https://www.youtube.com/results?search_query=kapil+sharma+shows"},
]

  const products1 = [
      {image:star,url:"https://www.youtube.com/results?search_query=anupama+all+episodes"},
      {image:star1,url:"https://www.youtube.com/results?search_query=sath+nibhana+sathiya"},
      {image:star2,url:"https://www.youtube.com/results?search_query=pandya+store+all+episodes"},
      {image:star3,url:"https://www.youtube.com/results?search_query=yeh+hai+chahatein+all+episodes"},
      {image:star4,url:"https://www.youtube.com/results?search_query=imli+all+episodes"},
      {image:star5,url:"https://www.youtube.com/watch?v=-M6zYs4T1EQ&list=PLAM7IOZnvD2H5cke5XRauLtnN1aIZUB5b"},
      {image:star6,url:"https://www.youtube.com/results?search_query=yeh+rishta+kya+kehlata+hai+all+episodes+kartik+naira"},
      {image:star7,url:"https://www.youtube.com/watch?v=bk4Vc6ynpyE&list=PLb2aaNHUy_gGNP8gotbXa7hrPTH7NSXnm"},
      {image:star8,url:"https://www.youtube.com/watch?v=ECKME--igUI&list=PLV2iqGVlvDlnOzdH0bMkZDtifiOMoPSFC"},
      {image:star9,url:"https://www.youtube.com/results?search_query=zindagi+mere+ghar+aana+all+episode"},
  ]

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
    {image:sab,url:"https://www.youtube.com/results?search_query=tarak+mehta+ka+ooltah+chashmah"},
    {image:sab1,url:"https://www.youtube.com/watch?v=6gFglhGdMl0&list=PL6Rtnh6YJK7ZeTQxbPKueIURrgmet3bFk"},
    {image:sab2,url:"https://www.youtube.com/watch?v=iXPov5_e1XU&list=PL6Rtnh6YJK7ZKOSbDflAiXSA8E13Nb3rk"},
    {image:sab3,url:"https://www.youtube.com/watch?v=hx0wu3Q3wEQ&list=PL6Rtnh6YJK7atSoS0BL8AZUcD63KNZXwy"},
    {image:sab4,url:"https://www.youtube.com/results?search_query=pushpa+impossible+all+episodes"},
    {image:sab5,url:"https://www.youtube.com/watch?v=l2B074Hnb7E&list=PLbZxdQd9WcS0w2N8U1t6A5_GnEeWmRB4Y"},
    {image:sab6,url:"https://www.youtube.com/watch?v=-amKn20xRaM&list=PL6Rtnh6YJK7b5cZhAf5s-a8BZAoiGePqE"},
    {image:sab7,url:"https://www.youtube.com/watch?v=ts7Wyw--_HQ&list=PL6Rtnh6YJK7btJaBDnn78KoV4KSqET0Kj"},
    
]

const products4 =[
    {image:zee,url:"https://www.youtube.com/results?search_query=kumkum+bhagya+all+episodes"},
    {image:zee1,url:"https://www.youtube.com/watch?v=m8saIiTCXgQ&list=PLVqBLRhC9UzFuhwy4Vq3aLSs_siVfKZ02"},
    {image:zee2,url:"https://www.youtube.com/results?search_query=rab+se+hai+dua+all+episodes"},
    {image:zee3,url:"https://www.youtube.com/results?search_query=maitri+all+episodes"},
    {image:zee4,url:"https://www.youtube.com/watch?v=SKo3wa4Y_Bk&list=PLVqBLRhC9UzGOcnr7seYLHIGmp6jDsHZR"},
    {image:zee5,url:"https://www.youtube.com/results?search_query=aparajita++all+episodes"},
    {image:zee6,url:"https://www.youtube.com/results?search_query=lag+ja+gale+serial++all+episodes"},
    {image:zee7,url:"https://www.youtube.com/results?search_query=radha+mohan+all+episodes"},
    {image:zee8,url:"https://www.youtube.com/watch?v=a2XUzqxM0dg&list=PLVqBLRhC9UzGnFfeubRkbrcRt9tWe8aUU"},
    {image:zee9,url:"https://www.youtube.com/watch?v=EncjU4Cu2p0&list=PL45Q8OlTR2WiDAI3dUFInNdzd1COdJRzl"},

]

const products5 = [
    {image:top,url:"https://www.youtube.com/results?search_query=yeh+rishta+kya+kehlata+hai+all+episodes+kartik+naira"},
    {image:top1,url:"https://www.youtube.com/results?search_query=imli+all+episodes"},
    {image:top2,url:"https://www.youtube.com/results?search_query=pushpa+impossible+all+episodes"},
    {image:top3,url:"https://www.youtube.com/results?search_query=lag+ja+gale+serial++all+episodes"},
    {image:top4,url:"https://www.youtube.com/watch?v=ts7Wyw--_HQ&list=PL6Rtnh6YJK7btJaBDnn78KoV4KSqET0Kj"},
    {image:top5,url:"https://www.youtube.com/results?search_query=bigg+boss+all+season"},
    {image:top6,url:"https://www.youtube.com/results?search_query=kapil+sharma+shows"},
    {image:top7,url:"https://www.youtube.com/results?search_query=tarak+mehta+ka+ooltah+chashmah"},
    {image:top8,url:"https://www.youtube.com/results?search_query=kumkum+bhagya+all+episodes"},

]


const products6 = [
    {image:romantic,url:"https://www.youtube.com/watch?v=kg7woR5u0s4&list=PLVqBLRhC9UzFNCSkjaO8Wjc7AMAxosEgz"},
    {image:romantic1,url:"https://www.youtube.com/watch?v=aPZFkMPNUmk&list=PLpJCH7gtGmX6brfhFeH6atBSfV-imVg5Y"},
    {image:romantic2,url:"https://www.youtube.com/watch?v=tO35PgYaYjE&list=PLHIv8FL_nnrR0oT2FfNhrDnsUUDB1lkLR"},
    {image:romantic3,url:"https://www.youtube.com/watch?v=FVuqlixIpJA&list=PLVqBLRhC9UzEMYe1AT5NgerJ8FUebq56p"},
    {image:romantic4,url:"https://www.youtube.com/watch?v=nhSgTIAiO4c&list=PLswECO5kwI1baHoG7HofK9Q3Cagg6A2P9"},
    {image:romantic5,url:"https://www.youtube.com/results?search_query=doli+armano+ki+all+episodes"},
    {image:romantic6,url:"https://www.youtube.com/watch?v=tOCFej57adY&list=PLfXLvONCjaNt7yy7-dOO7CNh6B8zh6nXI"},
    {image:romantic7,url:"https://www.youtube.com/watch?v=hB678i6rTEs&list=PLS1kgWxv7m0yMQrB9FLq8SOLnojxv5BGC"},
    {image:romantic8,url:"https://www.youtube.com/watch?v=3OgLQsVIsTA&list=PL1G6cUoSTlSrNfVnUohRt7qjGVrWLUBvH"},
    {image:romantic9,url:"https://www.youtube.com/watch?v=mrARLFrM17c&list=PLY4LVM0kuJhhlb2wwwWCNjbAAX48en4K6"},

]

const products7 = [
    {image:horror,url:"https://www.youtube.com/watch?v=Mypr3rngS9E&list=PLr4RIZB7y2sqbKwSW6t_r3Xcvhtp8Kx8E"},
    {image:horror1,url:"https://www.youtube.com/watch?v=7elqxJfEBe8&list=PL5teu3IICPDyWilNOQPKjuYZ8Vqza7M9b"},
    {image:horror2,url:"https://www.youtube.com/watch?v=Tgkw5ubd-VM&list=PLJoE9YFIsUQdvR60A-IRv7u0ENzkSn7bL"},
    {image:horror3,url:"https://www.youtube.com/watch?v=ZSt2b3zFlb8&list=PLY4LVM0kuJhhjVZsa_s7SgqE1S0oz3WYX"},
    {image:horror4,url:"https://www.youtube.com/watch?v=Utg40JAKZIE&list=PLShqORWiDquMnmBYEyI8rpf_k4AvlQNzA"},
    {image:horror5,url:"https://www.youtube.com/watch?v=Mypr3rngS9E&list=PLr4RIZB7y2sqbKwSW6t_r3Xcvhtp8Kx8E"},

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
        <h6>Top TV Shows</h6>
        <div className="slider">
                  <Carousel value={products} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div>

     <div className="movie">
        <h6>Star Plus Shows</h6>
        <div className="slider">
                  <Carousel value={products1} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div> 

      <div className="movie">
        <h6>Colours Shows</h6>
        <div className="slider">
                  <Carousel value={products2} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div> 

      <div className="movie">
        <h6>Sony Sab Shows</h6>
        <div className="slider">
                  <Carousel value={products3} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div> 

      <div className="movie">
        <h6>Zee TV Shows</h6>
        <div className="slider">
                  <Carousel value={products4} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div> 

      <div className="movie">
        <h6>Trending TV Shows</h6>
        <div className="slider">
                  <Carousel value={products5} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div> 

      <div className="movie">
        <h6>Evergreen Romantic Shows | Hindi</h6>
        <div className="slider">
                  <Carousel value={products6} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div>

      <div className="movie">
        <h6>Horror & Supernatural Shows | Hindi</h6>
        <div className="slider">
                  <Carousel value={products7} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} className="custom-carousel" 
                  autoplayInterval={0} itemTemplate={productTemplate} />
        </div>
      </div>
  

      <div className="body1">{<FooterPage />}</div>
      
    
      </>
    );
}
export default TvshowsPage;