import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import ToDoStatus from './ToDoStatus';

test('renders content', () => {
  const todo = {
    id: 12,
    name: 'To-do content is here',
  };

  const component = render(<ToDoStatus todo={todo} />);

  expect(component.container).toHaveTextContent('To-do content is here');
});

test('clicking the btnCompletion-button calls event handler once', async () => {
  const todo = {
    id: 12,
    name: 'To-do content is here',
  };

  const mockHandler = jest.fn();

  const component = render(
    <ToDoStatus todo={todo} handleCompletion={mockHandler} />
  );

  const button = component.getByText('Incomplete');
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});

test('clicking the btnDelete-button calls event handler once', async () => {
  const todo = {
    id: 12,
    name: 'To-do content is here',
  };

  const mockHandler = jest.fn();

  const component = render(
    <ToDoStatus todo={todo} handleDelete={mockHandler} />
  );

  const button = component.container.querySelector('.btnDelete');
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});

test('Delete button targets right todo', () => {
  const todo = {
    id: 12,
    name: 'To-do content is here',
  };

  const mockHandler = jest.fn();

  const component = render(
    <ToDoStatus todo={todo} handleDelete={mockHandler} />
  );

  const button = component.container.querySelector('.btnDelete');

  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
  expect(mockHandler.mock.calls[0][0]).toBe(12);
});

test('at start the btnCompletion color is Linen #FAF0E6', () => {
  const todo = {
    id: 12,
    name: 'To-do content is here',
    complete: false,
  };

  const component = render(<ToDoStatus todo={todo} />);

  const td = component.container.querySelector('.todoName');

  expect(td).toHaveStyle('backgroundColor: #FAF0E6');
});

test('after todo is completed, todoName and btnCompletion colors are lightgreen', async () => {
  const mockHandler = jest.fn();

  const todo = {
    id: 12,
    name: 'To-do content is here',
    complete: true,
  };

  const component = render(
    <ToDoStatus todo={todo} handleCompletion={mockHandler}>
      <td className='testDiv' />
    </ToDoStatus>
  );

  const button = component.container.querySelector('.btnCompletion');
  fireEvent.click(button);

  component.debug();

  const todoName = component.container.querySelector('.todoName');

  const btnCompletion = component.container.querySelector('.btnCompletion');

  expect(todoName).toHaveStyle('backgroundColor: lightgreen');
  expect(btnCompletion).toHaveStyle('backgroundColor: lightgreen');
});
