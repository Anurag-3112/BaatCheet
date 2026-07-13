function UserCard({

    user,

    active,

    online,

    onClick,

}) {

    return (

        <div

            className={`user-card ${active ? "active" : ""}`}

            onClick={onClick}

        >

            <img
                src={user.avatar}
                alt={user.name}
            />

            <div className="user-info">

                <h4>{user.name}</h4>

                <p>

                    {

                        online

                            ? "🟢 Online"

                            : "⚫ Offline"

                    }

                </p>

            </div>

        </div>

    );

}

export default UserCard;