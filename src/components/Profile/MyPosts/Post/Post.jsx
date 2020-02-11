import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://w-dog.ru/wallpapers/2/4/471403492348193/edvard-norton-lico-akter.jpg' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>

    </div>
  )
}

export default Post;