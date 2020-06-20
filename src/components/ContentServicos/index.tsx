import React from 'react';

import { Content, LabelSection, Container, Box, Grid, Card } from './style';

const ContentServicos: React.FC = () => {
  return (
    <Content id="contentServicos">
      <Box>
       <label>02</label>
      </Box>
      <Container>
        <LabelSection>
          Serviços
        </LabelSection>
        <Grid>
          <Card>
            <p> Logo </p>
            <a href="#"> Portifólios </a>
            <p> Mostre as Pessoas suas 
              habilidades em um Portifólio
              bem organizado e antraente.
            </p>
          </Card>
          <Card>
            <p> Logo </p>
            <a href="#"> Sistemas Web </a>
            <p> Mostre as Pessoas suas 
              habilidades em um Portifólio
              bem organizado e antraente.
            </p>
          </Card>
          <Card>
            <p> Logo </p>
            <a href="#"> Chat </a>
            <p> Mostre as Pessoas suas 
              habilidades em um Portifólio
              bem organizado e antraente.
            </p>
          </Card>
        </Grid>
      </Container>
    </Content>
  );
}

export default ContentServicos;