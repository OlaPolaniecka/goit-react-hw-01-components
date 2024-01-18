import PropTypes from 'prop-types';
import friendListItemStyles from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={friendListItemStyles.item}>
      <span
        className={
          isOnline
            ? friendListItemStyles.status__true
            : friendListItemStyles.status__false
        }
      ></span>
      <img
        className={friendListItemStyles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={friendListItemStyles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
