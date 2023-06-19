import React from 'react'

const Input = (props) => {
  return (
    <div className="form-group">
      <label for={props.id} className="form-label">{props.title}</label>
      <input type={props.type} className="form-control" id={props.id} aria-describedby="emailHelp" name={props.name}
       onChange={props.onChange} />
      {/* <div id="emailHelp" classname="form-text">We'll never share your email with anyone else.</div> */}
    </div>
  )
}
export default Input; 