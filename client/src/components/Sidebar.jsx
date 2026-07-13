import { useEffect, useState } from "react";

import { getUsers } from "../services/messageService";

import UserCard from "./UserCard";

import { useSocket } from "../context/SocketContext";

import { useAuth } from "../context/AuthContext";
import SearchBar from "./SearchBar";

function Sidebar({ selectedUser, setSelectedUser }) {

    const [users, setUsers] = useState([]);

    const { onlineUsers } = useSocket();

    const { logout } = useAuth();
    const [search, setSearch] = useState("");
    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers = async () => {

        try {

            const data = await getUsers();

            setUsers(data);

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="sidebar">

            <div className="sidebar-header">

                <h2>BaatCheet</h2>

            </div>
            <SearchBar

                value={search}

                onChange={setSearch}

            />
            <div className="user-list">

                {

                    users
                        .filter((user) =>

                            user.name
                                .toLowerCase()
                                .includes(search.toLowerCase())

                        )

                        .map((user) => (

                            <UserCard

                                key={user._id}

                                user={user}

                                active={
                                    selectedUser?._id === user._id
                                }

                                online={
                                    onlineUsers.includes(user._id)
                                }

                                onClick={() =>
                                    setSelectedUser(user)
                                }

                            />

                        ))

                }

            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                Logout
            </button>

        </div>

    );

}

export default Sidebar;