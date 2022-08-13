import React from 'react';
import { faker } from '@faker-js/faker';

const CommentDetail = props => {
  console.log(props);
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={faker.image.image()} alt='avatar' />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.date}</span>
        </div>
        <div className='text'>{props.comment}</div>
      </div>
      <p>{props.children}</p>
    </div>
  );
};

export default CommentDetail;
