import React from 'react';
import Styles from './styles.jsx';

const Header = (props) => {
  return (
    <Styles.Header>
      <h1>{props.title}</h1>
    </Styles.Header>
  );
}
 
export default Header;