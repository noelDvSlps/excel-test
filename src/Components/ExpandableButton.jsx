/* eslint-disable react/prop-types */
export const ExpandableButton = ({ isOpen, toggle }) => {
  return (
    <button onClick={toggle}>
      <div
        // className="material-symbols-outlined"
        style={{
          width: "10px",
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
          transition: "all 0.25s",
        }}
      >
        🔽
      </div>
    </button>
  );
};
