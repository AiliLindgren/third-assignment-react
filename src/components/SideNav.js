const SideNav = ({ openSideNav, isSideNav, isMargin }) => {
  return (
    <div className="container">
      <div
        id="mySidenav"
        className="sidenav"
        style={openSideNav ? { width: "250px" } : { width: "0px" }}
      >
        <a
          href="#"
          className="closebtn"
          onClick={() => {
            isSideNav(false);
            isMargin(false);
          }}
        >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default SideNav;
