import React from 'react';
import SymbolsList from './SymbolsList';

const BaseCurrency = ({setBaseCurrency, symbol}) => {

    const handleSelect = (e) => {
        //update state of base currency
        setBaseCurrency(e.target.value)
    }

    return (
        <div className="card m-2 shadow-lg rounded">
            <div className="card-header">
                <h4 className="text-center">Base Currency</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label for="base">Base Currency</label>
                    <SymbolsList onChangeHandler={handleSelect} name="base" symbols={symbol} />
                </div>
            </div>
        </div>
    )
}

export default BaseCurrency
