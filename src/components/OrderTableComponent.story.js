import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent.js';

storiesOf('OrderTableComponent', module).add('Order path', () =>
  <OrderTableComponent
    itemsOrdered={[
      {
        id: 101,
        name: 'Some Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
        id: 102,
        name: 'Some Item B',
        price: 8.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
        id: 103,
        name: 'Some Item C',
        price: 7.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
        id: 104,
        name: 'Some Item D',
        price: 6.99,
        imagePath: '//via.placeholder.com/300x200'
      }
    ]}
  />
);
