import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail(props) {
  console.log(props);

  return (
    <>
      <h1>{props.toDo?.id}</h1>
      <h3>{props.toDo?.text}</h3>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
