import { useState } from 'react';
import './styles.css';

type FormData = {
    minPrice?: number;
    maxPrice?: number;
}

export default function Filter() {

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        
        console.log("MinPrice =" + (formData.minPrice || 0));
        console.log("MaxPrice =" + (formData.maxPrice || Number.MAX_VALUE));
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className='dsf-form-container'>
                <div className='dsf-form-div-input'>
                    <input
                        name='minPrice'
                        value={formData.minPrice || ""}
                        type="text" 
                        placeholder='Preço mínimo' 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='dsf-form-div-input'>
                    <input
                        name='maxPrice'
                        value={formData.maxPrice || ""}
                        type="text" 
                        placeholder='Preço máximo'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='dsf-form-div-button'>
                    <button type='submit'>Filtrar</button>
                </div>
            </div>
        </form>
    );
}