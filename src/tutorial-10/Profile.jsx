import React from "react";

const Profile = ({ userInfo }) => {
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img className="image" src={userInfo.avatar_url} alt="avatar" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {userInfo.name}
            <span>@{userInfo.login}</span>
          </h1>
          <p className="app-user_about">{userInfo.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{userInfo.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчики
          <span>{userInfo.followers}</span>
        </li>
        <li className="app-user_stats-item">
          Подписан
          <span>{userInfo.following}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{userInfo.location}</li>
        <li className="app-user_location-item">
          <a href="http://archakov.im">{userInfo.blog}</a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
