import Profile from './components/Profile/Profile.jsx';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import data from './data/data.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}
