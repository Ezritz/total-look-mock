import { auth } from "./Config";
export const logIn = (email,password) => auth.signInWithEmailAndPassword(email, password);

export const logOut = () => auth.signOut();
