function Counter() {
  let count = 0;

  const increment = () => {
    count++; // Updates variable but React doesn't know or care
    console.log(count); // Will log updated value, but UI won't update
  };

  return <button onClick={increment}>Count: {count}</button>;
}
export default Counter