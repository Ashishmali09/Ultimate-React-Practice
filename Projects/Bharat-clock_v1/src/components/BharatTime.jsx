function BharatTime() {
  const BT = new Date();
  return (
    <div id="time">
      <span>
        This is the current time: {BT.toLocaleDateString()} -{" "}
        {BT.toLocaleTimeString()}
      </span>
    </div>
  );
}
export default BharatTime;
