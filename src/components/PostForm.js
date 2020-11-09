import React, { Component } from "react";

export default class PostForm extends Component {
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
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);
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
