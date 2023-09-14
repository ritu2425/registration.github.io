import React,{ useEffect, useState } from "react";
const Form=() =>{
    
    const[inputData,setInputData]= useState({name:"",email:"",password:""});
    const [flag,setFlag]= useState(false)
    useEffect( () => {
         console.log("Registered")
    },[flag]);
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})  
        console.log(inputData.name ) 
        
        
    }
    function handleSubmit(e){
        e.preventDefault();
        if(! inputData.name || ! inputData.email || !inputData.password)
        {
            alert("All fields are mandatory")

        }
        else{
            setFlag(true)
        }

    }


return(
       <>
        <prev>{(flag)?<h2 id="ui-define">Hello {inputData.name},you've Registered successfully </h2>:""} </prev>
        <form id="container" onSubmit={handleSubmit}>
            <div id="header">
                <h1>Registration Form</h1>
            </div>
            <div>
        <input type='text' placeholder="enter your name" name="name" onChange={handleData}></input>
    </div>
    <div>
        <input type='text' placeholder="enter your email" name="email" onChange={handleData}></input>
    </div>
    <div>
        <input type='text' placeholder="enter your password" name="password" onChange={handleData}></input>
    </div>
    <div>
        <button type='submit'>Submit</button>
    </div>
            
        </form>
       
        
        </>
        
    )
}

export default Form ;                                                