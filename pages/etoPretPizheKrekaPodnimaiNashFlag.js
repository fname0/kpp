import AdminCards from "../components/AdminCards";
import Image from 'next/image';

export default function AdminProducts() {
  return (
    <div className="App">
        <div style={{position:"fixed",width:"100vw",height:"100vh"}}><Image src='/imgs/kamazHeader.jpg' placeholder="blur" sizes="100vw" fill quality={100} style={{objectFit: "cover"}}/></div>

        <div className="categoryCont">
            <h1 className="homeHeader">Админка</h1>
            <AdminCards cat={"all"}/>
        </div>
    </div>
  )
}