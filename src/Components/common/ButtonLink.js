import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import React from 'react';

const ButtonLink = ({linkTo, buttonText, type, float}) => {
  const primary = type === 'primary',
    secondary =  type === 'secondary';
  return (
    <Link to={linkTo}>
      <Button primary={primary} secondary={secondary} floated={float}>{buttonText}</Button>
    </Link>
  );
};

export default ButtonLink;