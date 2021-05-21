import styles from "./FoodView.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import EditFood from "../../components/editfood";
import axios from "axios";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

export default function FoodView(props) {
  const [showEditFoodModal, setShowEditFoodModal] = useState(false);
  const router = useRouter();
  const { food } = props;

  async function deleteFood() {
    if (window.confirm("Do you want to delete this food?")) {
      // ...
      await axios.post("/api/deleteFood", { id: parseInt(food?.id) });
      router.push("/foodslist");
    }
  }
  return (
    <div className={styles.foodviewContainer}>
      <div className={styles.foodview}>
        <div
          className={styles.foodviewImage}
          style={{ backgroundImage: `url(${food?.imageUrl})` }}
        ></div>

        <div className={styles.foodviewDetails}>
          <div className={styles.foodviewName}>
            <h1>{food?.name}</h1>
          </div>
          <div style={{ padding: "5px 0" }}>
            <span>
              <button
                onClick={() => setShowEditFoodModal((pV) => !pV)}
                style={{ marginLeft: "0" }}
                className="btn"
              >
                Edit
              </button>
              <button onClick={deleteFood} className="btn btn-danger">
                Delete
              </button>
            </span>
          </div>
          <div style={{ padding: "5px 0" }}>
            <span> Price($): {food?.price}</span>
          </div>
          <div className={styles.foodviewDescIngreCnt}>
            <h2>Ingredients</h2>
            <div className={styles.foodSynopsis}>{food?.ingredients}</div>
          </div>
          <div className={styles.foodviewDescIngreCnt}>
            <h2>Description</h2>
            <div className={styles.foodSynopsis}>{food?.description}</div>
          </div>
        </div>
      </div>
      {showEditFoodModal ? (
        <EditFood food={food} closeModal={() => setShowEditFoodModal(false)} />
      ) : null}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const food = await prisma.food.findUnique({ where: { id: parseInt(id) } });
  return {
    props: {
      food,
    },
  };
}
