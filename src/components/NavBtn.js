const NavBtn = ({ isMargin, isSideNav }) => {
  return (
    <div className="container">
      <button
        className="menu"
        onClick={() => {
          isMargin(true);
          isSideNav(true);
        }}
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default NavBtn;
