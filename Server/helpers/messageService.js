const {
  collection,
  addDoc,
  query,
  onSnapshot,
  where,
  getDocs,
} = require('firebase/firestore');
const db = require('../config/firebaseConfig');

async function saveMessage(message) {
  try {
    await addDoc(collection(db, 'messages'), message);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

async function retrieveMessages(userId) {
  try {
    const sentMessagesQuery = query(
      collection(db, 'messages'),
      where('senderId', '==', userId)
    );

    const receivedMessagesQuery = query(
      collection(db, 'messages'),
      where('receiverId', '==', userId)
    );

    const sentSnapshot = await getDocs(sentMessagesQuery);
    const receivedSnapshot = await getDocs(receivedMessagesQuery);

    const allMessages = [
      ...sentSnapshot.docs.map((doc) => doc.data()),
      ...receivedSnapshot.docs.map((doc) => doc.data()),
    ];

    return allMessages;
  } catch (error) {
    console.error('Error retrieving messages:', error);
    throw error;
  }
}

function onMessage(callback) {
  const messagesQuery = query(collection(db, 'messages'));
  return onSnapshot(messagesQuery, (querySnapshot) => {
    const messages = querySnapshot.docs.map((doc) => doc.data());
    callback(messages);
  });
}

module.exports = {
  saveMessage,
  retrieveMessages,
  onMessage,
};
