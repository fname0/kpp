import Link from "next/link";
import Seo from "../components/Seo";
import Image from 'next/image';

export default function Greetings() {
  return (
    <div className="App">
        <Seo title="Заказ оформлен|Всё на КПП" description="Поздравляем, ваш заказ оформлен!" keywords="запчасти камаз"/>
        <Image src='/imgs/kamazHeader.jpg' placeholder="blur" sizes="100vw" fill quality={100} style={{objectFit: "cover"}}/>

        <button className="contactsFloatingBtn"><Link href="/">
          <img src='/imgs/home.svg' alt="" className="contactsFloatingBtnImg"/>
        </Link></button>
        <div className="basketCont">
            <div className="basketCenterTextCont">
              <p className="basketCenterText">
                Заказ оформлен
              </p>
              <p className="basketCenterText">
                Ждите звонка или сообщения в WhatsApp
              </p>
            </div>
        </div>
    </div>
  )
}
