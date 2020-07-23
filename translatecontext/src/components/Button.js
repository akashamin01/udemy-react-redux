import React from 'react';
import LanguageContext from './contexts/LanguageContext';

class Button extends React.Component{
  static contextType = LanguageContext;
  render(){
    const text  = this.context === 'english' ? 'submit' : 'mitsub';
    return(
      <div>
        <button className='ui primary button'>
        {text}
        </button>
      </div>
    );
  }
}

export default Button;
