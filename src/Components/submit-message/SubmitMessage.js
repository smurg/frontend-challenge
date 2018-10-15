import React from 'react';
import { Header, Container, Button } from 'semantic-ui-react';

const SubmitMessage = ({ clickHandler, title, message, icon }) => {
  return (
    <Container text>
      <Header as='h2' textAlign='center' className='my-class'>
        {title}
        <Header.Subheader>
          {icon}
          {message}
        </Header.Subheader>
      </Header>
      <Button onClick={clickHandler} content='Restart' type='primary' />
    </Container>
  )
}

export default SubmitMessage;