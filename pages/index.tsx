import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Mint a Bored Kitty NFT and Stake it to Earn BK22 Tokens</h1>
      <b className={styles.h1}>Free Limited Amount then will have to buy in MATIC</b><p>sorry for the bugs if any. type /mint at the end of the url to go to the mint page & /stake to go to the staking page. visit www.bored-kitties.club to purchase an Exclusive NFt or get a limited amount of free  </p>
      <div
        className={styles.nftBoxGrid}
        role="button"
        onClick={() => router.push(`/mint`)}
      >
        {/* Mint a new NFT */}
        <div className={styles.optionSelectBox}>
          <img src={`/icons/drop.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Mint a Bored Kitty</h2>
          <p className={styles.selectBoxDescription}>
             Mint a <b>FREE</b> Bored Kitty Unti They Run out. Once ran out of Free Mint's You'll have to pay with MATIC'S or BK22 Tokens
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          <img src={`/icons/token.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your Bored Kitty</h2>
          <p className={styles.selectBoxDescription}>
            We Will watch Your Kitties keep them safe and sound. They'll be with other kitties {" "}, while they are safe and sound you'll earn <b>BK22 Tokens</b> while you're eating pizza or playing games.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
