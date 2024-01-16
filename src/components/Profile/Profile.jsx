import PropTypes from 'prop-types';
import profileStyles from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  statsFollowers,
  statsViews,
  statsLikes,
}) => {
  return (
    <div className={profileStyles.profile}>
      <div className={profileStyles.description}>
        <img src={avatar} alt="User avatar" className={profileStyles.avatar} />
        <p className={profileStyles.name}>{username}</p>
        <p className={profileStyles.tag}>@{tag}</p>
        <p className={profileStyles.location}>{location}</p>
      </div>

      <ul className={profileStyles.stats}>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Followers</span>
          <span className={profileStyles.quantity}>{statsFollowers}</span>
        </li>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Views</span>
          <span className={profileStyles.quantity}>{statsViews}</span>
        </li>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Likes</span>
          <span className={profileStyles.quantity}>{statsLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
