import {h, Component} from 'preact';
import {connect} from 'react-redux';
import {Button, Form, Message} from 'semantic-ui-react';

import * as actions from '../../actions/recipes';

class AddRecipe extends Component {
  state = {
    name: '',
    ingredients: '',
    description: '',
  };

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value.trim(),
    });
  };

  handleImageChange = e => {
    // user FileReader to read data
    const reader = new FileReader();
    // get the first file
    const file = e.target.files[0];

    // add a handler to the onload event on the reader
    // We will need to provide a file for the reader to read. Once
    // it reads the file, we can run setState with the result.
    // WTF is this API?
    reader.onload = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    // now we read the file
    reader.readAsDataURL(file);
  };

  handleSubmit = e => {
    const {addRecipe} = this.props;
    const {name, imagePreviewUrl, ingredients, description} = this.state;
    e.preventDefault();

    addRecipe({
      description,
      ingredients: ingredients.split('\n'),
      name,
      imageUrl: imagePreviewUrl,
    });
  };

  render() {
    const {name, ingredients, description} = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Recipe Name</label>
          <input name="name" defaultValue={name} onChange={this.handleChange} />
        </Form.Field>

        <Form.Field>
          <label>Recipe Image</label>
          <input
            name="image"
            defaultValue={{}}
            onChange={this.handleImageChange}
            type="file"
          />
        </Form.Field>

        <Form.Field>
          <label>Recipe Ingredients - one per line</label>
          <Form.TextArea
            name="ingredients"
            defaultValue={ingredients}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Recipe Description</label>
          <Form.TextArea
            name="description"
            defaultValue={description}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  addRecipe: actions.addRecipe,
};

export default connect(null, mapDispatchToProps)(AddRecipe);
