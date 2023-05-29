import Link from "next/link";
import Seo from "../components/Seo";

export default function Greetings() {
  return (
    <div className="App">
        <Seo title="Заказ оформлен|Всё на КПП" description="Поздравляем, ваш заказ оформлен!" keywords="запчасти камаз"/>

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
