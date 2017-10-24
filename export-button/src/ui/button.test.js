import React from 'react';
import {shallow} from 'enzyme';
import Button from './button';

test('Button shows example text', () => {
  const button = shallow(
    <Button />
  );

  expect(button.text()).toEqual('Example Button');

  button.find('button').simulate('click');

  expect(button.text()).toEqual('Button clicked');
});

test('Button changes text on click', () => {
    const button = shallow(
      <Button />
    );
  
    // expect(button.text()).toEqual('Example Button');
  
    button.find('button').simulate('click');
  
    expect(button.text()).toEqual('Button clicked');
  });