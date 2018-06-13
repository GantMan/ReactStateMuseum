import * as remx from 'remx';
import * as _ from 'lodash';

export class Store {
  constructor() {
    const state = remx.state({
      myItems: ['nacho', 'burrito', 'hotdog']
    });
    
    const setters = remx.setters({
      setNewItemText(txt) {
        state.newItemText = txt;
      },
    
      addItem() {
        state.myItems = state.myItems.concat(getters.getNewItemText());
        state.newItemText = '';
      },
    
      clear() {
        state.myItems = [];
      }
    });
    
    const getters = remx.getters({
      getItems() {
        return state.myItems;
      },
    
      getNewItemText() {
        return state.newItemText || '';
      }
    });

    _.merge(this, setters, getters);
  }
}
