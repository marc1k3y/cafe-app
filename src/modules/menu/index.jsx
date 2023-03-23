import css from "./style.module.css";
import { useEffect, useState } from "react";
import { FormsModal } from "../../elements/modals/Forms";
import { CreateCatForm } from "../../elements/forms/CreateCat";
import { CreatePosForm } from "../../elements/forms/CreatePos";
import { createCategoryService, createPositionService, getCategoriesService, getPositionsService } from "./api";


export const MenuModule = () => {
  const [catModal, setCatModal] = useState(false);
  const [posModal, setPosModal] = useState(false);
  const [currentCatID, setCurrentCatID] = useState(null);
  const [categories, setCategories] = useState(null);
  const [positions, setPositions] = useState(null);

  // categories handlers
  function selectCatHandler(id) {
    setCurrentCatID(id);
  };

  function openCreateCatModalHandler() {
    setCatModal(true);
  };

  function submitNewCatHandler(title) {
    createCategoryService({ title })
      .then(({ createdCat }) => {
        setCatModal(false);
        setCategories((prev) => ([...prev, createdCat]));
      });
  };

  useEffect(() => {
    getCategoriesService()
      .then(({ categories }) => {
        setCategories(categories);
        if (categories.length) {
          setCurrentCatID(categories[0]["id"]);
        }
      })
    //catch
  }, [])

  // positions handlers
  function openCreatePosHandler() {
    setPosModal(true);
  };

  function submitNewPosHandler(newPos) {
    createPositionService(newPos)
      .then(({ createdPos }) => {
        setPosModal(false);
        setPositions((prev) => ([...prev, createdPos]));
      })
  };

  useEffect(() => {
    getPositionsService()
      .then(({ positions }) => setPositions(positions));
    //catch
  }, [])

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
        <CreatePosForm setVisible={setPosModal} onSubmit={submitNewPosHandler} catID={currentCatID} categories={categories} />
      </FormsModal>
    );
  }
  return (
    <div className={css.wrapper}>
      <div className={css.categories}>
        {categories && categories.map((cat) => (
          <div key={cat.id} className={css.category} onClick={() => selectCatHandler(cat.id)}>
            <div className={css.catTitle}>{cat.title}</div>
            <div className={css.catAmount}>{cat.amount}</div>
          </div>
        ))}
        <div className={css.newCategory}>
          <button onClick={openCreateCatModalHandler}>new</button>
        </div>
      </div>
      <div className={css.positions}>
        {positions && positions.filter((pos) => pos.catID === currentCatID).map((pos) => (
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
          {currentCatID &&
            <button onClick={openCreatePosHandler}>
              new
            </button>}
        </div>
      </div>
    </div>
  );
}