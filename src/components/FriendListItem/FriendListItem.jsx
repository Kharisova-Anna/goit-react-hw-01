import s from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ image, name, status }) => {
    return <div className={s.card}>
        <img src={image} alt="Avatar" width="100" className={s.img} />
        <p className={s.name}>{name}</p>
        <p className={clsx(s.friendStatus, status ? s.online : s.offline)}>
            {status ? "Online" : "Offline"}
        </p>
    </div>
}

export default FriendListItem;