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

function WorkButton(props) {
  return(
    <div className="buttons is-right">
      {!props.visible ? (

    <button onClick={props.onClick} className="button is-warning">
      Add Work Experience
    </button>

      ) : (
        <button onClick={props.onClick} className="button is-warning">
        Remove Work Experience
        </button>
      )}

    </div>
  )
}

function EduButton(props) {
  return(
    <div className="buttons is-right">
      {!props.visible ? (

    <button onClick={props.onClick} className="button is-warning">
      Add Education
    </button>

      ) : (
        <button onClick={props.onClick} className="button is-warning">
        Remove Education
        </button>
      )}

    </div>
  )
}

export { DisplayResume, EditResume, DisplayDemo, WorkButton, EduButton }