import { useEffect, useRef, useState } from 'react';
import InputBox from './InputBox.jsx';
import conversionRates from '../../public/data/conversionRates.js';

function InputForm(){
  const currencyOptions = ['usd', 'pkr', 'eur', 'gbp', 'cad', 'aud'];
  
  const [fromDefaultTxt, setFromDefaultTxt] = useState('Currency');
  const [toDefaultTxt, setToDefaultTxt] = useState('Currency');
  var [fromTxt, setFromTxt] = useState('from');
  var [toTxt, setToTxt] = useState('to');
  var [amount, setAmount] = useState(0);

  var inputRef = useRef(null);
  var outputRef = useRef(null);

  useEffect(() => {
    if(fromDefaultTxt == 'Currency' || toDefaultTxt == 'Currency')
      return;

    const conversionRate = conversionRates[toDefaultTxt.toLowerCase()][fromDefaultTxt.toLowerCase()];

    if (outputRef.current && amount > 0 && conversionRate > 0)
      outputRef.current.value = Number(amount) * Number(conversionRate);
    else
      outputRef.current.value = '';
    
  }, [fromDefaultTxt, toDefaultTxt, amount]);

  const swapCurrency = () => {
    setFromDefaultTxt(toDefaultTxt);
    setToDefaultTxt(fromDefaultTxt);
  }

  return (
  <form>

    <InputBox labelTxt='From' options={currencyOptions} sourceOption={fromTxt} compareWith={toTxt} defaultTxt={fromDefaultTxt} onSelectOption={setFromTxt} setDefaultTxt={setFromDefaultTxt} setAmount={setAmount} reference={inputRef}/>
      
    <div className="flex items-center flex justify-center pb-6">
      <button
        type="button"
        className="my-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        data-twe-ripple-init
        onClick={swapCurrency}
        data-twe-ripple-color="light">
        Swap currency
      </button>
    </div>

    <InputBox labelTxt='To' options={currencyOptions} sourceOption={toTxt} compareWith={fromTxt} defaultTxt={toDefaultTxt} onSelectOption={setToTxt} setDefaultTxt={setToDefaultTxt} reference={outputRef} readOnly/>

  </form>
  );
}

export default InputForm;