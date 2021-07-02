import React from "react";

const Input = ({ d, iconClass, data, setData, type, placeholder, name }) => {
  return (
    <>
      <div className="d-flex justify-content-center input-con">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="40"
          fill="currentColor"
          class={iconClass + " icon"}
          viewBox="0 0 16 16"
        >
          <path d={d} />
        </svg>

        <input
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          name={name}
          className="mb-4 input"
        />
      </div>
    </>
  );
};

export default Input;
