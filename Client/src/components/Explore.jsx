export default function Explore() {
return (
<div>
  <div className="card" style="width: 18rem;">
    <img className="card-img-top" src="..." alt="Card image cap">
    <div className="card-body">
      <h5 className="card-title">{destination}</h5>
      <p className="card-text">{destinationDetails}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{length}</li>
    <li className="list-group-item">{stay}</li>
    <li className="list-group-item">{eat}</li>
    <li className="list-group-item">{activities}</li>
  </ul>
  <div className="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>
)
}
