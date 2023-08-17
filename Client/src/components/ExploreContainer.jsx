import BeachItinerary from "./BeachItinerary";
import MountainItinerary from "./MountainItinerary";
import CityItinerary from "./CityItinerary";
import CountrysideItinerary from "./CountrysideItinerary";

//if destination value = beach, then return BeachItinerary
//if destination value = beach, then return BeachItinerary
//if destination value = beach, then return BeachItinerary
//if destination value = beach, then return BeachItinerary
export default function ExploreContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Beach') {
        return <BeachItinerary />;
      }
      if (currentPage === 'Mountain') {
        return <MountainItinerary />;
      }
      if (currentPage === 'City') {
        return <CityItinerary />;
      }
      if (currentPage === 'Countryside') {
        return <CountrysideItinerary />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        <main>{renderPage()}</main>
      </div>
    );
  }