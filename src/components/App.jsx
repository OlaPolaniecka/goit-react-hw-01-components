import Profile from './Profile/Profile.jsx';
import user from './data/user.json';

export const App = () => {
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    statsFollowers={user.stats.followers}
    statsViews={user.stats.views}
    statsLikes={user.stats.likes}
  />;
};
