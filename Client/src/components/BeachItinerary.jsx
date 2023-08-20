import '../styles/itinerary.css'
import beach_banner from '../assets/beach_banner.png'

export default function BeachItinerary() {
    return (
<div className="itinerary">
            <div >
                <header>
                    <img src={beach_banner} alt="destin sunset" className="destination-img" />
                </header>
            </div>
            <div className="itinerary-details">
                <p className="card-text">Looking for carribean-clear waters without the price tag - or the long flight? Look no further than Destin, Florida. Known as a family vacation hotspot, this panhandle destination is actualy so much more. From entertaining activities, to good eats, and more... Destin has a lot to offer! And who can pass up those fabulous sunsets?</p>
            </div>
            <h4 className="sub-header">WHERE TO STAY</h4>
                <div className="row">
                    <div className='column'>
                        <h5>Budget</h5>
                        <img src="https://s7d1.scene7.com/is/image/marriotts7prod/fi-vpsdf-exterior-view-14431-55415:Classic-Hor?wid=1215&fit=constrain" alt="fairfield inn destin" className="hotel-img" /><br />
                        <a href="https://www.marriott.com/en-us/hotels/vpsdf-fairfield-inn-and-suites-destin/overview/">Fairfield Inn & Suites by Marriott Destin</a><br />
                        <p className="cost">$</p>
                    </div>
                    <div className='column'>
                        <h5>Average</h5>
                        <img src="https://i.pinimg.com/736x/13/89/68/138968240fcc25ac5f2d43f0b0d20a4d--beach-resorts-golf.jpg" alt="sandestin beach resort" className="hotel-img" /><br />
                        <a href="https://www.sandestin.com/?utm_source=TripAdvisor&utm_medium=listing&utm_campaign=TripAdvisor%20main%20listing">Sandestin Golf and Beach Resort</a><br />
                        <p className="cost">$$</p>
                    </div>
                    <div className='column'>
                        <h5>Bougie</h5>
                        <img src="https://www.hendersonparkinn.com/content/uploads/2022/04/HPI-Hero--1408x700.jpg" alt="henderson park inn" className="hotel-img" /><br />
                        <a href="https://www.hendersonparkinn.com/?utm_source=TripAdvisor&utm_medium=Business%20Listing&utm_campaign=Hotel%20Website%20Link">Henderson Park Inn</a><br />
                        <p className="cost">$$$$</p>
                    </div> 
                </div>
                <div>
                    <h4 className="sub-header">WHAT TO DO</h4>
                    <div className="row">
                    <div className='column'>
                        <h5>Hit the beach, duh</h5>
                        <img src="https://www.floridastateparks.org/sites/default/files/styles/card/public/media/image/32374060_Henderson%20Beach%20State%20Park_Celebrate%20Winter_Sunset_Stephanie_Turner.jpeg?itok=LuFMq3kQ" alt="henderson state park" className="hotel-img" /><br />
                        <p className="cost">Take full advantage of the crystal blue waters and soft white beaches at Henderson State Park.</p><br />
                        <a href="https://www.floridastateparks.org/parks-and-trails/henderson-beach-state-park">Learn more</a>
                    </div>
                    <div className='column'>
                        <h5>Cruise with the dolphins</h5>
                        <img src="https://dolphincruisesdestinfl.com/uploads/2023/04/sunset-dolphin-cruise-desktop.webp" alt="sunset cruise" className="hotel-img" /><br />
                        <p className="cost">Sip adult beverages and drink up the sunset on AJ's dolphin harbor sail.</p><br />
                        <a href="https://dolphincruisesdestinfl.com/cruises/sunset-dolphin-cruise/">Learn more</a>
                    </div>
                    <div className='column'>
                        <h5>Visit Harborwalk Village</h5>
                        <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/497000/497565-harborwalk-village.jpg" alt="henderson park inn" className="hotel-img" /><br />
                        <p className="cost">Unleash your inner child at the Harborwalk Village. Play games, grab a drink, and enjoy boardwalk eats.</p><br />
                        <a href="https://www.emeraldgrande.com/harborwalk-village">Learn more</a>
                    </div> 
                </div>   
                </div>
                    <h4 className="sub-header">WHERE TO EAT</h4>
                    <div className="row">
                    <div className='column'>
                        <img src="https://yt3.ggpht.com/a/AATXAJxadSPJ-AfpvSWNIsA8plUwsLP5ZHKHjx-CtA=s900-c-k-c0xffffffff-no-rj-mo" alt="stinky's fish camp" className="rest-img" /><br />
                        <a href="https://stinkysfishcamp.com/">Stinky's Fish Camp</a><br />
                    </div>
                    <div className='column'>
                        <img src="https://menumag.com/wp-content/uploads/2019/08/DRAFT-yuga-sushi-sake2.png" alt="yuga sushi house" className="rest-img" /><br />
                        <a href="https://yugasushihouse.com/">Yoga Sushi & Sake House</a><br />
                    </div>
                    <div className='column'>
                        <img src="https://i2.wp.com/themarketshops.com/img/logos/bijoux.jpeg" alt="bijoux" className="rest-img" /><br />
                        <a href="http://www.bijouxdestin.com/">Bijoux</a><br />
                    </div> 
                </div>
                <div className="section">
                    <p>Not quite ready to plan your trip? Spend some more time learning about all that Destin has to offer.</p>
                    <a href="https://destinflorida.com/" class="card-link">Learn more</a>
                </div>
        </div>
    )
}