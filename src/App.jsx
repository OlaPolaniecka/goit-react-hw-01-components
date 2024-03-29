import Profile from './components/Profile/Profile.jsx';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import data from './data/data.json';
import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList.jsx';
import transactions from './data/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory.jsx';

export default function App() {
  return (
    <div>
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <section>
        <FriendList friends={friends} />
      </section>

      <section>
        <TransactionHistory items={transactions} />;
      </section>
    </div>
  );
}
