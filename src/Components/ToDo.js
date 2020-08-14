import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo(props) {
  console.log(props);
  const { onBtnClick, text, id } = props;

  return (
    <>
      <li>
        <Link to={`/${id}`}>{text}</Link>
        <button onClick={onBtnClick}>DEL</button>
      </li>
    </>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
