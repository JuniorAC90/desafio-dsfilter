import './styles.css';

export default function Filter() {
    return(
        <form>
            <div className='dsf-form-container'>
                <div className='dsf-form-div-input'>
                    <input type="text" placeholder='Preço mínimo' />
                </div>
                <div className='dsf-form-div-input'>
                    <input type="text" placeholder='Preço máximo' />
                </div>
                <div className='dsf-form-div-button'>
                    <button>Filtrar</button>
                </div>
            </div>
        </form>
    );
}