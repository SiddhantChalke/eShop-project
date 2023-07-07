import React,{useState,useContext} from 'react'
import './Trending.css'
import {ProductContext} from '../../contexts/ProductContext'
import Card from '../Card/Card'

const Trending = () => {
  const {products} = useContext(ProductContext)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [desc, setDesc] = useState(null)
    // get all products
    // console.log(products)
    const arr = [...products]
    if(desc=='desc'){arr.sort((a, b) => b.price - a.price) }
    else if(desc=='asc'){ arr.sort((a, b) => a.price - b.price)}
  return (
    <div className='featured'>
      <div className="filters">
        <div className="filter">
          <span>Price filters</span>
        </div>
        <div className='filter-list'>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
          <div className="inputItem">
            <input type="radio" id="asc" name='price' onChange={e=>setDesc('asc')}/>
            <label htmlFor="asc">Ascending (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" name='price' onChange={e=>setDesc('desc')}/>
            <label htmlFor="desc">Descending (Highest first)</label>
          </div>
          <div className="inputItem-drop">
            <select name="" id="">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="output">
              {(desc==null)&&(products.filter(item => item.price <= maxPrice).map(filteredItem => (
                      <Card item={filteredItem} key={filteredItem.id} id={filteredItem.id} />
              )))
              }
              {(desc!==null)&&(arr.map(sortedItem=>(
                      <Card item={sortedItem} key={sortedItem.id} id={sortedItem.id}/>
                    )) )
              }
      </div>
    </div>
  )
}

export default Trending