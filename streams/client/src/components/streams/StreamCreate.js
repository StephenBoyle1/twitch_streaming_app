import React from "react";
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import  StreamForm  from '../streams/StreamForm';

class StreamCreate extends React.Component {

  onSubmit = (formValues)  => {
    //   event.preventDefault();
    console.log(formValues);
    console.log('form values here');
    this.props.createStream(formValues);

  }

  render() {
    //   console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, {createStream})(StreamCreate);
