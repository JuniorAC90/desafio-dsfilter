import './styles.css';
import Filter from '../Filter';
import Listing from '../Listing';
import * as productService from '../../services/product-service';


export function ListingBody() {

    const products = productService.findByPrice(0, Number.MAX_VALUE);

    return (
        <>
            <div className='dsf-card-filter container'>
                <Filter />
            </div>
            <div className='dsf-card-listing container'>
                <Listing products={products} />
            </div>
        </>
        
    );
}