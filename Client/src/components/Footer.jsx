import icon from "../assets/icon.png"
import '../styles/footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer">
            <div className="footerimg"><img src={icon} alt="logo icon" /></div>
            <div className="disclaimer">
            <p>EZexplore is powered by TeamNarnia of the Butler Executive Education FullStack Web Development Bootcamp</p>
            <p>To learn more about EZexplore, or to contribute to the project, visit our GitHub</p>
            </div>
            </div>
        </footer>
    )
}