/* eslint-disable react/prop-types */
import { useId } from 'react'
import './Filters.css'
import { Footer } from './Footer';
import { useFilters } from '../hooks/useFilters';

export const Filters = () => {
    
    const { filters, setFilters } = useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value 
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value 
        }))
    }

  return (
    <section className='filters'>

        <div>
            <label htmlFor={minPriceFilterId}>Precio</label>
            <input 
                type="range" 
                id={minPriceFilterId}
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>

        <div>
            <label htmlFor={categoryFilterId}>Categorias</label>
            {/* <select id={categoryFilterId} onChange={getProductsByCategory}> */}
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">All</option>
                <option value="beauty">Beauty</option>
                <option value="furniture">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
                {/* {
                    categories.map( categoria =>(
                        <option value={categoria} key={categoria}>{categoria}</option>
                    ))
                } */}
            </select>
        </div>
        
        {/* <Footer /> */}
        
        
    </section>
  )
}

