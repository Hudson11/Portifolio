import React from 'react';

import { Content, LabelSection, Container, Box, Grid } from './style';

const ContentContato: React.FC = () => {
  return (
    <Content id="contentContato">
      <Box>
       <label>03</label>
      </Box>
      <Container>
        <LabelSection>
          Contato
        </LabelSection>
        <Grid>
          <strong> Entre em contato comigo da forma que preferir </strong>
          <label> Whatsapp: 84988785181 </label>
          <label> Email: hudsonhdj36@gmail.com </label>
        </Grid>
      </Container>
    </Content>
  );
}

export default ContentContato;