import React from 'react';

import { Content, LabelSection, Container, Box } from './style';

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
        
      </Container>
    </Content>
  );
}

export default ContentContato;