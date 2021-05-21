import { useState } from "react";
import axios from "axios";

export default function EditFood({ closeModal, food }) {
  function editFood() {}
  const [disable, setDisable] = useState(false);

  async function editFood() {
    setDisable(true);
    const name = window.editFoodName.value;
    const price = window.editFoodPrice.value;
    const imageUrl = window.editFoodImageUrl.value;
    const active = window.editFoodActive.value;
    const description = window.editFoodDescription.value;
    const ingredients = window.editFoodIngredients.value;

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
                  id="editFoodName"
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
                  id="editFoodPrice"
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
                  id="editFoodActive"
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
                id="editFoodImageUrl"
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
                id="editFoodIngredients"
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
                id="editFoodDescription"
                type="text"
              ></textarea>
            </div>
          </div>
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
