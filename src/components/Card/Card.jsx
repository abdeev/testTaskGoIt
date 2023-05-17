import s from "./Card.module.css";

const Card = () => {
  return (
    <div className={s.card}>
      <logoGoIt className={s.logoGoit} />
      <img
        className={s.logoGoit}
        src="../../../public/Logo.png"
        alt="background picture"
      />
      <img
        className={s.bgImage}
        src="../../../public/bg.png"
        alt="background picture"
      />
      <div className={s.cardDividerLine}>
        <img
          className={s.userAvatar}
          src="../../../public/defaultAvatar.png"
          alt="user avatar"
        />
      </div>
      <p className={s.descriptionCard}>777 tweets</p>
      <p className={s.descriptionCard}>100500 followers</p>
      <button className={`${s.followButton}`} type="button">
        Follow
      </button>
    </div>
  );
};
export default Card;
