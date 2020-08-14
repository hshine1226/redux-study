import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);
  }, [text]);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text} />
        <button>ADD</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
