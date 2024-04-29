import s from "./FriendList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    // className={s.friendItem}
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={isOnline ? s.isOnline : s.isOffline}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
};
export default FriendListItem;
