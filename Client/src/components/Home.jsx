import home_banner from "../assets/home_banner.png"
import  "../styles/home.css"
import quote1 from "../assets/quote1.png"
import quote2 from "../assets/quote2.png"
import quote3 from "../assets/quote3.png"
import quote4 from "../assets/quote4.png"

export default function Home() {
    return (
            <div className="home">
                <header className="header">
                    <a href="#contact">
                        <img className="hero" src={home_banner} alt="homepage hero image" />
                    </a>
                </header>
                <div className="reviews">
                        <div class="scroll-container">
                            <img src={quote1} alt="satisfied customer quote" />
                            <img src={quote2} alt="satisfied customer quote" />
                            <img src={quote3} alt="satisfied customer quote" />
                            <img src={quote4} alt="satisfied customer quote" />
                        </div>
                </div>
            </div>
          )
        }
