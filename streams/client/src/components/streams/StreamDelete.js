import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    componentDidMount() {
      console.log(this.props.match.params.id);
        this.props.fetchStream(this.props.match.params.id)
    }

  renderAction() {
    console.log(this.props.match.params.id);
      const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
      if (!this.props.stream) {
          return 'Are you sure you want to delet stream'
      }
      return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
  }

  render() {
    return (
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderAction()}
          onDismiss={() => history.push("/")}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }

};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
