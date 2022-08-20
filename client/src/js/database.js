import { openDB } from 'idb';

//noticing right away that our package names are not matching our casing in these jate references, so going to change those to lowercase. 

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
//idea here is to draw an async function that will await the function above, openDB
//once that function returns either a non-existent database or creates a new one, we can add variables that will allow for readwrite or read privileges for editing or seeing the db
//these are sort of like put and get routes, but done in an entirely different manner and circumstance. 
export const putDb = async (id, DBContent) => {
  console.log('Seeking DB data to update.');
  //The first variable will connect the db and specifiy a version number as a parameter. This is the "openDB" function promised above. It will accept our db name in lowercase as reflected above
  const jateDB = await openDB('jate', 1);
  //the next step is declaring where we are posting (i think thats obvious by now), but here is where it gets interesting.
  //have to look up docs to see the method for ALLOWING reading AND writing to the DB. 
  //it turns out this method is transaction, which makes sense. 
  const jateReadWrite = jateDB.transaction('jate', 'readwrite');
  // TODO: Add logic for a method that gets all the content from the database
  export const getDb = async () => console.error('getDb not implemented');

  initdb();
