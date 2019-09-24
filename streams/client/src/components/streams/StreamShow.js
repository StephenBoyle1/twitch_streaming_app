import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from 'flv.js';

class StreamShow extends React.Component {
  constructor(props){
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(this.videoRef);
    this.props.fetchStream(id);
    this.buildPlayer();

  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer() {
    if(this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, descritpion } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef}
        style={{width: "100%" }}
        controls={true}
        />
        <h1>{title}</h1>
        <h5>{descritpion}</h5>
      </div>
    );
  }
}

const MapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  MapStateToProps,
  { fetchStream }
)(StreamShow);
