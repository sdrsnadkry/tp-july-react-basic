import React, { useState } from "react";

const cities = [
  {
    id: 1,
    name: "Ktm",
    image:
      "https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg",
  },
  {
    id: 2,
    name: "Ltr",
    image:
      "https://cdn.britannica.com/36/154236-050-8127D19C/Durbar-Square-Lalitpur-Nepal.jpg",
  },
  {
    id: 3,
    name: "Bkt",
    image:
      "https://www.journeysinternational.com/wp-content/uploads/2019/05/bhaktapur-nepal.jpg",
  },
];

const Conditional = () => {
  const [activeCity, setActiveCity] = useState(cities[2]);

  return (
    <div>
      <img src={activeCity.image} alt="" height={200} width={200} />

      {cities.map((city) => (
        <div key={city.id}>
          <label htmlFor={city.name}>{city.name}</label>
          <input
            type="radio"
            name="city"
            id={city.name}
            checked={city.name === activeCity.name}
            onChange={() => {
              setActiveCity(city);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Conditional;
