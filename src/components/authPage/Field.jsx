import React from "react";

const getChildId = (children) => {
  const child = React.Children.only(children);

  return child.props.id;
};

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div>
      {label && <label htmlFor={id}> {label} </label>}
      {children}

      <p className="text-red-400 my-2 text-xs"> {!!error && error.message} </p>
    </div>
  );
};

export default Field;
