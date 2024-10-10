import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../redux/slices/CrudSlice";
import {Box, Button, Container, TextField, Typography, Divider} from "@mui/material"

interface Todo {
  id: number;
  fname: string;
  lname: string;
  email: string;
  password: string;
}

const About = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.crud.data);

  const [edit, setEdit] = useState<Todo | null>(null);
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (edit) {
      dispatch(updateTodo({ id: edit.id, ...input }));
      setEdit(null);
    } else {
      const newTodo: Todo = {
        id: todos.length + 1,
        ...input,
      };
      dispatch(addTodo(newTodo));
    }
    setInput({ fname: "", lname: "", email: "", password: "" }); 
  };

  
  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };


  const handleEdit = (item: Todo) => {
    setEdit(item);
    setInput({ fname: item.fname, lname: item.lname, email: item.email, password: item.password });
  };

  return (
    <>
    <Container maxWidth="sm" sx={{border:"2px solid green", paddingY:"10px"}}>
      <form onSubmit={handleAdd}>
        <Typography sx={{width:"100%", textAlign:"center"}}>Input Form</Typography>
        <TextField
          type="text"
          label="Enter First Name"
          name="fname"
          placeholder="Enter First Name"
          value={input.fname}
          onChange={handleInputChange}
          sx={{width:"100%",paddingY:"5px"}}
          size="small"
        />
        <TextField
          type="text"
          label="Enter Last Name"
          name="lname"
          placeholder="Enter Last Name"
          value={input.lname}
          onChange={handleInputChange}
          sx={{width:"100%",paddingY:"5px"}}
          size="small"
        />
         <TextField
          type="email"
          label="Enter Email Name"
          name="email"
          placeholder="Enter Email Name"
          value={input.email}
          onChange={handleInputChange}
          sx={{width:"100%", paddingY:"5px"}}
          size="small"
        />
         <TextField
          type="password"
          label="Enter paaword"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={handleInputChange}
          sx={{width:"100%", paddingY:"5px",}}
          size="small"
        />
        <Box sx={{display:'flex', justifyContent:'center',marginTop:"10px"}}>
        <Button variant="contained" color="info" type="submit" sx={{width:"120px"}}>{edit ? "Update" : "Add"}</Button>

        </Box>
      </form>

      
    </Container>

<Container maxWidth="sm">
{todos.map((todo: Todo, index: number) => (
  <Box key={index} sx={{ display: "flex" ,justifyContent:"space-between", paddingY:"10px" }}>
    <Typography>{todo.fname}</Typography>
    <Divider orientation="vertical"  flexItem />
    <Typography>{todo.lname}</Typography>
    <Divider orientation="vertical"  flexItem />
    <Typography>{todo.email}</Typography>
    <Divider orientation="vertical"  flexItem />
    <Typography>{todo.password}</Typography>
    <Divider orientation="vertical"  flexItem />
    <Button variant="contained" color="error" onClick={() => handleDelete(todo.id)}>Delete</Button>
    <Divider orientation="vertical"  flexItem />
    <Button variant="contained" color="info" onClick={() => handleEdit(todo)}>Edit</Button>
    
  </Box>
))}
</Container>
</>
  );
};

export default About;
