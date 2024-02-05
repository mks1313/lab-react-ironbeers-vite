import { useState, useEffect } from "react";
import axios from "axios";

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching random beer:", error);
      });
  }, []);

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = randomBeer;

  return (
    <div className="beer-details-page">
      <div className="beer-details-box">
        <img src={image_url} alt={name} className="beer-image-single" />
        <div className="beer-details">
          <h1 className="name-beer">
            {name}
            <span className="attenuation-level">{attenuation_level}</span>
          </h1>

          <p className="tagline-single">
            {tagline}
            <span className="first-brewed">{first_brewed}</span>
          </p>
          <p className="description-single">{description}</p>
          <p className="contributed-single">{contributed_by}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomBeerPage;
