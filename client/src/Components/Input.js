import React from "react";
import "../Styles/Input.css";

const Input = ({
  d,
  iconClass,
  data,
  setData,
  type,
  placeholder,
  name,
  err,
  msg,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center input-con">
        {/* {err || !proper ? (
          <div className="tooltipcont">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="40"
              fill="currentColor"
              class="bi bi-exclamation-circle mx-2 text-danger "
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
            <span className="tooltiptext">
              {!proper
                ? "Please fill valid details"
                : "Please Fill this required field..."}
            </span>
          </div>
        ) : null} */}
        <div className="tooltipcont">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="40"
            fill="currentColor"
            className={iconClass + " icon " + (err ? "text-danger" : "")}
            viewBox="0 0 16 16"
          >
            <path d={d} />
          </svg>
          {err ? <span className="tooltiptext">{msg}</span> : null}
        </div>
        <div>
          <input
            value={data.value}
            onChange={(e) => {
              setData((prev) => ({ ...prev, value: e.target.value }));
            }}
            type={type}
            placeholder={placeholder}
            name={name}
            className="input"
          />
          <div className="mb-4"></div>
        </div>
      </div>
    </>
  );
};

{
  /* <div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div> */
}

export default Input;
