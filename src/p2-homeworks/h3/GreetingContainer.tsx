import React, {useState, ChangeEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedName = e.currentTarget.value.trim()

        if (trimmedName){
            setName(trimmedName);
            setError('')
        }else {
            setName('')
            setError('name is require')
        }

    }
    const addUser = () => {
        addUserCallback(name);
        alert(`Hello ${name} !`);
        setName('');
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === "Enter" && name){
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
