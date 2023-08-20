import '../styles/itinerary.css'
import countryside_banner from '../assets/countryside_banner.png'

export default function CountrysideItinerary() {
    return (
        <div className="itinerary">
            <div >
                <header>
                    <img src={countryside_banner} alt="napa valley" className="destination-img" />
                </header>
            </div>
            <div className="itinerary-details">
                <p className="card-text">If gorgeous rolling hills and, breathtaking sunsets, and fine dining and drinking are your thing, look no further than Napa Valley. For good reason, Napa Valley is also known as "wine country," and is home to over 400 wineries and six Michelin-starred restaurants. A visit to this region is sure to fill your stomach and put you in a relaxing state of mind.</p>
            </div>
            <h4 className="sub-header">WHERE TO STAY</h4>
                <div className="row">
                    <div className='column'>
                        <h5>Budget</h5>
                        <img src="https://images.trvl-media.com/lodging/31000000/30320000/30313500/30313420/893ff7fc.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="napa candelight inn" className="hotel-img" /><br />
                        <a href="https://candlelightinn.com/napa-valley-inn/">Candlelight Inn Napa Valley</a><br />
                        <p className="cost">$$</p>
                    </div>
                    <div className='column'>
                        <h5>Average</h5>
                        <img src="https://symphony.cdn.tambourine.com/meritage-hotel/media/meritageresort-gallery-08-61085195e0052.webp" alt="meritage resort napa" className="hotel-img" /><br />
                        <a href="https://www.meritageresort.com/?utm_medium=organic&utm_source=yext&utm_campaign=website-link">Meritage Resort & Spa</a><br />
                        <p className="cost">$$$</p>
                    </div>
                    <div className='column'>
                        <h5>Bougie</h5>
                        <img src="https://dreffui1gbt6t.cloudfront.net/images/aubergedusoleil/Version1_DJI_0689-1-scaled.jpg" alt="auberge napa resort" className="hotel-img" /><br />
                        <a href="https://www.aubergeresorts.com/aubergedusoleil/">Auberge du Soleil</a><br />
                        <p className="cost">$$$$</p>
                    </div> 
                </div>
                <div>
                    <h4 className="sub-header">WHAT TO DO</h4>
                    <div className="row">
                    <div className='column'>
                        <h5>Take a sunset train ride</h5>
                        <img src="https://www.winetrain.com/content/uploads/2018/02/The-Wine-Train-Exterior.jpg" alt="napa valley wine train" className="hotel-img" /><br />
                        <p className="cost">All aboard! Take a ride in the Napa Valley Wine Train's Vista Dome for a whole new sunset experience.</p><br />
                        <a href="https://www.winetrain.com/">Learn more</a>
                    </div>
                    <div className='column'>
                        <h5>Soak in a mudbath</h5>
                        <img src="https://symphony.cdn.tambourine.com/indian-springs-calistoga/media/IndianSprings-Homepage-Gallery-Spa_0000s_0002_Spa-Mud-Indian-Springs-Calistoga-8200-5be4661509a44.webp" alt="mud bath" className="hotel-img" /><br />
                        <p className="cost">Head to the spa and soak up the special healing qualities in the Calistoga soil in a mud and mineral bath. </p><br />
                        <a href="https://www.indianspringscalistoga.com/spa-treatments/mud-mineral-baths">Learn more</a>
                    </div>
                    <div className='column'>
                        <h5>Taste wine, of course</h5>
                        <img src="https://d3qvqlc701gzhm.cloudfront.net/full/505abab3f8af7d9c833acb8c9e8dd5b00fb81087b036018c7304eff314008437.jpg" alt="wine tasting" className="hotel-img" /><br />
                        <p className="cost">With over 400 wineries in the area, it would be hard to make a dent in trying them all... but it's worth a shot!</p><br />
                        <a href="https://www.visitnapavalley.com/wineries/">Learn more</a>
                    </div> 
                </div>   
                </div>
                    <h4 className="sub-header">WHERE TO EAT</h4>
                    <div className="row">
                    <div className='column'>
                        <img src="https://oxbowpublicmarket.com/wp-content/uploads/2015/07/Model-Bakery-Logo.jpg" alt="model bakery" className="rest-img" /><br />
                        <a href="https://www.themodelbakery.com/">Model Bakery</a><br />
                    </div>
                    <div className='column'>
                        <img src="https://i.pinimg.com/originals/31/fa/f4/31faf458d9d111018bb748e2dd91c734.jpg" alt="gott's roadside" className="rest-img" /><br />
                        <a href="https://www.gotts.com/">Gott's Roadside</a><br />
                    </div>
                    <div className='column'>
                        <img src="https://th.bing.com/th/id/R.e588bdfd2b9b59b851dbe6300698e96c?rik=DXY2DH6XMx5GLg&riu=http%3a%2f%2fcdn.designcrowd.com.s3.amazonaws.com%2fblog%2f2016%2fJanuary%2ffine-dining-and-restaurant-logos%2f50_350.png&ehk=VpgN9QQd%2fBCe7Q%2bxgjUK91B5qT32gn5I661QbBV4m%2fA%3d&risl=&pid=ImgRaw&r=0" alt="the french laundry" className="rest-img" /><br />
                        <a href="https://www.thomaskeller.com/tfl">The French Laundry</a><br />
                    </div> 
                </div>
                <div className="section">
                    <p>Not quite ready to plan your trip? Spend some more time learning about all that the Napa Valley has to offer.</p>
                    <a href="https://www.napavalley.com/" class="card-link">Learn more</a>
                </div>
        </div>

    ) 
}