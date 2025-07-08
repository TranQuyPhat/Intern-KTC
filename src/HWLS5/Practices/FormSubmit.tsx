import React, { useState } from 'react'

type Props = {}

export default function FormSubmit({}: Props) {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if (inputValue.trim() === "") {
                alert("Please enter a name");
            } else {
                alert(`Submitted name: ${inputValue}`);
                setInputValue(""); // Clear the input field after submission
            }
        };
  return (
    <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Enter your name' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button  type='submit'>Submit</button>
    </form>
  )
}