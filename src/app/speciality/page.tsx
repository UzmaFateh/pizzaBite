import Image from "next/image";
import pizza01 from "../../../public/pizza-c5.jpg"
import pizza02 from "../../../public/pizza-c6.jpg"
import pizza03 from "../../../public/pizza-c7.jpg"
import pizza04 from "../../../public/pizza-c1.jpg"
import Speciality from "@/components/spaciality";

export default function SpecialityDetail() {
    return (
        <div>
        <Speciality />
        <div className="main_banner" id="special">
           
            <div className="banner">
                <div className="banner_img1 banner_img">
                    <Image className="banner_img0"
                        src={pizza01} alt=""
                        width={340} />
                    <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>
                        <center><button className="sub_btn">Order Now</button></center>
                </div>
                <div className="banner_img2 banner_img">
                    <Image className="banner_img0"
                        src={pizza02}
                        alt=""
                        width="340" />
                    <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>
                        <center><button className="sub_btn">Order Now</button></center>
                </div>
                <div className="banner_img3 banner_img">
                    <Image className="banner_img0"
                        src={pizza03}
                        alt=""
                        width="340" />
                    <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>
                        <center><button className="sub_btn">Order Now</button></center>
                </div>
                <div className="banner_img3 banner_img">
                    <Image className="banner_img0"
                        src={pizza04}
                        alt=""
                        width="340" />
                    <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>
                        <center><button className="sub_btn">Order Now</button></center>
                </div>


            </div>

        </div>
        </div>
    );
}
