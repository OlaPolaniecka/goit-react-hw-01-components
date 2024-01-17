import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import friendListItemStyles from './FriendListItem/FriendListItem.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={friendListItemStyles.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
