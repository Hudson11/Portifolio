import React from 'react';

import { Content, LabelSection, Grid, Container, Box } from './style';

const ContentSobre: React.FC = () => {
  return (
    <Content id="contentSobre">
      <Box> <label> 01 </label> </Box>
      <Container>
        <LabelSection>
          Sobre
        </LabelSection>
        <Grid>
          <div className="imgback">
            <img src="/images/person.jpg" alt="person avatar"></img>
          </div>
          <div className="description">
            <strong> Hudson Borba</strong>
            <p>Programador e desenvolvedor há mais de 17 anos atuando diretamente no mercado.
            Bem reconhecido na área por também dar aulas tanto em escolas de programação quanto
              aulas particulares.</p>
            <p>Programador e desenvolvedor há mais de 17 anos atuando diretamente no mercado.
            Bem reconhecido na área por também dar aulas tanto em escolas de programação quanto
              aulas particulares.</p>
            <p>Programador e desenvolvedor há mais de 17 anos atuando diretamente no mercado.
            Bem reconhecido na área por também dar aulas tanto em escolas de programação quanto
              aulas particulares.</p>
            <p>Telefone / <a href="https://api.whatsapp.com/send?phone=5584988785181" target="_blank"rel="noopener noreferrer" >Whatsapp</a>:(84) 98878-5181</p>
          </div>
        </Grid>
        <p> Partipações Profissionais </p>
        <Grid>

        </Grid>
      </Container>
    </Content>
  );
}

export default ContentSobre;