export const FunctionEvent = () => {
  let handleClick = () => {
    console.log('Button is clicked');
  };

  return (
    <div>
      FunctionEvent component
      <button onClick={handleClick}>click here</button>
    </div>
  );
};
