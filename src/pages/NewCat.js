import React, { Component } from 'react'
import { FormControl, Button } from 'react-bootstrap'



class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }


  handleChange(event){
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  render() {
    return (
      <div>
        <label id="name">
          Name
          </label>
          <FormControl
            type="text"
            name="name"
            placeholder="Please enter your cat's name"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.name}
          />
          <label id="age">
            Age
            </label>
            <FormControl
              type="number"
              name="age"
              placeholder="Please enter your cat's name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age}
            />

          <label id="enjoys">
            Enjoys
            </label>
            <FormControl
              type="text"
              name="enjoys"
              placeholder="Please enter your cat's name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
            />

        <Button bsStyle="primary" id="submit">Create Cat Profile</Button>
      </div>
    );
  }
}

export default NewCat;
