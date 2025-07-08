import React from 'react'

type Props = {}
const products = [
  { id: 1, name: 'Product 1', price: 100 }, 
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
];

const ContextExample = (props: Props) => {
    const [cart, setCart] = React.useState<{ id: number; name: string; price: number }[]>([]);
  return (
   <div>
        <h1>Context Example</h1>
        <div>
            <h2>Products</h2>
            <ul>
            {products.map(product => (
                <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => setCart([...cart, product])}>Add to Cart</button>
                </li>
            ))}
            </ul>
        </div>
        <div>
            <h2>Cart</h2>
            <ul>
            {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
            ))}
            </ul>
        </div> 
   </div>
  )
}

export default ContextExample