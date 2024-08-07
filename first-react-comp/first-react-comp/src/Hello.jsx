function Hello() {
  let myName = "Ashish";
  let number = 9;
  let fullName = () => {
    return "Ashish Mali";
  };
  return (
    <h3>
      Hello, this is {myName} the future of {fullName()}! with number {number}
    </h3>
  );
}
export default Hello;
