import Logo from 'C:/Users/joaov/Documents/aula_js/Projeto Tasks/ToDoList/src/assets/logo.png'
import github from 'C:/Users/joaov/Documents/aula_js/Projeto Tasks/ToDoList/src/assets/placa-do-github.png'
import './Header.css';

export const Header = () => {
    return (
        <header>
            <img className='logo--header' src={Logo} alt="Logo" />
            <a className='github--header' href="https://github.com/iamjonesss"><img src={github} alt="Placa Github" /></a>

            
        </header>

    )
}