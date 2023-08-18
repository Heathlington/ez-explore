import home_banner from "../assets/home_banner.png"
import  "../styles/home.css"

export default function Home() {
    return (
            <div>
                <header className="header">
                <a href="#contact">
                    <img className="hero" src={home_banner} alt="homepage hero image" />
                    </a>
                </header>
            </div>
          );
        }
    