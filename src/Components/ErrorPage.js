import React from 'react';
import ButtonLink from './common/ButtonLink';

const ErrorPage = () => {
  return (
    <div>
      <p>OMG! there was an error!!!</p>
      <ButtonLink linkTo="/" buttonText='Restart' type='primary' />
    </div>
  )
}

export default ErrorPage;
