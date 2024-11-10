import Image from "next/image";
import heroImage from "../../public/pizza-c5-removebg-preview.png";
import yellowPaper from "../../public/yellow-paper.jpg";
import Nav from "@/components/navbar";
import Speciality from "@/components/spaciality";
import Menu from "@/components/menu";

export default function Home() {
  return (
     <div>
 
  
<div className="header_container" >
    <div className="header_content">
    <h2 className="header_content1">Its time to have a fantastic taste with every bite</h2>
    <h1 className="header_content2">Welcome To<br /> <span /><b>pizzaBite !</b></h1>
     </div>
     <Image 
      src={heroImage}
      alt="hero-section-image"
       className="header_img"             />
</div>
<Speciality />
<center><button className="banner_btn"><a href="speciality">See More</a></button></center>
<Menu/>

<center><button className="banner_btn"><a href="menu">See More</a></button></center>

</div>

  );
}
