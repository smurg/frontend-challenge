import React from 'react';
import PropTypes from 'prop-types';
import { Form, Table, Header } from 'semantic-ui-react';
import RoutableFormHOC from '../common/RoutableFormHOC';


const ConfirmationForm = ({ userName, email, password, favoriteColour, termsAndConditions, submitHandler, goBack, loading }) => {
  return (
    <Form loading={loading} onSubmit={submitHandler}>
      <Table columns='2' size='large' basic='very'>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' textAlign='right'>
                User Name:
              </Header>
            </Table.Cell>
            <Table.Cell>{userName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' textAlign='right'>
                Email:
              </Header>
            </Table.Cell>
            <Table.Cell>{email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' textAlign='right'>
                Password:
              </Header>
            </Table.Cell>
            <Table.Cell>{password}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' textAlign='right'>
                Favorite Color:
              </Header>
            </Table.Cell>
            <Table.Cell>{favoriteColour}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' textAlign='right'>
                Terms and conditions:
              </Header>
            </Table.Cell>
            <Table.Cell>{termsAndConditions? 'Agreed' : 'Not agreed'}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Form.Group>
        <Form.Button secondary content='Back' onClick={goBack} /> 
        <Form.Button primary content='Submit' /> 
      </Form.Group>
    </Form>
  )
}

ConfirmationForm.propTypes = {
  favoriteColour: PropTypes.string.isRequired,
  termsAndConditions: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default RoutableFormHOC(ConfirmationForm);


