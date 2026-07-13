import { useState } from "react";

import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

function Home() {

    const [selectedUser, setSelectedUser] = useState(null);

    return (

        <div className="home">

            <Sidebar
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
            />

            <ChatWindow
                selectedUser={selectedUser}
            />

        </div>

    );

}

export default Home;