import { collection, addDoc, query, onSnapshot } from 'firebase/firestore'
import db from '../config/firebaseConfig'

export async function saveMessage(message) {
  try {
    await addDoc(collection(db, 'messages'), message)
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}

export function onMessage(callback) {
  const messagesQuery = query(collection(db, 'messages'))
  return onSnapshot(messagesQuery, (querySnapshot) => {
    const messages = querySnapshot.docs.map((doc) => doc.data())
    callback(messages)
  })
}
