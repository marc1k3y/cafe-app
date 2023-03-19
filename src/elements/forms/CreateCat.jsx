import { useState } from "react";


export const CreateCatForm = ({ setVisible, onSubmit }) => {
  const [newCat, setNewCat] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    onSubmit(newCat);
  };

  function closeModal() {
    setVisible(false);
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        value={newCat}
        onChange={(e) => setNewCat(e.target.value)} />
      <button type="submit">
        create
      </button>
      <button onClick={closeModal}>
        close
      </button>
    </form>
  );
}