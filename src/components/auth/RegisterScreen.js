import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from './../../hooks/useForm';
import validator from 'validator'


export const RegisterScreen = () => {

    
    const [formValues, handleInputChange] = useForm({
        name: 'Marcos',
        email: 'marcos_go2015@hotmail.com',
        password: '123',
        password2: '123'
    })
    const {name,email,password, password2} = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
        //console.log(name, email, password, password2);

        if(isFormValid()){
            console.log("form correct")
        }
        


    }

    const isFormValid = () =>{
        if(name.trim().length===0){
            console.log("Name invalid")
            return false;
        }else if(!validator.isEmail(email)){
            console.log('Email invalid')
            return false;
        }else if(password !== password2 || password.length<5){
            console.log('password should be at least 5 character and match each other')
            return false
        }
        return true
    }
 

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                <div className="auth__alert-error">Holamundo</div>
                <input type = "text" placeholder= "Name" name= "name" autoComplete="off "className="auth__input" value={name} onChange={handleInputChange}/>
                <input type = "text" placeholder= "Email" name= "email" autoComplete="off "className="auth__input"value={email} onChange={handleInputChange}/>
                <input type = "password" placeholder= "Password" name= "password" className="auth__input"value={password} onChange={handleInputChange}/>
                <input type = "password" placeholder= "Confirm password" name= "password2" className="auth__input"value={password2} onChange={handleInputChange}/>
                <button type="submit" className = "btn btn-primary btn-block mb-5" >Register</button>

                

                <Link to="/auth/register" className="link"
                >
                    Already registred?
                </Link>

            </form>
        </>
    )
}
