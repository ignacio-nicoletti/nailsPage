import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  getDoc,
} from "firebase/firestore";
import firebaseApp from "../../firebaseConfig";

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export async function registrarUsuario(email, password, rol) {
  let data;
  await createUserWithEmailAndPassword(auth, email, password, rol).then(
    (usuarioFirebase) => {
      data = usuarioFirebase.user.accessToken;
      const docuRef = doc(firestore, `/usuarios/${usuarioFirebase.user.uid}`);
      setDoc(docuRef, { correo: email, rol: rol });
    }
  );

  return data;
}

export async function loginUser(email, password) {
  let data;
  let docRef;
  await signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      // console.log(user._tokenResponse.idToken);

      docRef = doc(firestore, `/usuarios/${user.user.uid}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    data = docSnap.data();
  } else {
    console.log("No such document!");
  }

  return data;
}
