import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getProduct,clearErrors} from '../../actions/productAction'
import ProductCard from '../layout/ProductCard/ProductCard'
import Loader from '../layout/loading/Loader'
import { useEffect } from 'react'
import './products.css'
import { useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider';
import { useAlert } from 'react-alert';
import MetData from '../layout/MetData'

const categorys= [
  "Laptop",
  "Mobiles",
  "Shoes",
  "Watches",
  "Clothes",
  "Camera",
  "mashine1",
]

const Products = () => {
  let alert=useAlert();
  //pagination;
const [currentPage,setCurretPage]=useState(1)

const [price,setPrice]=useState([0,25000])

const [category,setCategory]=useState("")

const [ratings,setRatings]= useState(0)

  //for the filteration
    const dispatch=useDispatch()

   const params=useParams()

    const {products,loading,error,productsCount,resultPerPage,filteredProductsCount}=useSelector((state)=>state.products)

    const keyword=params.keyword
    useEffect(() => {
      if (error) {
        alert.error(error)
        dispatch(clearErrors())
      }
      dispatch(getProduct(keyword,currentPage,price,category,ratings))
    }, [dispatch,keyword,currentPage,price,category,ratings,alert,error])
    //pagination
const setCurrentPageNo=(e)=>{
  setCurretPage(e)
}

const priceHandler=(event,newPrice)=>{
  setPrice(newPrice)
}
const count=filteredProductsCount
  return (
    <>
    {loading ? <Loader/> : (
        <>
        <MetData title="PRODUCTS-Ecommerice"/>
        <h2 className="productsHeading">Products</h2>

<div className="products">
  {products &&
    products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
</div>

<div className="filterBox">
  <h4 className='margins'>Price</h4>
  <Slider
    value={price}
    onChange={priceHandler}
    valueLabelDisplay="auto"
    aria-labelledby="range-slider"
    min={0}
    max={25000}
  />

  <h4 className='margins'>Categories</h4>
  <ul className="categoryBox">
    {categorys.map((category) => (
      <li
        className="category-link"
        key={category}
        onClick={() => setCategory(category)}
      >
        {category}
      </li>
    ))}
  </ul>

  <fieldset>
    <h4 className='margins' component="legend">Ratings Above</h4>
    <Slider
      value={ratings}
      onChange={(e, newRating) => {
        setRatings(newRating);
      }}
      aria-labelledby="continuous-slider"
      valueLabelDisplay="auto"
      min={0}
      max={5}
    />
  </fieldset>
</div>
{resultPerPage < count && (
  <div className="paginationBox">
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={resultPerPage}
      totalItemsCount={productsCount}
      onChange={setCurrentPageNo}
      nextPageText="Next"
      prevPageText="Prev"
      firstPageText="1st"
      lastPageText="Last"
      itemClass="page-item"
      linkClass="page-link"
      activeClass="pageItemActive"
      activeLinkClass="pageLinkActive"
    />
  </div>
)}
        </>
    )}
    </>
  )
}

export default Products