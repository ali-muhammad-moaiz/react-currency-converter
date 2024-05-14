import { useState } from 'react';
import PropTypes from 'prop-types';
import '../InputBox.css'

const InputBox = ({labelTxt = ' ', options = [], readOnly = false, compareWith = '', defaultTxt, onSelectOption, setDefaultTxt, setAmount, reference}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const selectOption = (event, selectedOption) => {
      event.preventDefault();
      setIsDropdownOpen(false);

      onSelectOption(selectedOption);

      if(compareWith == selectedOption){
        setDefaultTxt('Currency');
        alert('Both options can\'t be the same!');
        return;
      }

      setDefaultTxt(selectedOption.toUpperCase());
    }
  
    const dropdownList = options.map((item, index) => (
      <li key={index}>
        <a href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={(event) => selectOption(event, item)}>
          {item}
        </a>
      </li>
    ));
  
      return (
        <div className="relative mb-4 flex items-center">
          <input
            ref={reference}
            readOnly={readOnly}
            type="text"
            className="border peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder={labelTxt}
            onChange={(event) => {
              setAmount(event.target.value)
            }}
          />
          <label
            htmlFor="exampleFormControlInput1"
            className="pointer-events-none absolute left-3 top-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
          >
            {labelTxt}
          </label>
          { <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 ml-2"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {defaultTxt}
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>}
  
          {isDropdownOpen && (
            <div id="dropdownHover" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full mt-1 right-0" onClick={() => setIsDropdownOpen(false)}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                {dropdownList}
              </ul>
            </div>
          )}
        </div>
      )
  }

  
  InputBox.propTypes = {
    labelTxt: PropTypes.string,
    options: PropTypes.array,
    readOnly: PropTypes.bool,
    compareWith: PropTypes.string,
    defaultTxt: PropTypes.string,
    // onSelectOption: PropTypes.func
  };

  export default InputBox;