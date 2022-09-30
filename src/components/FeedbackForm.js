import React, { useState } from 'react'
import './Feedbackform.css';

const FeedbackForm = () => {
	const [model,setmodel] = useState(false)
	const [data,setdata] = useState({
		name: "",
		email: "",
		feedback: '',
	})
	
	const handlechange = (e) => {
		const { name , value } = e.target;
		
		setdata ({...data , [name]: value});
	};

	const handleonSubmit = (e) => {
		e.preventDefault()
		console.log(data)
	}

	const handellertoogle=()=>{setmodel((value) => !value )}

	return (
	<div className='container '>
		<h2 className='f-heading'>Feedback US </h2>
		<div className='feedback'>
		
		{!model && (
			<button className='btn btn-info open-btn' onClick={handellertoogle}>Feedback</button>
		)}
			
		{model && (
			<form className='feedback-form'>
					<br/>
					<button className='btn close-btn' onClick={handellertoogle}>X</button>
					
				<div  className='m1-rem'>
					<input placeholder='Name' name='Name' onChange={handlechange} required/>
				</div>
				<br/>
				<div>
					<input placeholder='Email' name='email' onChange={handlechange} required/>
				</div>
				<br/>
				<div>
					<input placeholder='Feedback' name='feedback' onChange={handlechange} required/>
				</div>
				<br/>
				<button className='btn btn-info' onClick={handleonSubmit}  type='submit' >Submit feedback</button>
			</form>
			)}
			
		</div>
	  
	</div>
  )
}
 
export default FeedbackForm
