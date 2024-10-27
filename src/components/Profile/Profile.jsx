import s from "./Profile.module.css"


const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <img className={s.img} src={image}  alt={`${name} avatar`} />
                <p className={s.name}>{name}</p>
                <p className={s.info}>@{tag}</p>
                <p className={s.info}>{location}</p>
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <span className={s.itemTitle}>Followers</span>
                    <span className={s.itemNumber}>{stats.followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.itemTitle}>Views</span>
                    <span className={s.itemNumber}>{stats.views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.itemTitle}> Likes</span>
                    <span className={s.itemNumber}>{stats.likes}</span>
                </li>
            </ul>
        </div>
  )
    
}

export default Profile;


