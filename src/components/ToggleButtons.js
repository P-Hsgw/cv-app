function DisplayResume(props) {
  return (
    <div className="buttons is-centered">
    <button onClick={props.onClick} className="button is-medium">
      Display CV
    </button>
    </div>
  );
}

function EditResume(props) {
  return (
    <div className="buttons is-centered">
    <button onClick={props.onClick} className="button is-medium">
      Edit CV
    </button>
    </div>
  );
}

export { DisplayResume, EditResume }