import React, { useState } from 'react'
import Input from '../../components/input'
import Button from '../../components/button';
import Card from '../../components/card';

export const AddVoter = () => {
    const [state, setState] = useState({
        studentId:"",
        studentName:"",
        email:"",
        telphone:"",
        password:"",

        //  
    }
    );
  return (
    
        <form>
            <Card title="Student Information"> 
    <Input name='studentId' id='studentId' type='text' title='Student Id' onChange={(e) => {
            setState((prevState) =>{
                return {...prevState, studentId: e.target.value}
            });
    }}/>
    
    <Input name='studentName' id='studentName' type='text' title='Student Name' onChange={(e) => {
            setState((prevState) =>{
                return {...prevState, studentName: e.target.value}
            });
    }}/>
    
    <Input name='email' id='email' type='text' title='Email' onChange={(e) => {
            setState((prevState) =>{
                return {...prevState, email: e.target.value}
            });
    }}/>

    <Input name='telephone' id='telephone' type='text' title='Telephone' onChange={(e) => {
            setState((prevState) =>{
                return {...prevState, telphone: e.target.value}
            });
    }}/>

    <Input name='password' id='password' type='text' title='Passowrd' onChange={(e) => {
            setState((prevState) =>{
                return {...prevState, password: e.target.value}
            });
    }}/>

    <Button type="submit" title="Submit"/>
    </Card>
  </form>

  )
}
export default AddVoter