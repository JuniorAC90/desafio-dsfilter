import Filter from '../Filter';
import Listing from '../Listing';
import './styles.css';

export function ListingBody() {
    return (
        <>
            <div className='dsf-card-filter container'>
                <Filter />
            </div>
            <div className='dsf-card-listing container'>
                <Listing />
            </div>
        </>
        
    );
}