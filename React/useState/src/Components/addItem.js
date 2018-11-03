import React, { useState } from 'react'

const useInputValue = initialValue => {
  const [value, setItem] = useState(initialValue);

  return {
    value,
    onChange: e => setItem(e.target.value),
    resetValue: () => setItem("")
  }
}

export default function addItems({addItem, clear}) {
  const { resetValue, ...item } = useInputValue("");

  return (
    <div style={styles.container}>
      <input
        placeholder='Packing Item'
        type='text'
        style={styles.inputStyle}
        {...item}
      />
      <button
        style={styles.buttonAdd}
        onClick={e => {
          e.preventDefault();
          addItem(item.value);
          resetValue;
        }}
      >
        ADD
      </button>
      <button
        style={styles.buttonClear}
        onClick={clear}
      >
        CLEAR
      </button>
    </div>
  )
}


const buttonStyle = {
  alignSelf: 'center',
  borderRadius: 4,
  margin: 5,
  height: 30
}
const styles = {
  inputStyle: {
    flex: 1,
    backgroundColor: '#ddf',
    paddingHorizontal: 4,
    height: 30,
    borderRadius: 4,
    borderStyle: 'solid',
    border: 'none'
  },
  buttonAdd: {
    ...buttonStyle,
    backgroundColor: '#cfc',
  },
  buttonClear: {
    ...buttonStyle,
    backgroundColor: '#faa'
  },
  container: {
    flexDirection: 'row',
    padding: 5
  }
}
