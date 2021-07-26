import React from 'react';
import styles from './Features.module.scss';

const Features = (props) => {
  return ( 
    <div className={styles.features}>
      <h2>Feature Games</h2>
      <hr />
      <div className={styles.grid}>
        <div className={styles.carousel}>
          <div className={styles.carousel__item}></div>
          <div className={styles.carousel__item}></div>
        </div>
        <div className={styles.card}>
          <img src="https:\/\/www.freetogame.com\/g\/1\/thumbnail.jpg" alt="" className={styles.cardImg}/>
          <h4 className={styles.platform}>PC (Window)</h4>
          <h4 className={styles.genre}>Shooter</h4>
        </div>
      </div>
    </div> 
  );
}
 
export default Features;