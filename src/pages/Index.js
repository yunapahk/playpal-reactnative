import React, { useState } from "react";
import "../styles.scss";
import { Link, useLoaderData, Form } from "react-router-dom";
// import TinderCard from "react-tinder-card";
import Sidebar from "../components/Sidebar";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const dogs = useLoaderData();

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="App" id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
        </div>
      </div>

      {/* swiper-card code */}

      <div className="swiper-container">
        <div className="card-container">
          {dogs.map((dog) => (
            <div></div>
            // <TinderCard
            //   className="swipe"
            //   key={dog.name}
            //   onSwipe={(dir) => swiped(dir, dog.name)}
            //   onCardLeftScreen={() => outOfFrame(dog.name)}
            // >
            //   <div className="card">
            //     <h4>{`${dog.age} Years Old`}</h4>
            //     <h4 id="dogBreed">{dog.breed}</h4>
            //     <h3>{dog.name}</h3>
            //     <img src={dog.image} alt={dog.name} />
            //   </div>
            // </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? (
              <h2 className="infoText">You swiped {lastDirection}</h2>
            ) : (
              <h2 className="infoText" />
            )}
          </div>
        </div>
      </div>

      <div className="form-container">
        <h2>Add Your Pal!</h2>
        <Form className="form-column" action="/create" method="POST">
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="form-input"
            type="text"
            name="breed"
            placeholder="breed"
          />
          <input
            className="form-input"
            type="number"
            name="age"
            placeholder="age"
          />
          <input
            className="form-input"
            type="text"
            name="image"
            placeholder="image"
          />
          <input
            className="form-input"
            type="text"
            name="size"
            placeholder="size"
          />
          <input
            className="form-input"
            type="text"
            name="activityLevel"
            placeholder="activity level"
          />
          <input className="form-button" type="submit" value="Add Pal" />
        </Form>
      </div>
      {dogs.map((dog, index) => {
        return (
          <div key={dog._id} className="dog">
            <Link to={`/${dog._id}`}>
              <h1>{dog.name}</h1>
            </Link>
            <img src={dog.image} alt={dog.name} />
            <h3>{dog.breed}</h3>
            <h3>{dog.age}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
