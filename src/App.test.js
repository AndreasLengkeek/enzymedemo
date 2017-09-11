import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import mocha from 'mocha';
import ToDoItem from './ToDoItem';
import ToDoList from './ToDoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

function mockItem(idNum) {
  // … create mock ToDo Item
  return {
    complete: true,
    title: 'test',
    id: idNum
  };
}

describe('<ToDoItem />', () => {
  it('renders the title', () => {
    const item = mockItem();
    const wrapper = shallow(<ToDoItem item={item} />);
  });

  it('renders a check mark when complete', () => {
    const item = mockItem({ complete: true });
    const wrapper = shallow(<ToDoItem item={item} />);
  });

  it('renders a bullet when not complete', () => {
    const item = mockItem({ complete: false });
    const wrapper = shallow(<ToDoItem item={item} />);
  });
});

describe('<ToDoList />', () => {
  it('renders the entire list of items', () => {
    const items = [mockItem(1), mockItem(2) /*, ... */];
    const wrapper = shallow(<ToDoList items={items} />);
  });
});
