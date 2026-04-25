import { useContext } from 'react';
import './styles.css';
import { ContextProductCount } from '../../utils/context-product';

export default function Header() {

    const {contextProductCount} = useContext(ContextProductCount);

    return (
        <header>
            <div className='dsf-header-container container'>
                <h1 className='dsf-header-title'>DSFilter</h1>
                <p className='dsf-header-counter'>{contextProductCount} produto(s)</p>
            </div>
        </header>
    );
}