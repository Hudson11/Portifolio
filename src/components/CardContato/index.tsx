import React from 'react';

import { Container, Form, Header, IconButton } from './style';

const CardContato: React.FC = () => {


  return(
    <Container id="modal" className="none">
      <Header>
        <p> Deixe sua dúvida </p>
        <IconButton id="closeButton" type="button"> <i className="material-icons">close</i> </IconButton>
      </Header>
      <Form>
        <div className="box-field">
          <label> Nome </label>
          <input type="text" required/>
        </div>
        <div className="box-field">
          <label> Email </label>
          <input type="email" required/>
        </div>
        <div className="box-field">
          <label> Pergunta </label>
          <textarea required/>
        </div>
        <button type="submit"> Enviar Mensagem </button>
      </Form>
    </Container>
  );
}

export default CardContato