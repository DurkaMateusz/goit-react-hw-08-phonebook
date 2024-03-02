import React, { Component } from "react";

export class Filter extends Component {
    render() {
        return (
          <div>
            <label>
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