import { useState, useRef } from "react";
import classes from "./Form.module.css"; //CSS modules

export default () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const nameRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsEmpty(!nameRef.current.value);
  }
  const styles = {
    fontSize: "40px",
    width: "100%",
    borderColor: "#00aa00",
    borderWidth: "8px"
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <p>
        <input 
        ref={nameRef}
        // style={styles}
        style={isEmpty? {...styles, borderColor: "red"} : styles}
        // className={`input ${isEmpty? "error": ""}`}
        className={classes.input}
        type="text" 
        placeholder="Введите имя" />
      </p>
      <p>
        <button type="submit">Добавить</button>
      </p>
    </form>
  );
};
