import {
  getFirestore,
  getDocs,
  collection,
  DocumentData,
} from 'firebase/firestore';
import app from '../config';

export default async function getData(desiredCollection: string) {
  const db = getFirestore(app);

  let result = null;
  let data: DocumentData[] | null = [];
  let error = null;

  try {
    result = await getDocs(collection(db, desiredCollection));

    if (result.empty) {
      console.log('No data found');
      data = null;
    } else {
      result.forEach((docSnap) => {
        //console.log("Document data:", docSnap.data())
        data!.push(docSnap.data());
      });
    }
  } catch (e) {
    error = e;
  }

  result = data

  return { result, error };
}
