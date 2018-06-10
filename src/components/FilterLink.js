import React, { Component } from 'react';
import { Button } from 'reactstrap';
import store from '../reduxers/Store';

export default class FilterLink extends Component {
  componentWillMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Button onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}
      disabled={props.filter === state.visibilityFilter}
      color={props.color}>
        { props.children }
      </Button>
    );
  }
}