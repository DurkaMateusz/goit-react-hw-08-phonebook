import React, { Component } from "react";
import styles from '../ContactForm/ContactForm.module.css';

export class Filter extends Component {
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