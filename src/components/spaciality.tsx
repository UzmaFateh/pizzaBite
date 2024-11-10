import Image from "next/image";
import pizza1 from "../../public/pizza-c5.jpg"
import pizza2 from "../../public/pizza-c6.jpg"
import pizza3 from "../../public/pizza-c7.jpg"

export default function Speciality() {
    return (
        <div className="main_banner" id="special">
            <center>
                <h1>Our Speciality</h1>
            </center>
            <div className="banner">
                <div className="banner_img1 banner_img">
                    <Image className="banner_img0"
                        src={pizza1} alt=""
                        width={340} />
                    <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>
                        <center><button className="sub_btn">Order Now</button></center>
                </div>
                <div className="banner_img2 banner_img">
                    <Image className="banner_img0"
                        src={pizza2}
                        alt=""
                        width="340" />
                    <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>
                        <center><button className="sub_btn">Order Now</button></center>
                </div>
                <div className="banner_img3 banner_img">
                    <Image className="banner_img0"
                        src={pizza3}
                        alt=""
                        width="340" />
                    <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>
                        <center><button className="sub_btn">Order Now</button></center>
                </div>
                <div className="banner_img3 banner_img">
                    <Image className="banner_img0"
                        src={pizza3}
                        alt=""
                        width="340" />
                    <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>
                        <center><button className="sub_btn">Order Now</button></center>
                </div>


            </div>

        </div>
    );
}
