import React from "react";
import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const dog = useLoaderData();

  return (
    <div className="dog">
      <h1>{dog.name}</h1>
      <h2>{dog.breed}</h2>
      <img src={dog.image} alt={dog.name} />
    <div className="updateContainer">
      <h2>Update {dog.name}</h2>
      <Form action={`/update/${dog._id}`} method="POST">
        <input type="text" name="name" placeholder="dog's name" defaultValue={dog.name} />
        <input type="text" name="breed" placeholder="dog's breed" defaultValue={dog.breed} />
        <input type="number" name="age" placeholder="dog's age" defaultValue={dog.age} />
        <input type="text" name="image" placeholder="dog's image" defaultValue={dog.image} />
        <input type="text" name="size" placeholder="dog's size" defaultValue={dog.size} />
        <input type="text" name="activityLevel" placeholder="dog's activity level" defaultValue={dog.activityLevel} />
        <input type="submit" value={`Update ${dog.name}`} />
      </Form>

      <Form action={`/delete/${dog._id}`} method="POST">
        <button type="submit">{`Delete ${dog.name}`}</button>
      </Form>
    </div>
    </div>
  );
}

export default Show;