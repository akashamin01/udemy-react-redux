import React from 'react';

class Imagecard extends React.Component{
  constructor(props){
    super(props);
    this.state = {spans: 0 };
    this.imageRef = React.createRef();
  }
    componentDidMount(){
      this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans(){
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height/150);
      this.setState({spans});
    }
  render(){
    return(
      <div>
        <img
        ref={this.imageRef}
        alt={this.props.image.description}
        src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default Imagecard;