import React from 'react';
import ButtonLink from './common/ButtonLink';

const SuccessPage = () => {
  return (
    <div>
      <p>Great! ou have been registered!</p>
      <ButtonLink linkTo="/" buttonText='Restart' type='primary' />
    </div>
  )
}

export default SuccessPage;
