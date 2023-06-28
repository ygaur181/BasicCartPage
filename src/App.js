import React, {useState} from 'react'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  
  const [productList, setProductList] = useState([
    {
        Name : 'Watch',
        Price :'500',
        id : 1,
        qty : 2
    },
    {
      Name : 'MOBILE',
      Price :'200',
      id : 2,
      qty : 2
    },
    {
      Name : 'Television',
      Price :'1000',
      id : 3,
      qty : 2
    }
  ]
)

const increment = (product) =>{
  const index = productList.indexOf(product);
  productList[index].qty += 1;
  const arr = productList.map((item) => item);
  setProductList(arr);
}

const decrement = (product) =>{
  const index = productList.indexOf(product);
  if(productList[index].qty === 0) return;
  productList[index].qty -= 1;
  const arr = productList.map((item) => item);
  setProductList(arr);
}

const handleDelete = (id) =>{
  const items = productList.filter((item) => item.id !== id);
  setProductList(items)
}

const handleQtySum = () =>{
  let count = 0
  productList.forEach((items) => {count+=items.qty});
  return count;
}

const handleTotalPrice = () =>{
  let count = 0;
  productList.forEach((items) => {count+=items.qty * items.Price});
  return count;
}

  return (
    <div>
      <Navbar
      qtySum = {handleQtySum()}
      />

      <Cart 
      onDeleteItems = {handleDelete}
      products = {productList}
      onIncreaseItems = {increment}
      onDecreaseItems = {decrement}
      />

      <Footer 
      totalPrice = {handleTotalPrice()}
      />
    </div>
  )
}

export default App