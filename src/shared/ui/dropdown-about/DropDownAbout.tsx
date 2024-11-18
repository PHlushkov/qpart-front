import React from 'react';
import Dropdown from '../../../features/dropdown/Dropdown ';

const options = [
  {
    name: 'Відгуки',
    path: '/reviews',
  },
  {
    name: 'Фахівці',
    path: '/specialists',
  },
  {
    name: 'Обладнання',
    path: '/equipment',
  },
];

const DropDownAbout = () => {
  return <Dropdown options={options} title="Про підприємство" />;
};

export default DropDownAbout;
