import SideNav from "./SideNav";
import NavBtn from "./NavBtn";
import Main from "./Main";
import LearnMore from "./LearnMore";
import ModalBtn from "./ModalBtn";
import Modal from "./Modal";

const Home = () => {
  return (
    <div className="container">
      <SideNav />
      <NavBtn />
      <Main />
      <LearnMore />
      <ModalBtn />
      <Modal />
    </div>
  );
};

export default Home;
