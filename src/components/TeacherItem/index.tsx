import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/52423106?s=460&u=b7be48e5ea2534cc86cde0219e07d7dd14ab39a0&v=4" alt=""/>
                <div>
                    <strong>Zé Pilintra</strong>
                    <span>Putaria desenfreada</span>
                </div>
            </header>

            <p>
                Quando criança sempre pensei em comer todo mundo que aparecesse na minha frente, pois bem, hoje faço isso.
                <br/><br/>
                Agora, como a minha conta bancária está repleta de dinheiro, e, eu de doenças sexualmente transmissíveis, estou ensinando outras pessoas a terem o que desejam.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;