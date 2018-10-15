import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MoreInfoForm from './MoreInfoForm';
import { connect } from 'react-redux';
import  * as signupActions from '../../actions/signupActions';

class MoreInfoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColour: props.favoriteColour,
      termsAndConditions: props.termsAndConditions,
      colourList: [],
      nextStep: false,
      previousStep: false,
      loading: true
    };
  }

  componentDidMount() {
    /* There is an improvement to do here -> Save this colourList into redux state, 
      to not have to fetch it again every time user moves again to this step. */
    fetch('http://localhost:3001/api/colors')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => this.setState({ colourList: data, loading: false }));
  }


  handleChange = (event, { name, value }) => {
    if (name === 'termsAndConditions') {
      this.setState((prevState, props) => ({ [name]: !prevState[name] }));
    } else {
      this.setState({ [name]: value });
    } 
  }

  cancelSubmit = event => {
    this.setState({ previousStep: true });
    event.preventDefault();
  }

  handleSubmit = event => {
    const { favoriteColour, termsAndConditions } = this.state;
    this.props.saveAditionalInfo({ favoriteColour, termsAndConditions });
    this.setState({ nextStep: true });
    event.preventDefault();
  }

  mapDataToSelect = (data) => {
    return data.map(elem => ({ text: elem, value: elem }));
  }

  render() {
    const { favoriteColour, colourList, termsAndConditions, loading, nextStep, previousStep } = this.state;
    const mappedColors = this.mapDataToSelect(colourList);
    return (
      <Container text>
        <Header as='h1' textAlign='center'>Additional info</Header>
        <MoreInfoForm 
          loading={loading} 
          favoriteColour={favoriteColour}
          colourList={mappedColors} 
          termsAndConditions={termsAndConditions}
          onChangeHandler={this.handleChange}
          submitHandler={this.handleSubmit}
          goBack={this.cancelSubmit}
          gotoNextStep={nextStep}
          nextStepUrl='/confirmation'
          gotoPreviousStep={previousStep}
          previousStepUrl='/' />
      </Container>
    );
  }
}

MoreInfoPage.propTypes = {
  favoriteColour: PropTypes.string.isRequired,
  termsAndConditions: PropTypes.bool.isRequired,
  saveAditionalInfo: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    favoriteColour: state.favoriteColour,
    termsAndConditions: state.termsAndConditions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveAditionalInfo: (aditionalInfoData) => {
      dispatch(signupActions.aditionalInfo(aditionalInfoData)); 
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfoPage);