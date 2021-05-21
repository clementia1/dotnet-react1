export default function UserCard(props) {

    return (
        <div className="user-card" onClick={props.showUser}>
            <div className="user-picture-container">
                <img className="user-picture" src={props.user.picture} />
            </div>
            <div className="user-info-container">
                <div className="user-info-bio">
                    <p className="user-name">{props.user.name}</p>
                    <p className="user-info">{props.user.gender}, {props.user.age}</p>
                </div>
                <div className="user-info-balance">
                    <p>{props.user.balance}</p> 
                </div>
            </div>
        </div>
    )
}