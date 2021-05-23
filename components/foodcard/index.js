import styles from "./FoodCard.module.css";
import Link from "next/link";

export default function FoodCard({ food }) {
  return (
    <Link href={`/food/${food.id}`}>
      <div className={styles.foodCard}>
        <div
          alt={`Food Image of: ${food?.name}`}
          aria-label={`Food Image of: ${food?.name}`}
          className={styles.foodCardImg}
          style={{ backgroundImage: `url(${food.imageUrl})` }}
        ></div>
        <div className={styles.foodCardFooter}>
          <div className={styles.foodCardName}>
            <h3>{food.name}</h3>
          </div>
          <div className={styles.foodCardPrice}>
            <span>Price(💵)</span>
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
