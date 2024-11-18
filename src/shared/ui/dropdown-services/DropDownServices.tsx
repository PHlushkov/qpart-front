import React from 'react';
import Dropdown from '../../../features/dropdown/Dropdown ';
const options = [
  {
    name: 'Плазмова різка',
    path: '/plasma-cutting',
  },
  {
    name: 'Ковальсько-пресове виробництво',
    path: '/forging-press-production',
  },
  {
    name: 'Механічна обробка',
    path: '/mechanical-processing',
  },
  {
    name: 'Термічна обробка',
    path: '/heat-treatment',
  },
  {
    name: 'Фрезерні роботи',
    path: '/milling-work',
  },
  {
    name: 'Токарні роботи',
    path: '/turning-works',
  },
  {
    name: 'Заготівельне виробництво',
    path: '/procurement-production',
  },
  {
    name: 'Розробка креслень і технічної документації',
    path: '/drawing-documentation',
  },
  {
    name: 'Виготовлення виробів за індивідуальними замовленнями',
    path: '/custom-order',
  },
];

const DropDownServices = () => {
  return <Dropdown title="Продукти" options={options} />;
};

export default DropDownServices;
