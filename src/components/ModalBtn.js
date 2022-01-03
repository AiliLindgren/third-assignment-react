const ModalBtn = () => {
  // // Get the modal
  // let modal = document.getElementById("myModal");
  // // Get the button that opens the modal
  // let btn = document.getElementById("modal-btn");
  // // Get the <span> element that closes the modal
  // let span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  // btn.onclick = function () {
  //   modal.style.display = "block";
  // };

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };

  return (
    <div className="modal-btn-div">
      <button className="modal-btn" id="modal-btn" onClick={openModal}>
        Yes
      </button>
    </div>
  );
};

export default ModalBtn;
