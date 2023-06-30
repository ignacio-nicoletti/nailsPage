import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebaseApp from "../../firebaseConfig";

const firestore = getFirestore(firebaseApp);

export async function registerProduct(nameService, price, category) {
  await addDoc(collection(firestore, "servicios"), {
    nameService: nameService,
    price: price,
    category: category,
  }).then((data) => console.log(data));
}

export async function getServices() {
  const docRef = collection(firestore, "servicios");
  const data = await getDocs(docRef);
  const dataList = data.docs.map((doc) => doc.data());
  return dataList;
}
