import './campoAdd.css'
import icon from '../assets/novo-arquivo.png'

export const CampoAdd = () => {
   
   
    return (
        <div className='base--add'>
            <div className='field--add'>
                <div>
                    
                    <img className='icon-add' src={icon} alt="icon" />
                    <input className='inputText--add' type="text" />
                </div>
                <button className='button--add'>Adicionar Tarefa</button>
            </div>
        
        </div>
    )
}