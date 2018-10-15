import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import RoutableFormHOC from '../common/RoutableFormHOC';


const MoreInfoForm = ({ loading, favoriteColour, colourList, termsAndConditions, onChangeHandler, submitHandler, goBack }) => {
  return (
    <Form loading={loading} onSubmit={submitHandler}>
      <Form.Select required label='Select your favorite color' name='favoriteColour' value={favoriteColour} options={colourList} onChange={onChangeHandler} placeholder='favorite color' />
      <Form.Checkbox 
        label={<label>I agree to the <a href="https://upgrade.com" target="_blank" rel="noopener noreferrer">Terms and Conditions</a></label>} 
        required  
        name='termsAndConditions' 
        checked={termsAndConditions} 
        onChange={onChangeHandler}/>
      <Form.Group>
        <Form.Button secondary content='Back' onClick={goBack} /> 
        <Form.Button primary content='Next' disabled={!favoriteColour || !termsAndConditions} /> 
      </Form.Group>
    </Form>
  )
}

MoreInfoForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  favoriteColour: PropTypes.string.isRequired,
  colourList: PropTypes.array.isRequired,
  termsAndConditions: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
}

export default RoutableFormHOC(MoreInfoForm);


