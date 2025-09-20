import { useEffect, useState } from "react";
import Headerpage1 from "../header1/headerpage1";
import FooterPage from "../footer/footerpage";
import axios from "axios";
import "./myList.css";
import { IoMdClose } from "react-icons/io";
import { DBURL_MYLIST, DBURL_USERS } from "../constants";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useRef } from "react";

function MyList() {
    const[myList,setMyList] = useState([]);
    const toast = useRef(null);

    useEffect(() => {
        onGetData();
    },[]);

    const onDeleteButton = (product) => {
        axios.delete(`${DBURL_MYLIST}/${product.id}`).then((res) => {
          onGetData();
          toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        }).catch((err) => {
            console.log(err);
        })
    }
    const onGetData = () => {
        axios.get(DBURL_MYLIST).then((res) => {
            setMyList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }
    const accept = (myData) => {
        onDeleteButton(myData)
    }
    
    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
    const confirm1 = (myData) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept : () => accept(myData),
            reject
        });
    };

    return( 
        <div style={{background:"black"}}> 
    <Headerpage1/>
    <Toast ref={toast} />
    <ConfirmDialog /> 
   {( myList.length === 0 || !myList ) ?  <div className="data"><h1>No Data Available</h1></div>:
   <div className="grid_mylist">
       {myList.map((myData) => {
        return(
            <>                      
            <div  className="mylistcard" style={{margin:"5px" , position:"relative"}}>              
                <a href={myData.url} target="_"> <img src={myData.image} className="img" /></a>
                {/* <button onClick={() => onDelete(myData)}>Delete</button> */}
               <IoMdClose
               onClick={() => confirm1(myData)}
               style={{
                   position: "absolute",
                   top:"0",
                   right:"0",
                   fontSize: "25px",
                   cursor: "pointer",
                   background:"none",                 
               }}/>
           </div>           
            </>
                    )
       })}
    </div>
    }
    <FooterPage/>
    </div> 
    )
}
export default MyList;