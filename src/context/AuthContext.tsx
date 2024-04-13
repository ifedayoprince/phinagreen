'use client'

import {
    getAuth,
    onAuthStateChanged,
    User,
} from 'firebase/auth';
import React, { ReactNode } from 'react';

import LoadingHome from '@/app/page';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext) as {user: User};

export const AuthContextProvider = ({
    children,
}: {
  children: ReactNode
}) => {
    const [user, setUser] = React.useState<User|null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <LoadingHome /> : children}
        </AuthContext.Provider>
    );
};