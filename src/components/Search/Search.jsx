import React,{useState, useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'
import Card from '../Card/Card'
import './Search.css'
const Search = () => {
    const {products} = useContext(ProductContext)
    const [searchTerm, setSearchTerm] = useState([''])
    
  return (
    <div className='search-div'>
          <div id='search-bar'>
            <input type="search" className='search-input' placeholder='Search' value={searchTerm} onChange={e =>setSearchTerm(e.target.value)}/>
            {/* <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg> */}
          </div>
        <div className="search-result">
        {
            products.filter(item => item.category  == searchTerm ).map(searchedItem => (
                <Card item={searchedItem} key={searchedItem.id} id={searchedItem.id} />
            ))
        }
        </div>
    </div>
  )
}

export default Search