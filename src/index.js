import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

// DRY -dont repeat yourself
// PROPS in react

const App = () => {
  return (
    <div className='ui container comments'>
      {/* re-using comment detail component multiple times */}
      {/* passing dynamic data for comment detail component via PROPS */}
      <CommentDetail author='Sam' date='Today at 6:00PM' comment='Nice Post' />
      <CommentDetail author='Alex' date='Today at 5:00PM' comment='Good One!' />
      <CommentDetail author='Jane' date='Today at 3:30PM' comment='Can be much better.' />

      {/* Nesting of components */}
      {/* comment detail component is nested inside the approval card component which later will be displyed inside approval card component via children props which is by default given by react */}
      <ApprovalCard>
        <CommentDetail author='Sam' date='Today at 6:00PM' comment='Nice Post' />
      </ApprovalCard>

      {/* same approval component can be used for rendering other ui also */}
      <ApprovalCard>Are you sure?</ApprovalCard>

      <ApprovalCard />
    </div>
  );
};

root.render(<App />);
