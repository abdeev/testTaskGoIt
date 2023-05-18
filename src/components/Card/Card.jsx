import { useEffect, useState } from "react";
import s from "./Card.module.css";

const Card = ({ user, tweets, followers, avatar, isFollowing }) => {
  const [Following, setFollowing] = useState(isFollowing);
  const [followersCount, setFollowersCount] = useState(followers);

  const handleFollowClick = () => {
    setFollowing(!Following);
    setFollowersCount(Following ? followersCount - 1 : followersCount + 1);
  };
  useEffect(() => {}, [isFollowing, followersCount]);
  const followersCounter = followersCount
    .toString()
    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1,");

  return (
    <div className={s.card}>
      <img
        className={s.logoGoit}
        src="../../../public/Logo.png"
        alt="logo GoIt company"
      />
      <img
        className={s.bgImage}
        src="../../../public/bg.png"
        alt="background picture"
      />
      <div className={s.cardDividerLine}>
        <img className={s.userAvatar} src={avatar} alt={`${user} avatar`} />
      </div>
      <p className={s.descriptionCard}>{tweets} tweets</p>
      <p id="followers-count" className={s.descriptionCard}>
        {followersCounter} followers
      </p>

      <button
        id="follow-button"
        className={`${s.followButton} ${Following ? s.following : ""}`}
        onClick={handleFollowClick}
      >
        {Following ? "Following" : "Follow"}
      </button>
    </div>
  );
};
export default Card;
