import React, { Component } from "react";
import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
export class Filter extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        filter: PropTypes.string,
      };
      
    render() {
        return (
          <div>
            <label className={styles.lbl}>
              Find by name
              <input
                onChange={this.props.onChange}
                value={this.props.filter}
                name="filter"
              />
            </label>
          </div>
        );
      };
}