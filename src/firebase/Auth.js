import { auth, storage } from "./Config";
export const logIn = (email,password) => auth.signInWithEmailAndPassword(email, password);

export const logOut = () => auth.signOut();
export const AddImg = (ref, img) => storage.ref(`/categories/${ref.name}`).put(img);
export const SeeImg = (ref,url) => storage.ref(`/categories/${ref.url}`).getDownloadURL(url);



