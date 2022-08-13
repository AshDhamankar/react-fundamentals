//1) i want react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// in v18 the above react dom import is changed

//2) get a reference of root element

const element = document.getElementById('root');

//3) tell react-dom to take control of that element
const root = ReactDOM.createRoot(element);

//4) create a new component
// const header = <h1>This is my h1 element</h1>;

const App = () => {
  const name = 'Joe';
  const age = 30;
  const numbers = [1, 2, 3];
  const isValid = true;
  const person = {
    fullName: 'Jos Butler',
    hobby: 'cricket',
  };

  return (
    <div>
      <h3>my name is {name}</h3>
      <p>age is {age}</p>
      <p>{numbers}</p>
      <p>{isValid}</p>
      <p>{person.fullName}</p>
    </div>
  );
};

const Input = () => {
  // attributes : value
  // props --> vvvv important --> Properties

  const inputType = 'number';
  const minValue = 5;
  const styles = {
    border: '1px solid red',
  };
  /* <input type={inputType} min={minValue} /> */

  return <textarea style={styles} readOnly={false} className='text' minLength={3} />;
};

// App()

//5) show the component on the screen
root.render(<Input />);

/* <Component /> */
// <input />
// <img />

// all the props in react should written in camelCase
// if you are referring any number values always use {}
// boolean true or false --> if true dont need to explicitly write it and if it is false write it down.
// class should be written as className
// style should be written in objects
