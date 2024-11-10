import Image from "next/image";
import menu1 from "../../public/pizza-c.jpg"
import menu2 from "../../public/pizza-c1.jpg"
import menu3 from "../../public/pizza-c2.jpg"
import menu4 from "../../public/pizza-c3.jpg"


export default function Menu() {
    return (

        <div className="main_sub_banner" id="menu">
        <center>
            <h1>Menu</h1>
        </center>
        <div className="sub_banner">
            <div className="banner_img1 sub_banner_img">
                <Image 
                src={menu1} alt="" 
                width={220} />
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Order Now</button></center>
            </div>
            <div className="banner_img2  sub_banner_img">
                <Image 
                src={menu2} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Order Now</button></center>
            </div>
            <div className="banner_img3  sub_banner_img">
                <Image 
                src={menu3} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Order Now</button></center>
            </div>
            <div className="banner_img3  sub_banner_img">
                <Image 
                src={menu4} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Order Now</button></center>
            </div>
        </div>
    </div>
   );
   }