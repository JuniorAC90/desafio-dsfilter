import type { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    products: ProductDTO[];
}

export default function Listing({products}: Props) {
    return (
        <>
        {
            products.map(
                product => 
                    <div className='dsf-card-product'>
                        <h3 className='dsf-product-title'>{product.name}</h3>
                        <p className='dsf-product-price'>R$ {product.price}</p>
                    </div>
                
            )
        }
        
        </>
    );
}