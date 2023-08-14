import '../styles/navigation.css'
import resume from '../assets/Resume.pdf'

export default function Navigation({ currentPage, handlePageChange}) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#explore"
          onClick={() => handlePageChange('Explore')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Explore' ? 'nav-link active' : 'nav-link'}
        >
          Explore
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#intake"
          onClick={() => handlePageChange('Intake')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Intake' ? 'nav-link active' : 'nav-link'}
        >
          Plan an Adventure
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#upload"
          onClick={() => handlePageChange('Upload')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Upload' ? 'nav-link active' : 'nav-link'}
        >
          Share an Adventure
        </a>
      </li>
    </ul>
  );
  }