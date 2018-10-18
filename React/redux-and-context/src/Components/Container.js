/**
 * This is an example of a container you may hook up to the global store. It can (and probably will) also have its own local state.
 * Global state goes in Redux and is passed down to Containers. Containers then take global state + their own state and pass it all down to child components via Context.
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ItemActionCreators } from "../Redux/Actions/items";
import ContainerContext from '../Context/ContainerContext'; 
import ListItems from "./listItems";
import AddItems from "./addItem";

 class Container extends React.Component {
  constructor(props) {
    super(props);
    
    const value = props.myItems;

    this.state = {
      myItems: value
    }
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.myItems !== this.props.myItems ) {
      this.setState({
        myItems: this.props.myItems
      })
    }
  }

  render() {
    return (
      <ContainerContext.Provider value={{...this.state}}>
        <AddItems />
        <ListItems />
      </ContainerContext.Provider>
    )
  }
 }

const mapStateToProps = state => {
  const { myItems } = state.items;
  
  return {
    myItems,
  }
}

const mapDispatchToProps = dispatch => {
  const { clear } = ItemActionCreators;

  return bindActionCreators(
    {
      clear
    }, 
    dispatch
  )
}

 export default connect(mapStateToProps, mapDispatchToProps)(Container);
