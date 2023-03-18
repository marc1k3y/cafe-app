import css from "./style.module.css";
import { useState } from "react";
import { categories, positions } from "./mock";
import { FormsModal } from "../../elements/modals/Forms";
import { CreateCatForm } from "../../elements/forms/CreateCat";


export const MenuModule = () => {
  const [modal, setModal] = useState(false);
  const [currentCatID, setCurrentCatID] = useState(0);

  function catHandler(id) {
    setCurrentCatID(id);
  };

  function newCatHandler() {
    setModal(true);
  };

  function submitNewCat(newCat) {
    categories.push({ title: newCat, id: categories.length + 1 });
    setModal(false);
  };

  if (modal) {
    return (
      <FormsModal>
        <CreateCatForm onSubmit={submitNewCat} />
      </FormsModal>
    );
  } else {
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
                      {option.title}
                    </div>
                    <div className={css.optionPrice}>
                      {option.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}