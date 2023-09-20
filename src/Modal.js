import "./FormStyles.css";

function Modal({ isVisible, erreurMessage =   null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: erreurMessage ? "red" : "green" }}>
            {erreurMessage != null
              ? erreurMessage
              : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>
  }
}

export default Modal;
