// import clsx from "clsx";

import s from "./FriendList.module.css";
console.log(s);

import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.container}>
      {friends.map((friend) => {
        return (
          <li className={s.friendItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
