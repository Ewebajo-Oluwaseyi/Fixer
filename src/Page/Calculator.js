import React, {useState, useEffect} from 'react';
import axios from '../axios/axios';
import TargetCurrency from '../Components/TargetCurrency';
import BaseCurrency from '../Components/BaseCurrency';
import Amount from '../Components/Amount';

function Calculator() {
      //set initial state and updated function to be passed as props base-currency and target-currency component
      const [baseCurrency, setBaseCurrency] = useState("");
      const [targetCurrency, setTargetCurency] = useState("");

      const [symbol, setSymbol] = useState("");

    useEffect(() => {
        //fetch list of symbol from endpoint
        const fetchData = async() => {
            try {
                const res = await axios.get('/symbols');
                setSymbol(res.data.symbols)
            } catch(err) {
                
            }
        }

        fetchData();
        //eslint-disable-next-line
    }, []);

  return (
    <React.Fragment>
      <div className='calculator'>
        <div className="container mt-4 mt-lg-0">
            <div className="row">
                <div className="col-md-6">
                    <BaseCurrency setBaseCurrency={setBaseCurrency} symbol={symbol}/>
                </div>
                <div className="col-md-6">
                    <TargetCurrency setTargetCurency={setTargetCurency} symbol={symbol}/>
                </div>
                <div className="col-md-6 mx-auto mb-4 mb-lg-0">
                    <Amount baseCurrency={baseCurrency} targetCurrency={targetCurrency}/>
             </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Calculator;
