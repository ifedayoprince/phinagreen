import { getAuth,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import googleProvider from "@/firebase/auth/google";

import firebase_app from "../config";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
}
