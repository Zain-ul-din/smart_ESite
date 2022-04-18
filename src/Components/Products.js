import React , {useState} from 'react'
import Product from './Product'
import EditProduct from './EditProductForm'

export default function Products (props) {
    const [searchState , setSearchState] = useState('')
    
    const [editState , setEditState] = useState(null)

    let filterArray =  props.productsArr.filter((ele)=>{
        return ele.data.name.toLowerCase().includes(searchState.toLowerCase())  
    })

    return (
        <>
          
          <div className='my-4 py-2 mt-2 mt2' ref = {props.productsRef}>
             <h1 className='text-center display-4 fw-bold text-dark opacity-75'>Products</h1>
             <div className='bottomLine'>
             </div>
          </div>
          
          <div className='container text-center w-50 w-small-75 mb-3' >
              <div >
              <input value={searchState} className="form-control mr-sm-2 bg-dark text-light rounded" type="search" placeholder="Search products" 
                 onChange={ (e)=>{
                     e.preventDefault()
                     setSearchState(e.target.value)
                 }}
              />
              </div>
          </div>
            <div className="container">
                {filterArray.length === 0 && <h2 className='text-center'>NOT FOUND</h2>}
               <div className="row ">
                   {filterArray && filterArray.map((product)=>{
                       return (
                         <div className="col centerCards py-2 text-center " key={product._id}>
                           <Product
                            isAdmin = {props.isAdmin}
                            _id = {product._id}
                            name = {product.data.name}
                            description = {product.data.description}
                            price = {product.data.price}
                            imgURL = {product.data.imgURL}
                            reRender = {props.reRender}
                            onEdit = {()=>{
                                setEditState(product)
                            }}
                           />
                         </div>  
                        )
                   })}
               </div>
            </div>
            {editState && <EditProduct
              data = {editState}
              setEditState = {setEditState}
              reRender = {props.reRender}
            />}
        </>
    )
}