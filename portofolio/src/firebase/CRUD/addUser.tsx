import { db } from "@/firebase/clientApp";
import { ExtendedNewsLetter } from "@/types/newsLetterType";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { DocumentReference } from "firebase/firestore";

export const createUser = async (
  collectionName: string,
  payload: ExtendedNewsLetter
): Promise<DocumentReference<unknown>> => {
  const existingDocsQuery = query(
    collection(db, collectionName),
    where("email", "==", payload.email)
  );
  const existingDocsSnapshot = await getDocs(existingDocsQuery);
  if (existingDocsSnapshot.empty) {
    return addDoc(collection(db, collectionName), payload);
  } else {
    throw Error(`The email ${payload.email} already exist`);
  }
};
