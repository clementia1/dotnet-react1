export default function UserCardFull(props) {
  return (
    props.visible ? 
      <div className="popup">
          <div className="popup-content">
            <h2>{props.user.name}</h2>
            <p>{props.user.about}</p>
            <a href="#" className="popup-close" onClick={props.toggle}>&times;</a>
          </div>
      </div>
      : null
  )
}