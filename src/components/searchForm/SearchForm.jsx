import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './searchForm.module.css';

class SearchForm extends Component {
  state = { value: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    e.preventDefault();
    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          onChange={this.handleChange}
          value={value}
          type="text"
          placeholder="Search images..."
          autoComplete="off"
        />
      </form>
    );
  }
}

export default SearchForm;
