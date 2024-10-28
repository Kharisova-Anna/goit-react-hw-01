import userData from "./userData.json";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import friends from "../assets/friends.json";
import transactions from "../assets/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import "../index.css";
import "modern-normalize";


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;