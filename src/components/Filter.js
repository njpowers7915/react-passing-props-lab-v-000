import React, { Component } from 'react';

const filters = 'all'
const Filter = props =>
<select onChange={props.handleChange || filters}>
  <option value='all'>All</option>
  {props.filters.map(filter =>
    <option key={filter} value={filter}>{filter}</option>
  )}
</select>

export default Filter;

Filter.defaultProps = {
  filters: 'all',
  handleChange: null
}
