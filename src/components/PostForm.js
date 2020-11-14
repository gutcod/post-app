import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  //ca s anu pierdem contextul punem functia aici
  submitHandler = event => {
    //ca sa nu perezagruzeasca pagina
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert("input is can not be empty");
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };
  //----universal method to change input
  changeInputHandler = event => {
    event.persist();
    this.setState(prev => ({ ...prev, ...{ [event.target.name]: event.target.value } }));
  };
  //----
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}

        <div className='form-group'>
          <label htmlFor='title'>Post</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
        </div>
        <button className='btn btn-success' type='submit'>
          Create
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  createPost,
  showAlert,
};
const mapStateToProps = state => {
  return {
    alert: state.app.alert,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
