import { baseURL } from "./base_url";
import { redirect } from "react-router-dom";

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newDog = {
    name: formData.get("name"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    image: formData.get("image"),
    size: formData.get("size"),
    activityLevel: formData.get("activityLevel")
  };

  await fetch(`${baseURL}/dogs`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDog)
  });

  return redirect("/dashboard");
};

export const updateAction = async ({ request, params }) => {
  const id = params.id;
  const formData = await request.formData();

  const updatedDog = {
    name: formData.get("name"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    image: formData.get("image"),
    size: formData.get("size"),
    activityLevel: formData.get("activityLevel")
  };

  await fetch(`${baseURL}/dogs/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedDog)
  });

  return redirect("/dashboard");
};

export const deleteAction = async ({ params }) => {
  const id = params.id;
  await fetch(`${baseURL}/dogs/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  return redirect("/dashboard");
};


export const signupAction = async ({request, session}) => {
  const formData = await request.formData()
  const newUser = {
      username: formData.get('username'),
      password: formData.get('password')
  }
  const response = await fetch(`${ baseURL }/signup`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
  })
  if(response.status >= 400){
      alert(response.statusText)
      return redirect('/signup')
  }
  console.log('in signup action')
  return redirect('/login')
}

export const loginAction = async ({request}) => {
  const formData = await request.formData()
  const user = {
      username: formData.get('username'),
      password: formData.get('password')
  }
  const response = await fetch(`${ baseURL }/login`, {
      method: "POST",
      credentials: "include",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })

  if (response.status >= 400) {
      alert(response.statusText)
      return redirect('/login')
  }

  localStorage.setItem('loggedIn', JSON.stringify({status: true}))

  return redirect('/dashboard')
}
