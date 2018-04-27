// const isNotEmpty = (state) => {
//   window.alert(JSON.stringify(state))
//   return true
// }

export default {
  initial: 'idle',
  states: {
    idle: {
      on: {
        CLEAR: {
          idle: {
            actions: ['clear']
          }
        },
        SET_NEW_ITEM_NAME: {
          loaded: {
            actions: ['setNewItemName']
          }
        }
      }
    },
    loaded: {
      on: {
        ADD_ITEM: {
          idle: {
            actions: ['addItem'],
            // cond: isNotEmpty
          }
        },
        CLEAR: {
          loaded: {
            actions: ['clear']
          }
        },
        SET_NEW_ITEM_NAME: {
          loaded: {
            actions: ['setNewItemName']
          }
        }
      }
    }
  }
}


