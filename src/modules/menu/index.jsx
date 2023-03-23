import css from "./style.module.css";
import { useState } from "react";
import { categories, positions } from "./mock";
import { FormsModal } from "../../elements/modals/Forms";
import { CreateCatForm } from "../../elements/forms/CreateCat";
import { CreatePosForm } from "../../elements/forms/CreatePos";


export const MenuModule = () => {
  const [catModal, setCatModal] = useState(false);
  const [posModal, setPosModal] = useState(false);
  const [currentCatID, setCurrentCatID] = useState(0);

  // categories handlers
  function catHandler(id) {
    setCurrentCatID(id);
  };

  function newCatHandler() {
    setCatModal(true);
  };

  function submitNewCatHandler(newCat) {
    categories.push({ title: newCat, id: categories.length + 1 });
    setCatModal(false);
  };

  // positions handlers
  function newPosHandler() {
    setPosModal(true);
  };

  function submitNewPosHandler(newPos) {
    positions.push(newPos);
    setPosModal(false);
  };

  if (catModal) {
    return (
      <FormsModal>
        <CreateCatForm setVisible={setCatModal} onSubmit={submitNewCatHandler} />
      </FormsModal>
    );
  }
  if (posModal) {
    return (
      <FormsModal>
        <CreatePosForm setVisible={setPosModal} onSubmit={submitNewPosHandler} catID={currentCatID} />
      </FormsModal>
    );
  }
  return (
    <div className={css.wrapper}>
      <div className={css.categories}>
        {categories.map((cat) => (
          <div key={cat.id} className={css.category} onClick={() => catHandler(cat.id)}>
            <div className={css.catTitle}>{cat.title}</div>
            <div className={css.catAmount}>{cat.amount}</div>
          </div>
        ))}
        <div className={css.newCategory}>
          <button onClick={newCatHandler}>new</button>
        </div>
      </div>
      <div className={css.positions}>
        {positions.filter((pos) => pos.catID === currentCatID).map((pos) => (
          <div key={pos.id} className={css.position}>
            <div className={css.posTitle}>
              {pos.title}
            </div>
            <div className={css.options}>
              {pos.options.map((option) => (
                <div key={option.id} className={css.option}>
                  <div className={css.optionTitle}>
                    {option.value}
                  </div>
                  <div className={css.optionPrice}>
                    {option.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={css.newPos}>
          <button onClick={newPosHandler}>new</button>
        </div>
      </div>
    </div>
  );
}