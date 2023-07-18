import cn from "classnames";
import styles from "../../style.module.css";
import img1 from "../../img/buy1.jpg";
import img2 from "../../img/buy2.jpg";
import img4 from "../../img/buy4.jpg";
import img5 from "../../img/buy5.jpg";
import img6 from "../../img/buy6.jpg";
import {
  AiFillPhone,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";

function Contacts({ contactsId }) {
  return (
    <div className={cn(styles.contacts)} id={contactsId}>
      <div className={cn(styles.contacts__pic)}>
        <div className={cn(styles.contacts__img)}>
          <img src={img1} alt="" />
        </div>
        <div className={cn(styles.contacts__img)}>
          <img src={img2} alt="" />
        </div>
        <div className={cn(styles.contacts__img)}>
          <img src={img4} alt="" />
        </div>
        <div className={cn(styles.contacts__img)}>
          <img src={img5} alt="" />
        </div>
        <div className={cn(styles.contacts__img)}>
          <img src={img6} alt="" />
        </div>
      </div>
      <div className={cn(styles.contacts__info_block)}>
        <div className={cn(styles.contacts__info_block_text)}>
          <div className={cn(styles.contacts__socials)}>
            <div className={cn(styles.contacts__phone)}>
              <a href="tel:+380671397930">
                <AiFillPhone />
                <span>0671397930</span>
              </a>
            </div>
            <div className={cn(styles.contacts__social)}>
              <a
                href="mailto:meetty@meetty.co.ua"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail className={cn(styles.contacts__social_pic)} />
              </a>

              <a
                href="https://www.facebook.com/meettychocolate/?fref=ts"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook className={cn(styles.contacts__social_pic)} />
              </a>

              <a
                href="https://www.instagram.com/meetty_chocolate/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className={cn(styles.contacts__social_pic)} />
              </a>

              <a
                href="https://twitter.com/MeettyChocolate"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle
                  className={cn(styles.contacts__social_pic)}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
