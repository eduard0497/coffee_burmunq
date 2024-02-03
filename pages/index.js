import styles from "../styles/Homepage.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_landing}>
        <div className={styles.homepage_landing_leftImage}>
          <img src="/homepage/landing.JPEG" alt="Picture of the author" />
        </div>
        <div className={styles.homepage_landing_rightText}>
          <h2>Explore Good Quality Coffee</h2>
          <p>
            Nestled in the heart of the bustling city, "Coffee Burmunq" stands
            as a haven for coffee enthusiasts seeking refuge from the daily
            hustle. The aroma of freshly ground beans wafts through the air,
            enticing patrons as they step into the warm embrace of this charming
            coffee shop. The ambiance is a perfect blend of rustic charm and
            modern comfort, with exposed brick walls adorned with local artwork
            and plush leather chairs inviting patrons to linger over their
            favorite brews. Baristas with a passion for their craft meticulously
            prepare each cup, whether it's a velvety latte or a bold espresso.
            The menu boasts a diverse selection of single-origin beans, ensuring
            a unique and delightful coffee experience for every visitor. Whether
            catching up with friends or finding a quiet corner to work, Coffee
            Burmunq provides a welcoming space where the rich aroma of coffee
            and the hum of conversation create a delightful symphony for the
            senses.
          </p>
        </div>
      </div>
      <div className={styles.landing_line_break}></div>
      <div className={styles.sublinks}>
        <div className={styles.sublinks_link}>
          <img src="/homepage/coffeeShop.jpg" alt="Picture of the author" />
          <h2>Atmosphere</h2>
        </div>
        <div className={styles.sublinks_link}>
          <img src="/homepage/menu.JPEG" alt="Picture of the author" />
          <h2>Menu</h2>
        </div>
        <div className={styles.sublinks_link}>
          <img src="/homepage/croissants.jpeg" alt="Picture of the author" />
          <h2>Pastry</h2>
        </div>
      </div>
      <div className={styles.landing_line_break}></div>
    </div>
  );
}
