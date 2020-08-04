import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/41764501?s=460&u=608dadc0e971a0c4078b0b302cfb07e295d01cb7&v=4" alt="Aloisio Martinez"/>
            <div>
              <strong>Aloisio Martinez</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de quimica avançada.
            <br /> <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80, 00</strong>
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