const LearnMore = ({ activateMargin }) => {
  return (
    <div
      className="learn-more-container"
      style={activateMargin ? { marginLeft: "250px" } : { marginLeft: "0px" }}
    >
      <h3 id="learn-more">Learn more?</h3>
    </div>
  );
};

export default LearnMore;
