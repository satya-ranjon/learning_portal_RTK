import "./style.css";

const Model = ({
  closeFun,
  children,
  width = " 400px",
  height = "400px",
  top = "205",
}) => {
  return (
    <>
      <div className="overflow" onClick={closeFun}></div>
      <div
        className="modal-content"
        style={{ width: width, height: height, top: top }}>
        <span className="close" onClick={closeFun}>
          X
        </span>
        <span style={{ width: "100%", display: "block", height: "3vh" }}></span>
        {children}
      </div>
    </>
  );
};

export default Model;
