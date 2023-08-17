export default function Itinerary() {
    return (
        <div>
            <div>
                <header>
                    <img src="tbd" alt="tbd" />
                    <p>{/*Destination Name*/}</p>
                </header>
            </div>
            <div className="itinerary-details">
                <h3>DESTINATION: {/*Destination Name*/}</h3>
                <h3>TRIP LENGTH: {/*Length*/}</h3>
            </div>
            <div className="itinerary-grid">
                <div>
                    <p>Where to Stay</p>
                    <img src="tbd" alt="tbd" />
                    {}
                </div>
                <div>
                    <p>What to Do</p>
                    <img src="tbd" alt="tbd" />
                </div>
                <div>
                    <p>Where to Eat</p>
                    <img src="tbd" alt="tbd" />
                </div>
                <div>
                    <p>Other Details</p>
                    <img src="tbd" alt="tbd" />
                </div>
            </div>
        </div>
        );
}