import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component {
  renderError({error, touched}){
    if(touched && error){
      return(
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({input,label,meta})=> {
    const className = "field ${meta.error && meta.touched ? 'error' : ''}"
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input}/>
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }
onSubmit = (formValues) => {
  this.props.createStream(formValues);
}

  render(){
  return (
    <form
    onSubmit={this.props.handleSubmit(this.onSubmit)}
    className='ui form error'>
      <Field name='title' component={this.renderInput} label = 'enter title'/>
      <Field name='description' component={this.renderInput} label = 'enter description'/>
      <button className='ui button primary'>Submit</button>
    </form>
  );
}
}

const validate = formValues => {
  const error={}
  if(!formValues.title){
    error.title='you must enter a title';
  }
  if(!formValues.description){
    error.description='you must enter a description';
  }

  return error;
};

const formWrapped = reduxForm({form: ' StreamCreate', validate })(StreamCreate);

export default connect(null , {createStream})(formWrapped);
