import { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import Intake from './Intake';
import Itinerary from './Itinerary';
import Upload from './Upload';
import ExploreContainer from './ExploreContainer';
// import Footer from './Footer';

export default function ItineraryContainer() {
  const [currentPage, setCurrentPage] = useState('Login');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Intake') {
      return <Intake />;
    }
    if (currentPage === 'Itinerary') {
      return <Itinerary />;
    }
    if (currentPage === 'Upload') {
        return <Upload />;
    }
    if (currentPage === 'Explore') {
        return <ExploreContainer />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <Login currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main>{renderPage()}</main>
    </div>
  );
}