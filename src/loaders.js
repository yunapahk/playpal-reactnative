import { baseURL } from './base_url';
import { redirect } from 'react-router-dom'

const authCheck = () => {
    const loggedIn = localStorage.getItem('loggedIn')
    if(!loggedIn){
        return false
    }
    return true
}

export const dogsLoader = async () => {
    if (!authCheck()){
        return redirect('/login')
    }
    const response = await fetch(`${baseURL}/dogs`, {
        credentials: 'include'
    })
    const dogs = await response.json()
    return dogs
}

export const dogLoader = async ({ params }) => {
    if (!authCheck()){
        return redirect('/login')
    }
    const id = params.id
    const response = await fetch(`${baseURL}/dogs/${id}`,{
        credentials: 'include'
    })
    const dog = await response.json()
    return dog
}

export const mainLoader = async () => {
    if (authCheck()){
        return redirect('/dashboard')
    }
    return {}
}
