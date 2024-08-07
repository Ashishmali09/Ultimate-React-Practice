function Random() {
  let number = Math.random() * 100;
  return (
    <h2 style={{ background: "#989856", color: "red" }}>
      Random number is: {Math.floor(number)}
    </h2>
  );
}
export default Random;
