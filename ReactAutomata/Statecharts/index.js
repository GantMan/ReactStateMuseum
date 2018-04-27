const isEmpty = ({value}) => value === ''
const isNotEmpty = (state) => !isEmpty(state)

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
            actions: ['addItem']
          }
        },
        CLEAR: {
          loaded: {
            actions: ['clear']
          }
        },
        SET_NEW_ITEM_NAME: {
          loaded: {
            actions: ['setNewItemName'],
            cond: isNotEmpty
          },
          idle: {
            actions: ['setNewItemName'],
            cond: isEmpty
          }
        }
      }
    }
  }
}
