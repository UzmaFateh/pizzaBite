
import Menu from "@/components/menu";
import Image from "next/image";
import menu5 from "../../../public/pizza-c6.jpg"
import menu6 from "../../../public/pizza-c8.jpg"
import menu7 from "../../../public/pizza-c9.jpg"
import menu8 from "../../../public/pizza-c7.jpg"



export default function MenuDetail() {
    return (
        <div>
           
<Menu />

<div className="sub_banner">
            <div className="banner_img1 sub_banner_img">
              <Image 
              src={menu5}
              alt ="menu5"
              width= {220} />
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Order Now</button></center>
            </div>
            <div className="banner_img2  sub_banner_img">
                <Image 
                src={menu6} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Order Now</button></center>
            </div>
            <div className="banner_img3  sub_banner_img">
                <Image 
                src={menu7} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Order Now</button></center>
            </div>
            <div className="banner_img3  sub_banner_img">
                <Image 
                src={menu8} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Order Now</button></center>
            </div>
        </div>

        </div>
    );}