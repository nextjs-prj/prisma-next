import { useState, useRef } from "react";
import axios from "axios";

export default function EditFood({ closeModal, food }) {
  const formRef = useRef();

  const [disable, setDisable] = useState(false);

  async function editFood() {
    setDisable(true);
    const {
      editFoodName,
      editFoodPrice,
      editFoodImageUrl,
      editFoodActive,
      editFoodDescription,
      editFoodIngredients,
    } = formRef.current;

    const name = editFoodName.value;
    const price = editFoodPrice.value;
    const imageUrl = editFoodImageUrl.value;
    const active = editFoodActive.value;
    const description = editFoodDescription.value;
    const ingredients = editFoodIngredients.value;

    await axios.put("/api/editFood", {
      id: parseInt(food?.id),
      name,
      price,
      imageUrl,
      active,
      description,
      ingredients,
    });

    setDisable(false);
    window.location.reload();
  }

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={() => closeModal()}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit Food</h3>
          <span
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => closeModal()}
          >
            X
          </span>
        </div>
        <div className="modal-body content">
          <form ref={formRef}>
            <div style={{ display: "flex", margin: "2px 2px 0 0" }}>
              <div
                style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Name</label>
                </div>
                <div>
                  <input
                    defaultValue={food?.name}
                    name="editFoodName"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{ flex: "1 1 50%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Price($)</label>
                </div>
                <div>
                  <input
                    defaultValue={food?.price}
                    name="editFoodPrice"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{ flex: "1 1 50%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Active</label>
                </div>
                <div>
                  <input
                    defaultValue={food?.active}
                    name="editFoodActive"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="inputField">
              <div className="label">
                <label>ImageUrl</label>
              </div>
              <div>
                <input
                  defaultValue={food?.imageUrl}
                  name="editFoodImageUrl"
                  type="text"
                />
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Ingredients</label>
              </div>
              <div>
                <textarea
                  defaultValue={food?.ingredients}
                  style={{ width: "100%", height: "100px" }}
                  name="editFoodIngredients"
                  type="text"
                ></textarea>
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Description</label>
              </div>
              <div>
                <textarea
                  defaultValue={food?.description}
                  style={{ width: "100%", height: "100px" }}
                  name="editFoodDescription"
                  type="text"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={() => closeModal()}>Cancel</button>
          <button disabled={disable} className="btn" onClick={() => editFood()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
