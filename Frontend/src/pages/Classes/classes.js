import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./classes.css";

function Clsses() {
  const options = [
    { value: "Santa Clara", label: "Santa Clara" },
    { value: "San Jose", label: "San Jose" },
  ];
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("Santa Clara");
  const [exercises, setExercises] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelectChange = (e) => {
    setLocation(e.value);
    setExercises(data.filter((item) => item.name === e.value) || null);
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 40,
      minHeight: 40,
    }),
  };
  const getLocations = async () => {
    try {
      const locations = await axios.get("/locations");
      setData(locations.data);
      setExercises(data.filter((item) => item.name === location) || null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="grid-block-container">
      <div style={{ width: "200px", height: "30px", marginBottom: "40px" }}>
        <Select
          options={options}
          defaultValue={{ label: location, value: location }}
          aria
          labelledby="aria-label"
          inputId="aria-example-input"
          name="aria-live-color"
          onMenuOpen={onMenuOpen}
          onMenuClose={onMenuClose}
          onChange={handleSelectChange}
          styles={customStyles}
        />{" "}
      </div>{" "}
      {exercises &&
        exercises.map((exercise) => (
          <div className="grid-block">
            <h2>
              <b> {exercise.services} </b>{" "}
            </h2>{" "}
            <p>
              <b> Class Days: </b> {exercise.classDay}{" "}
            </p>{" "}
            <br> </br>{" "}
            <p>
              <b> In / Out Time: </b> 06:00 AM - 10:00 PM{" "}
            </p>{" "}
            <br> </br>{" "}
          </div>
        ))}{" "}
    </div>
  );
}
export default Clsses;
