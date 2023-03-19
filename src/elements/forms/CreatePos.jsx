import { useEffect, useState } from "react";
import { categories } from "../../modules/menu/mock";

export const CreatePosForm = ({ onSubmit, setVisible }) => {
  const [newPos, setNewPos] = useState({
    id: null,
    catID: 0,
    title: "Coffee",
    options: [{ id: 213, value: "200ml", price: "300rub" }]
  });
  const [opt, setOpt] = useState({ id: Date.now(), value: "", price: "" });

  console.log(newPos);

  function submitHandler(e) {
    e.preventDefault();
    onSubmit(newPos);
  };

  function closeModal() {
    setVisible(false);
  };

  function selectCatHandler(id) {
    setNewPos((prev) => ({ ...prev, catID: parseInt(id) }));
  };

  function addOptionHandler(e) {
    e.preventDefault();
    setNewPos((prev) => ({ ...prev, options: [...prev.options, opt], id: Date.now() + 1 }));
  };

  useEffect(() => {
    setOpt((prev) => ({ ...prev, id: Date.now() }));
  }, [newPos]);

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      {newPos.title}
      {newPos.options.map((option) => (
        <div key={option.id}>
          <div>{option.value}</div>
          <div>{option.price}</div>
        </div>
      ))}
      <select onChange={(e) => selectCatHandler(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={newPos.title}
        onChange={(e) => setNewPos((prev) => ({ ...prev, title: e.target.value }))} />
      <input type="text" value={opt.value} onChange={(e) => setOpt((prev) => ({ ...prev, value: e.target.value }))} />
      <input type="text" value={opt.price} onChange={(e) => setOpt((prev) => ({ ...prev, price: e.target.value }))} />
      <button onClick={(e) => addOptionHandler(e)}>
        add option
      </button>
      <button type="submit">
        submit
      </button>
      <button onClick={closeModal}>
        close
      </button>
    </form>
  );
}