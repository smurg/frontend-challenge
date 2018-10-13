import React, { Component } from 'react';
import ButtonLink from '../common/ButtonLink';

export class MoreInfoPage extends Component {
  render() {
    return (
      <div>
        <h1>Additional info</h1>
        <ButtonLink linkTo="/" buttonText='Back' type='secondary' />
        <ButtonLink linkTo="/confirmation" buttonText='Next' type='primary' />
      </div>
    )
  }
}

export default MoreInfoPage;
