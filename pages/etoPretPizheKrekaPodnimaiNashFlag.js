import AdminCards from "../components/AdminCards";
import Image from 'next/image';

export default function AdminProducts() {
  return (
    <div className="App">
        <div className="categoryCont">
        <Image src='/imgs/kamazHeader.jpg' placeholder="blur" sizes="100vw" fill quality={100} style={{objectFit: "cover"}}/>

            <h1 className="homeHeader">Админка</h1>
            <AdminCards cat={"all"}/>
        </div>
    </div>
  )
}