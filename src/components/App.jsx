import user from 'data/user.json';
import statistic from 'data/data.json';
import friendsData from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Container } from 'components/Container/Container';
import { Statistic } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Container title="Task 1. Profile social network">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>

      <Container title="Task 2. Statistics">
        <Statistic title="Upload stats" stats={statistic} />
        <Statistic stats={statistic} />
      </Container>

      <Container title="Task 3. FriendList">
        <FriendList friends={friendsData} />
      </Container>

      <Container title="Task 4. TransactionHistory">
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};