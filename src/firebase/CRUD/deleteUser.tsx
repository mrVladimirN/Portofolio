import { db } from "@/firebase/clientApp";
import {
  ExtendedNewsLetter,
  UnsubscribeNewsLetter,
} from "@/types/newsLetterType";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
export const deleteUser = async (
  collectionName: string,
  payload: UnsubscribeNewsLetter
): Promise<void> => {
  // Get the user document from the database
  const usersRef = collection(db, collectionName);
  const existingDocsQuery = query(
    usersRef,
    where("uuid", "==", payload.uuid),
    where("email", "==", payload.email)
  );
  const querySnapshot = await getDocs(existingDocsQuery);

  if (querySnapshot.empty) {
    // User not found, send error response
    throw Error(`No user found`);
  }

  // Delete the user document from the database
  const userDoc = querySnapshot.docs[0];
  return deleteDoc(userDoc.ref);

  // Send success response
};
