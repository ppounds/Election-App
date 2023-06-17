import React from 'react'

export const Input = (props) => {
  return (
    <div classname="mb-3">
      <label for={props.id} classname="form-label">{props.title}</label>
      <input type={props.type} clasclassname="form-control" id={props.id} aria-describedby="emailHelp" name={props.name}
       onChange={props.onChange} />
      {/* <div id="emailHelp" classname="form-text">We'll never share your email with anyone else.</div> */}
    </div>
  )
}
export default Input; 