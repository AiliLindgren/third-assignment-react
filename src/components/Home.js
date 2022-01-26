import { useState } from "react";
import NavBtn from "./NavBtn";
import SideNav from "./SideNav";
import Main from "./Main";
import LearnMore from "./LearnMore";
import ModalBtn from "./ModalBtn";
import Modal from "./Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasMargin, setHasMargin] = useState(false);
  const [hasWidth, setHasWidth] = useState(false);

  return (
    <div className="container">
      <NavBtn isMargin={setHasMargin} isSideNav={setHasWidth} />
      <SideNav
        openSideNav={hasWidth}
        isSideNav={setHasWidth}
        isMargin={setHasMargin}
      />
      <Main activateMargin={hasMargin} />
      <LearnMore activateMargin={hasMargin} />
      <ModalBtn openModal={setShowModal} activateMargin={hasMargin} />
      {showModal && <Modal openModal={setShowModal} />}
    </div>
  );
};

export default Home;
