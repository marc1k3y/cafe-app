import { useState } from "react";


export const CreateCatForm = ({ onSubmit }) => {
  const [form, setForm] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    onSubmit(form);
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input type="text" value={form} onChange={(e) => setForm(e.target.value)} />
      <button>create</button>
    </form>
  );
}