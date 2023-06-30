import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebaseApp from "../../firebaseConfig";

const firestore = getFirestore(firebaseApp);

export async function registerTime(times) {
  await addDoc(collection(firestore, "Times"), {
    times: times,
  }).then((data) => console.log(data));
}

export async function getTimes() {
  const docRef = collection(firestore, "Times");
  const data = await getDocs(docRef);
  const dataList = data.docs.map((doc) => doc.data());
  return dataList;
}
