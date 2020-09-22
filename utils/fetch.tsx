import fb from '../config/firebase-config';

export function addCoinsToDb(coin) {
  fb.database().ref('coins').push(coin);
  return true;
}

export function addCollectionToDb(collection) {
  fb.database().ref('collection').push(collection);
  return true;
}