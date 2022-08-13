import React from 'react';

const ApprovalCard = props => {
  console.log(props);
  return (
    <div className='ui card'>
      <div className='content'>{props.children}</div>
      {/* <CommentDetail author='Sam' date='Today at 6:00PM' comment='Nice Post' /> */}
      {/* No need to import comment details inside approval card since it is already done in index.js */}
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
