import React from 'react';

import FruitBasket from './FruitBasket';
import FilteredFruitList from './FilteredFruitList';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
      items: []
    }
  }

  componentDidMount() {
    this.updateFilteredFruitList();
  }

  toggleListMode = () => this.setState({ currentFilter: !this.state.currentFilter });

  updateFilteredFruitList = () => {
    fetch(`/api/fruit?filter=${this.state.currentFilter}`)
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {
    return(
      <div>
        <FruitBasket />
        <FilteredFruitList list={this.state.items} />
      </div>
    )
  }
}
//const App = () => <FruitBasket />;

export default App;
