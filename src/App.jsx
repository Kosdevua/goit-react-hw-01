// import { Friendlist } from "./components/FriendList";
// import { Profiler } from "./components/Profile";
// import { TransactionHistory } from "./components/TransactionHistory";

import userData from "./components/data/userDate.json";

import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <>
      {/* <Friendlist /> */}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* <TransactionHistory /> */}
    </>
  );
};
export default App;
// export default Header;
