function DisplayResume(props) {
  return (
    <div className="buttons is-centered">
    <button onClick={props.onClick} className="button is-medium mt-5">
      Display CV
    </button>
    </div>
  );
}

function EditResume(props) {
  return (
    <div className="buttons is-centered">
    <button onClick={props.onClick} className="button is-medium mt-5">
      Edit CV
    </button>
    </div>
  );
}

function DisplayDemo(props) {
  return(
    <div className="buttons is-centered">
    <button onClick={props.onClick} className="button is-warning is-medium">
      Display Demo
    </button>
    </div>
  )
}

export { DisplayResume, EditResume, DisplayDemo }