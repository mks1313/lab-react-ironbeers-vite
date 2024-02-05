import { Link } from "react-router-dom";
import AllBeers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="home-page">
      <div className="page-link">
        <Link to="/beers">
          <div className="page-link">
            <img src={AllBeers} alt="All Beers" style={{ width: "100%" }} />
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              libero dolorem, fugit cumque velit est at consequuntur expedita
              adipisci, harum quas. Eum eligendi distinctio illum quae officia
              tempore, nihil dolore.
            </p>
          </div>
        </Link>
        <Link to="/random-beer">
          <div className="page-link">
            <img src={RandomBeer} alt="Random Beer" style={{ width: "100%" }} />
            <h2>Random Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              libero dolorem, fugit cumque velit est at consequuntur expedita
              adipisci, harum quas. Eum eligendi distinctio illum quae officia
              tempore, nihil dolore.
            </p>
          </div>
        </Link>
        <Link to="/new-beer">
          <div className="page-link">
            <img src={NewBeer} alt="New Beer" style={{ width: "100%" }} />
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              libero dolorem, fugit cumque velit est at consequuntur expedita
              adipisci, harum quas. Eum eligendi distinctio illum quae officia
              tempore, nihil dolore.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
