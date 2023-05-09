import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Export function to PUT to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  console.log('PUT to the Database');

  // Create Conenction to the DB, and DB Version
  const jateDb = await openDb('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate','readwrite');

  // Open up the desired object store
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database
  const request = store.put({ jate: content });

  // Request confermation
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
// Export function to GET from database
export const getDb = async () => {
  console.error('getDb not implemented');
  console.log('GET from the databse');

  // Create Conenction to the DB, and DB Version
  const jateDb = await openDb('jate', 1);

  // Create new Transaction and specify the DB and data privilages
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store
  const store = tx.objectStore('contact');

  // getAll method to get all data in DB
  const request = store.getAll();

  // Conformation Request 
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();