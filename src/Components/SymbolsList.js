import React from 'react';
import _ from 'lodash';

const SymbolsList = ({symbols, name, onChangeHandler}) => {

  if (_.isEmpty(symbols)) {
    return <div>Loading...</div>;
  }  
  
  //map throught the symbols
  const renderedList = _.map(symbols, (symbolName, symbolKey) => {
    return (
      <option value={symbolKey} key={symbolKey}>{symbolName}</option>
    );
  });
  
  return (
    <select 
      id="target" className="form-control"
      onChange={onChangeHandler}
      name={name}
    >
      {name === "base" ? <option defaultValue>Select a base currency</option>
      :  <option defaultValue>Select a target currency</option>
      }  
      {renderedList}
    </select>
  );
};

export default SymbolsList;