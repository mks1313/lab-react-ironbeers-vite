import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllBeersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching beers:", error);
      });
  }, []);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
        )
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  return (
    <div className="all-beers-page">
      <div className="search-container">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul className="beer-list">
        {(searchQuery.trim() !== "" ? searchResults : beers).map((beer) => (
          <li key={beer._id} className="beer-item">
            <Link to={`/beers/${beer._id}`} className="beer-link">
              <img
                src={beer.image_url}
                alt={beer.name}
                className="beer-image"
              />
              <div className="beer-info">
                <h2 className="beer-name">{beer.name}</h2>
                <p className="beer-tagline">{beer.tagline}</p>
                <p>
                  <strong>Contributed by:</strong> {beer.contributed_by}
                </p>
              </div>
            </Link>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AllBeersPage;
