import PropTypes from 'prop-types';
import { Component } from "react";
import css from './Searchbar.module.css'

const { searchbar, form, button, button_label, input } = css;

class Searchbar extends Component{
  state = {
    search: '',
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    })
  };

  render() {
    const { search } = this.state;
    const { handleSubmit, handleChange } = this;
    return (<header className={searchbar}>
      <form className={form} onSubmit={handleSubmit}>
        <button type="submit" className={button}>
          <span className={button_label}>Search</span>
        </button>
        <input
          onChange={handleChange}
          name='search'
          value={search}
          className={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>)
  };
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};