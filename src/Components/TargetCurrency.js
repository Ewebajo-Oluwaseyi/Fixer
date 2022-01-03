import React from 'react';
import SymbolsList from './SymbolsList';

const TargetCurrency  = ({setTargetCurency, symbol}) => {

    const handleSelect = (e) => {
         //update state of target currency
        setTargetCurency(e.target.value)
    }

    return (
        <div className="card m-2 shadow-lg rounded">
            <div className="card-header">
                <h4 className="text-center">Target Currency</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label for="target">Target Currency</label>
                    <SymbolsList onChangeHandler={handleSelect} name="target" symbols={symbol} />
                </div>
            </div>
        </div>
    )
}

export default TargetCurrency
