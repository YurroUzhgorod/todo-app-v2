import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={onChangeHandler}
        />
        <Button type="submit" onClick={onSubmitHandler} title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
