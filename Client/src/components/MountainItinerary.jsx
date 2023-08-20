import '../styles/itinerary.css'
import mountain_banner from '../assets/mountain_banner.png'

export default function MountainItinerary() {
    return (
        <div className="itinerary">
            <div >
                <header>
                    <img src={mountain_banner} alt="jackson hole" className="destination-img" />
                </header>
            </div>
            <div className="itinerary-details">
                <p className="card-text">On a trip to Jackson Hole, Wyoming, you're certainly in store for breathtaking views, endless wildlife, and adventure to boot. Visitors also enjoy top-end shopping and dining in the Wyoming valley. One thing's for certain, a trip to Jackson Hole will be a memorable one.</p>
            </div>
            <h4 className="sub-header">WHERE TO STAY</h4>
                <div className="row">
                    <div className='column'>
                        <h5>Budget</h5>
                        <img src="http://www.cfmedia.vfmleonardo.com/imageRepo/1/0/34/373/794/NXSAMO_P.jpg" alt="sassy moose inn" className="hotel-img" /><br />
                        <a href="http://sassymoose.com/contact.html">The Sassy Moose Inn</a><br />
                        <p className="cost">$</p>
                    </div>
                    <div className='column'>
                        <h5>Average</h5>
                        <img src="https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/snake-river-lodge-spa/siteimages/snakeexterior-fence.jpg?width=1000&height=750" alt="snake river resort" className="hotel-img" /><br />
                        <a href="https://www.snakeriverlodge.com/?utm_source=google&utm_medium=organic&utm_campaign=business_listing">Snake River Lodge & Spa</a><br />
                        <p className="cost">$$$</p>
                    </div>
                    <div className='column'>
                        <h5>Bougie</h5>
                        <img src="https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-165,9064-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/JAC/JAC_462_original.jpg" alt="four seasons jackson" className="hotel-img" /><br />
                        <a href="https://www.fourseasons.com/jacksonhole/">Four Seasons Resort and Residences Jackson Hole</a><br />
                        <p className="cost">$$$$</p>
                    </div> 
                </div>
                <div>
                    <h4 className="sub-header">WHAT TO DO</h4>
                    <div className="row">
                    <div className='column'>
                        <h5>Hike the Grand Tetons</h5>
                        <img src="https://www.nps.gov/grte/planyourvisit/images/Ncascade_summer2018_bonney-1.JPG?maxwidth=1300&maxheight=1300&autorotate=false" alt="grand tetons" className="hotel-img" /><br />
                        <p className="cost">Take in the breathtaking mountain vistas and get out in nature. You may even spot some wildlife, too!</p><br />
                        <a href="https://www.nps.gov/grte/planyourvisit/maps.htm">Learn more</a>
                    </div>
                    <div className='column'>
                        <h5>Go horseback riding</h5>
                        <img src="https://jhcr.imgix.net/images/archive/2128/295542_510564735648751_1830826361_n.jpg?auto=compress%2Cformat&crop=focalpoint&fit=min&fp-x=0.5&fp-y=0.5&h=540&q=80&w=540&s=0a1b40610128625e67bc6992d8b7dd32" alt="horseback riding" className="hotel-img" /><br />
                        <p className="cost">Take in the beauty from a different point of view. See the mountains like never before when you're horseback.</p><br />
                        <a href="https://www.jacksonholewy.com/things-to-do/horseback-riding/">Learn more</a>
                    </div>
                    <div className='column'>
                        <h5>Go whitewater rafting</h5>
                        <img src="https://www.jhww.com/wp-content/uploads/2017/10/sf15.jpg" alt="whitewater rafting" className="hotel-img" /><br />
                        <p className="cost">If thrill-seeking is your thing, you'll definitely want to hit the whitewaters of the valley. </p><br />
                        <a href="https://www.jhww.com/">Learn more</a>
                    </div> 
                </div>   
                </div>
                    <h4 className="sub-header">WHERE TO EAT</h4>
                    <div className="row">
                    <div className='column'>
                        <img src="https://jobs.buckrail.com/files/pictures/PNG_srb-logo-navy-vert.png" alt="snake river brewing" className="rest-img" /><br />
                        <a href="https://www.snakeriverbrewing.com/">Snake River Brewing</a><br />
                    </div>
                    <div className='column'>
                        <img src="https://fastly.4sqi.net/img/user/176x176/510205377_oMOHEaqd__v5OmaJ9i7b8uRcmczawnRPIBT_H0pBYARB8zva-jvM0IfOtVsUibA7ieswFwg0Y.png" alt="mangy moose" className="rest-img" /><br />
                        <a href="https://mangymoose.com/">Mangy Moose Restaurant & Saloon</a><br />
                    </div>
                    <div className='column'>
                        <img src="https://th.bing.com/th/id/OIP.zlr2KLHnFsXKtAL8lVBV9QHaHi?pid=ImgDet&rs=1" alt="the blue lion" className="rest-img" /><br />
                        <a href="http://www.bluelionrestaurant.com/">the blue lion</a><br />
                    </div> 
                </div>
                <div className="section">
                    <p>Not quite ready to plan your trip? Spend some more time learning about all that Jackson Hole has to offer.</p>
                    <a href="https://visitjacksonhole.com/" class="card-link">Learn more</a>
                </div>
        </div>

    ) 
}