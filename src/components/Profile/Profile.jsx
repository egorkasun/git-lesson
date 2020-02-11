import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/get-pdb/1822850/69150388-c75a-4933-8c74-b8ea29d54a1c/s1200' />
      </div>
      <div>
        ava + description
    </div>
      <MyPosts />
    </div>
  )
};

export default Profile;