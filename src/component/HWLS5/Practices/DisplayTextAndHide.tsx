import React from 'react'

type Props = {}

export default function DisplayTextAndHide({}: Props) {
     const [isVisible, setIsVisible] = React.useState(false); 
     const handleHand = () => {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Hide after 2 seconds
        
     }
  return (
    <div>
        <button onDoubleClick={handleHand}>Click me</button>
        {isVisible && (
        <p style={{ marginTop: '1rem', color: 'green' }}>
          Double-clicked!
        </p>
      )}
    </div>
  )
}