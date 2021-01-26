import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  let container;
  let customer;

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };
    container = document.createElement('div');
    ReactDOM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' };
    container = document.createElement('div');
    ReactDOM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('Jordan');
  });
});