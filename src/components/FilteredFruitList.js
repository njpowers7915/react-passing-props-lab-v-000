import React, { Component } from 'react';

const FilteredFruitList = props =>
  <ul>
    {props.list.map((item) => <li key={item}>{item}</li>)}
  </ul>
export default FilteredFruitList;
