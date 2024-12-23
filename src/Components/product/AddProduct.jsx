import { useState } from "react"
import ProductForm from "./ProductForm"
import ProductItem from "./ProductItem"


function AddProduct() {

  const [products,setProducts] =  useState([])

  function AddProductHandler(newProduct) {
    setProducts((products)=> [...products, newProduct])
  }


  return (
    <>
        <ProductForm onAdd={AddProductHandler}/>
        <div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
            {products.map((item,index)=> (
                <ProductItem product={item} key={index}/>
            ))}
        </div>
    </>
  )
}

export default AddProduct