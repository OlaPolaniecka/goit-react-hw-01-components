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
        <img src={avatar} alt="User avatar" className="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{statsFollowers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{statsViews}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{statsLikes}</span>
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
  statsFollower: PropTypes.number,
  statsViews: PropTypes.number,
  statsLikes: PropTypes.number,
};

export default Profile;
