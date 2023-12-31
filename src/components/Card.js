import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ cardInfo }) {
  console.log(cardInfo + 'd')
  const { id } = cardInfo;
  return (
    <div className={styles.cardContainer}>
      <Link to={`http://d3u6h8k7brrkx6.cloudfront.net/detail/${id}`}>
        {/* {imageUrl && <img src={cardInfo.image} alt="Uploaded" />} */}
        <img className={styles.itemImg} src={`${cardInfo.image}`}  alt="itemImage" />
        <div>
          <div className={styles.title}>{cardInfo.title}</div>
          <div className={styles.info}>
            <span>{cardInfo.name}</span>
            <span>{cardInfo.price}원</span>
          </div>
        </div>
      </Link>
    </div>
  );
}