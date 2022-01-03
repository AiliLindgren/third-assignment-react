const NavBtn = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("learn-more").style.marginLeft = "250px";
    document.getElementById("modal-btn").style.marginLeft = "250px";
  }
  return (
    <div className="container">
      <button className="menu" onClick={openNav}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default NavBtn;
