function Hello(props) {
  return (
    <div>
      <h1>
        {props.tx} {props.name}
      </h1>
    </div>
  );
}

export default Hello;
