import { useState } from "react";

interface State {
  fname: string;
  lname: string;
  id?: number;
}

const Home: React.FC = () => {
  const [createId, setCreateId] = useState<number | null>(null); 
  const [todos, setTodos] = useState<State[]>([]);
  const [input, setInput] = useState<State>({ 
    fname: "",
    lname: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const addTodos = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (createId) {
      setTodos(
        todos.map((item) =>
          item.id === createId ? { ...item, fname: input.fname, lname: input.lname } : item
        )
      );
      setCreateId(null); 
    } else {
      const newId = { ...input, id: Date.now() };
      setTodos([...todos, newId]);
    }
    
    setInput({ fname: "", lname: "" }); 
  };

  const deleteHandle = (id: number | undefined) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editHandle = (item: State) => {
    setInput({ fname: item.fname, lname: item.lname }); 
    setCreateId(item.id || null); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your First Name"
        onChange={handleInput}
        value={input.fname}
        name="fname"
      />
      <input
        type="text"
        placeholder="Enter your Last Name"
        onChange={handleInput}
        value={input.lname}
        name="lname"
      />

      <button onClick={addTodos}>{createId ? "Update" : "Add"}</button>

      {todos.map((item) => {
        return (
          <div key={item.id} style={{ display: "flex", gap: "10px" }}>
            <p>{item.fname}</p>
            <p>{item.lname}</p>
            <button onClick={() => deleteHandle(item.id)}>Delete</button>
            <button onClick={() => editHandle(item)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
