import Image from "next/image";
import logo from "../../public/Screenshot__608_-removebg-preview.png"

export default function Nav() {
  return (
    <div>
    <main className="desktop">
      <nav id="home">

        <ul className="nav">
          <li className="logo">
            
            <a href="#"><b>  <Image className="nav-div-img"
              src={logo}
              alt="logo"
              width={200}
            /></b>
          
          </a>
          </li>
          <li className="hideOnMobile"><a href="/">Home</a></li>
          <li className="hideOnMobile"><a href="speciality">Speciality</a></li>
          <li className="hideOnMobile"><a href="menu">Menu</a></li>
          <li className="hideOnMobile"><a href="booking">Booking</a></li>
          <li className="menu-button" ><a href="#"><i className="fa-solid fa-bars"></i></a></li>
        </ul>
      </nav>
      </main>

            {/* for  mobile screen */}
            <center>
            <div className="mobile-nav">
            <div className="mobile-logo">
                <Image 
                        src={logo}
                        alt="logo"
                        height={200}
                        width={200} />
              
                    
                </div>

      
            <div className="mobile-link" >
              <ul >
                <li ><a href="/">Home</a></li>
                <li ><a href="speciality">Speciality</a></li>
                <li ><a href="menu">Menu</a></li>
                <li ><a href="booking">Booking</a></li>
               </ul>
            </div>
        </div>
        </center>
        </div>
  
  );
}

