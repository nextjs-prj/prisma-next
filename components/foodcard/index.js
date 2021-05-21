import styles from "./FoodCard.module.css";
import Link from "next/link";

export default function FoodCard({ food }) {
  return (
    <Link href={`/foodview/${food.id}`}>
      <div className={styles.foodCard}>
        <div
          className={styles.foodCardImg}
          style={{ backgroundImage: `url(${food.imageUrl})` }}
        ></div>
        <div className={styles.foodCardFooter}>
          <div className={styles.foodCardName}>
            <h3>{food.name}</h3>
          </div>
          <div className={styles.foodCardPrice}>
            <span>Price($)</span>
            <span>{food.price}</span>
          </div>
          <div className={styles.foodCardActive}>
            <span>Active:</span>
            <span>{food.active}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
