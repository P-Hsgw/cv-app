function DisplayResume(props) {
  return (
    <button onClick={props.onClick}>
      Display CV
    </button>
  );
}

function EditResume(props) {
  return (
    <button onClick={props.onClick}>
      Edit CV
    </button>
  );
}

export { DisplayResume, EditResume }