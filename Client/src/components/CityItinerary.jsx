import '../styles/itinerary.css'
import city_banner from '../assets/city_banner.png'


export default function CityItinerary() {
        return (
            <div className="itinerary">
                <div >
                    <header>
                        <img src={city_banner} alt="jackson hole" className="destination-img" />
                    </header>
                </div>
                <div className="itinerary-details">
                    <p className="card-text">New York is composed of five boroughs: Brooklyn, the Bronx, Manhattan, Queens and Staten Island. It is home to 8.4 million people who speak more than 200 languages, hail from every corner of the globe, and, together, are the heart and soul of the most dynamic city in the world. Home to around 10 million people, NYC has tons of things to see and do. You can barely scratch the surface on a typical four- or five-day visit. In short, New York is impossible to “see” in one visit. This city is home to thousands of restaurants, hundreds of museums, attractions, plays, and quirky things to do.</p>
                </div>
                <h4 className="sub-header">WHERE TO STAY</h4>
                    <div className="row">
                        <div className='column'>
                            <h5>Budget</h5>
                            <img src="https://images.ctfassets.net/50eu6hwcly4u/wIfJgqL60G55sRgNpbKiz/3c44240ef3e5c5bffe2dc34040202afa/New-York-Times-Square-hotel-coworking-space-floor-to-ceiling-windows-2.jpg?w=760&h=418&fm=webp&fit=fill" alt="citezenM Hotel" className="hotel-img" /><br />
                            <a href="https://www.citizenm.com/hotels/united-states/new-york?gclid=CjwKCAjw5_GmBhBIEiwA5QSMxBTkrthzWN0nHU1NjRqV8jxICL-sSZrpsdp7Ne5tb6EBJ7US5hCg6RoCGbIQAvD_BwE&gclsrc=aw.ds#!hotels">citezenM</a><br />
                            <p className="cost">$$</p>
                        </div>
                        <div className='column'>
                            <h5>Average</h5>
                            <img src="https://cache.marriott.com/content/dam/marriott-renditions/NYCMO/nycmo-exterior-1125-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" alt="Le Meridien Hotel" className="hotel-img" /><br />
                            <a href="https://www.marriott.com/en-us/hotels/nycmo-le-meridien-new-york-central-park/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0">Le Meridien New York</a><br />
                            <p className="cost">$$$</p>
                        </div>
                        <div className='column'>
                            <h5>Bougie</h5>
                            <img src="https://www.fairmont.com/assets/0/104/3225/3230/4116/4117/04cf5c34-e290-4b2d-bac6-47c5a0a3220b.jpg" alt="THE PLAZA New York" className="hotel-img" /><br />
                            <a href="https://www.fairmont.com/the-plaza-new-york/?goto=fiche_hotel&code_hotel=A568&merchantid=seo-maps-US-A568&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjE0MDYtNzE1LWxvY2F0aW9uLndlYnNpdGU=">THE PLAZA</a><br />
                            <p className="cost">$$$$</p>
                        </div> 
                    </div>
                    <div>
                        <h4 className="sub-header">WHAT TO DO</h4>
                        <div className="row">
                        <div className='column'>
                            <h5>Tour Central Park</h5>
                            <img src="https://s3.amazonaws.com/assets.centralparknyc.org/media/images/_1650x1980_crop_center-center_none/LAndscapes-Bethesda-Fall-2013-DSC_4084.jpg" alt="central park" className="hotel-img" /><br />
                            <p className="cost">Take in the iconic sites of Central Park with a guided tour. You'll see ponds and lakes, public art, and almost 50 fountains.</p><br />
                            <a href="https://www.centralparknyc.org/official-central-park-tours">Learn more</a>
                        </div>
                        <div className='column'>
                            <h5>See a braodway show</h5>
                            <img src="https://lp-cms-production.imgix.net/2021-05/Broadway.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=20&dpr=5" alt="times square" className="hotel-img" /><br />
                            <p className="cost">New York City is home to an immense amount of talent and a trip is a great opportunity to watch that talent take center stage!</p><br />
                            <a href="https://www.broadway.com/?gclid=CjwKCAjw5_GmBhBIEiwA5QSMxNyilL4GdVjkLYcN4H_aWU90knTI4PsuWbZyOEH4ndPCPdYGh2mfDRoCwiEQAvD_BwE">Learn more</a>
                        </div>
                        <div className='column'>
                            <h5>Explore the Met</h5>
                            <img src="https://cdn.sanity.io/images/cctd4ker/production/73a42b4ea1644b2085acaad2896bfa4699687664-2320x920.jpg?rect=405,0,1490,920&w=1200&q=75&fit=clip&auto=format" alt="met new york" className="hotel-img" /><br />
                            <p className="cost">Home to over 5,000 years of art from around the world, The Met is a great place to take in rare and beautiful objects.</p><br />
                            <a href="https://www.metmuseum.org/">Learn more</a>
                        </div> 
                    </div>   
                    </div>
                        <h4 className="sub-header">WHERE TO EAT</h4>
                        <div className="row">
                        <div className='column'>
                            <img src="https://images.squarespace-cdn.com/content/v1/5fb3405312797c6fcd738f7a/1605584633387-AFV81DPX5AQ944QGOWZY/IMG_7844.JPG?format=1500w" alt="joe's pizza" className="rest-img" /><br />
                            <a href="https://www.joespizzanyc.com/">Famous Joe's Pizza</a><br />
                        </div>
                        <div className='column'>
                            <img src="https://images.getbento.com/accounts/565f93321025fd94c1d3562aa7ffb879/media/images/DOMODOMO_New_York.png?w=1000&fit=max&auto=compress,format&h=1000" alt="domo domo" className="rest-img" /><br />
                            <a href="https://www.domodomonyc.com/">DomoDomo New York</a><br />
                        </div>
                        <div className='column'>
                            <img src="https://th.bing.com/th/id/OIP.QNQwEwSUYvyGgmT9kG9uawAAAA?pid=ImgDet&rs=1" alt="chef's table" className="rest-img" /><br />
                            <a href="https://www.brooklynfare.com/chefs-table/">Chef's Table at Brooklyn Fare</a><br />
                        </div> 
                    </div>
                    <div className="section">
                        <p>Not quite ready to plan your trip? Spend some more time learning about all that New York City has to offer.</p>
                        <a href="https://www.nyc.com/broadway_tickets/?msclkid=e1e7f5690cbe1fca70d3918b02d9e698&utm_source=bing&utm_medium=cpc&utm_campaign=%2FUI%2FBroadway%20Shows&utm_term=broadway%20new%20york%20schedule&utm_content=Broadway%20Campaign%20Original" class="card-link">Learn more</a>
                    </div>
            </div>
    
        ) 
}