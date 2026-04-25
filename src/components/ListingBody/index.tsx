import './styles.css';
import Filter from '../Filter';
import Listing from '../Listing';
import * as productService from '../../services/product-service';
import { useContext, useEffect, useState } from 'react';
import { ContextProductCount } from '../../utils/context-product';


export function ListingBody() {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(Number.MAX_VALUE);

    const products = productService.findByPrice(minValue, maxValue);

    const {setContextProductCount} = useContext(ContextProductCount);

    useEffect(() => {
        const count = productService.findByPrice(minValue, maxValue).length;
        setContextProductCount(count);
    }, [minValue, maxValue, setContextProductCount]);

    function handleFilter(min: number, max: number) {
        setMinValue(min);
        setMaxValue(max);
    }

    return (
        <>
            <div className='dsf-card-filter container'>
                <Filter onFilter={handleFilter}/>
            </div>
            <div className='dsf-card-listing container'>
                <Listing products={products} />
            </div>
        </>
        
    );
}