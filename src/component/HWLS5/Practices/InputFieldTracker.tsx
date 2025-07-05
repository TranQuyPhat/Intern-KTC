import React from 'react'

type Props = {}

export default function InputFieldTracker({}: Props) {
    const [inputValue, setInputValue] = React.useState("");
  return (
    <div>
        <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Type something...'
        />
        <p>You typed: {inputValue}</p>
        <button onClick={() => setInputValue("")}>Clear</button>
    </div>
  )
}