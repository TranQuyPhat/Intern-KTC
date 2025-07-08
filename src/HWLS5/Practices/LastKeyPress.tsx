import React from 'react'

type Props = {}

export default function LastKeyPress({}: Props) {
    const [lastKey, setLastKey] = React.useState<string | null>(null);
    
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setLastKey(event.key);}
  return (
    <div>
        <input
            type='text'
            onKeyDown={handleKeyDown}
            placeholder='Press any key...'
        />
        <p>Last key pressed: {lastKey ? lastKey : "None"}</p>
        <button onClick={() => setLastKey(null)}>Clear</button>
    </div>
  )
}