let Currenttime = () => {
  let time = new Date();

  return (
    <p className="lead">
      Current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
};

export default Currenttime;
