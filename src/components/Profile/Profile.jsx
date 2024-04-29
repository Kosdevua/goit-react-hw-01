import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.wrapperTop}>
        <img src={image} alt="User avatar" />
        <p className={s.userName}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.profileStat}>
        <li className={s.profilelist}>
          <span>Followers</span> <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
