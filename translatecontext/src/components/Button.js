import React from 'react';
import LanguageContext from './contexts/LanguageContext';

class Button extends React.Component{
  render(){
    return(
      <div>
        <button className='ui primary button'>
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'submit' : 'mitsub' }
        </LanguageContext.Consumer>
        </button>
      </div>
    );
  }
}

export default Button;
