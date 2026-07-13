import { useAuth } from "../context/AuthContext";

function MessageBubble({ message }) {

    const { user } = useAuth();

    const ownMessage =

        message.sender._id === user._id;

    return (

        <div

            className={`message ${ownMessage ? "sent" : "received"}`}

        >

            {

                message.image && (

                    <img

                        src={message.image}

                        alt=""

                        className="chat-image"

                    />

                )

            }

            {

                message.text && (

                    <p>

                        {message.text}

                    </p>

                )

            }

            <small>

                {new Date(

                    message.createdAt

                ).toLocaleTimeString([], {

                    hour: "2-digit",

                    minute: "2-digit",

                })}

            </small>

        </div>

    );

}

export default MessageBubble;