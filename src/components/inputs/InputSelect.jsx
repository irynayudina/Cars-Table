import React from 'react'

const InputSelect = ({value, setValue, children}) => {
  return (
    <div className='select-inp'>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {children}
      </select>
    </div>
  );
}

export default InputSelect