import React from 'react'

type Props = {
    
}
const question = {
  title: 'What is your favorite color?',
  options: [
    { id: 'A', text: 'Red' },
    { id: 'B', text: 'Blue' },
    { id: 'C', text: 'Green' },
    { id: 'D', text: 'Yellow' }
  ]
}
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const Question  = (props: Props) => {
  return (
    <div>
        <h3>{question.title}</h3>
            {question.options.map((option, i) => (
                    <label>
                        <input type="radio" name="choice" value={option.id} />
                        {alphabet[i]}. {option.text}
                    </label>
             ))}
    </div>
  )
}
export default Question 