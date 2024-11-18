import React from 'react';
import Dropdown from '../../../features/dropdown/Dropdown ';

const options = [
  {
    name: 'Залізничні запчастини',
    path: '/railway-spare-parts',
  },
  {
    name: 'Запчастини для сільгосптехніки',
    path: '/agricultural-machinery-parts',
  },
];

const DropdownProducts = () => {
  return <Dropdown title="Продукція" options={options} />;
};

export default DropdownProducts;
