import React from 'react'

type Props = {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}
const Counter=({count, onIncrement,onDecrement}:Props)=>{
    

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
}

const LiftingStateUp = (props: Props) => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
  return (
    <div>
       <h1>Lifting State Up Example</h1>
         <Counter 
                count={count} 
                onIncrement={increment} 
                onDecrement={decrement} 
          />
    </div>
  )
}

export default LiftingStateUp