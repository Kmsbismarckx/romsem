import React, { useState } from 'react';
import './select.css';

function Select({ className, options, filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(filter);
  const onOptionClicked = (option) => () => {
    setFilter({ ...filter, sort: option.value });
    setSelectedOption(option.name);
    setIsOpen(false);
  };
  const isOpenHandler = () => setIsOpen(!isOpen);
  return (
    <div
      className={`${className}-select select ${
        isOpen ? `${className}-select_opened select_opened` : ''
      }`}
      onClick={isOpenHandler}
    >
      <div
        className={`${className}-select__header select__header ${
          isOpen ? `${className}-select__header_opened select__header_opened` : ''
        }`}
      >
        {selectedOption || 'По умолчанию'}
      </div>
      {isOpen && (
        <div className={`${className}-select__list select__list`}>
          {options.map((option) => (
            <div
              className={`${className}-option option`}
              key={option.value}
              onClick={onOptionClicked(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;

// import React, { useState } from 'react';
// import './select.css';
//
// function Select({ className, value, options, onChange }) {
//   const [classRotate, setClassRotate] = useState('');
//   const rotateHandler = () => {
//     if (classRotate) {
//       setClassRotate('');
//     } else {
//       setClassRotate('select_rotate');
//     }
//   };
//
//   return (
//     <div className={`select ${classRotate}`}>
//       <select
//         className="select__text"
//         value={value}
//         onChange={(event) => {
//           onChange(event.target.value);
//         }}
//         onClick={rotateHandler}
//         onBlur={() => setClassRotate('')}
//       >
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
//
// export default Select;
