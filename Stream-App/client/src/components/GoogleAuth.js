import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component{
  componentDidMount(){
    window.gapi.load('client:auth2',() =>{
      window.gapi.client.init({
        clientId: '716007682005-e6f40m5o17kmgkcptdv30r962k74ra01.apps.googleusercontent.com',
        scope : 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn =>{
    if (isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }  else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton(){
    if(this.props.isSignedIn ===null ){
      return null;
    }else if (this.props.isSignedIn){
      return (<div>
      <button onClick={this.onSignOutClick} style={{backgroundColor: 'red' , color: 'white'}}>
        Sign Out
      </button>
      </div>);
    }else{
      return (
        <div>
        <button onClick={this.onSignInClick} style={{backgroundColor: 'Green' , color: 'White'}}>
        Sign In
        </button>
        </div>);
    }

  }

  render(){
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state  =>{
  return {isSignedIn : state.auth.isSignedIn} ;
};


export default connect(mapStateToProps, {signIn,signOut})(GoogleAuth);
