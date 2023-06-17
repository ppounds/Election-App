import React, { useState } from 'react'
import Input from '../../components/input'
import Button from '../../components/button';

export const AddVoter = () => {
    const [state, setState] = useState({
        studentId:"",
        studentName:"",
        email:"",
        telphone:"",
        password:"",

        onChange((e)=>)
    }
    );
  return (
    <div><form>
    <Input name='studentId' id='studentId' type='text' title='Student Id'/>
    
    <Input name='studentName' id='studentName' type='text' title='Student Name'/>
    
    <Input name='email' id='email' type='text' title='Email'/>

    <Input name='telephone' id='telephone' type='text' title='Telephone'/>

    <Input name='password' id='password' type='text' title='Passowrd'/>

    <Button type="submit" title="Submit"/>
  </form></div>
  )
}
export default AddVoter