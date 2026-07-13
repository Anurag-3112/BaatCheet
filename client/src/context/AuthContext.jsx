import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadUser = async () => {

            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {

                const profile = await getProfile();

                setUser(profile);

            } catch (err) {

                console.log(err);

                localStorage.removeItem("token");

            }

            setLoading(false);

        };

        loadUser();

    }, []);

    const login = (data) => {

        localStorage.setItem("token", data.token);

        setUser({
            _id: data._id,
            name: data.name,
            email: data.email,
        });

    };

    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                loading,
                setUser,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);