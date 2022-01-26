const Modal = ({ openModal }) => {
  return (
    <div className="modal__background" onClick={() => openModal(false)}>
      <div className="modal__content">
        <span className="modal__close" onClick={() => openModal(false)}>
          &times;
        </span>
        <div className="modal__form-container">
          <form action="action_page.php">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="subject">Message</label>
            <textarea
              className="textarea"
              id="subject"
              name="subject"
              placeholder="Write something..."
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
