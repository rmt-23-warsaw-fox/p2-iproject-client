import app from './firebase'
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";


const database = getDatabase(app);

function postMessage(data) {
  const postData = data
  const newPostKey = push(child(ref(db),'post')).key
  
  const updates = {}
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/'+uid+'/'+newPostKey] = postData

  return updates(ref(db),updates)
}

function loadMessages() {}