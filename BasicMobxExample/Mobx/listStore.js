import {observable} from 'mobx'

class ObservableListStore {
  @observable allItems = ['nacho', 'burrito', 'hotdog']
  @observable newItemName = ''

  addItem = () => {
    this.allItems.push(this.newItemName)
    this.newItemName = ''
  }

  clear = () => {
    this.allItems = []
  }

  setNewItemName = (value) => {
    this.newItemName = value
  }
}

const observableListStore = new ObservableListStore()
export default observableListStore
