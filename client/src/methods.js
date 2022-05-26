import app from './firebase'
import {
  getDatabase,
  ref,update,get,
  limitToLast ,
  orderByChild 
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";


const database = getDatabase(app);
const messageRef = ref(database,'messages')
const messageRefQ = ref(database,'messages',limitToLast(30))

function postMessage(puuid,user,content) {
  const newMessage = {
    puuid : puuid,
    postedBy : user,
    content : content,
    createdAt : new Date()
  }

  const newMessageKey = Math.floor(Math.random() * 899999 + 100000)

  const updates = {}
  updates['/messages/'+newMessageKey] = newMessage
  
  return update(ref(database), updates)
}

async function getMessages(){
  try {
    const snapshot = await get(messageRefQ)
    const data = snapshot.val()
    let messages = []

    Object.keys(data).forEach(key=>{
      messages.push({
        id : key,
        postedBy : data[key].postedBy,
        content : data[key].content,
        puuid : data[key].puuid,
        createdAt : data[key].createdAt
      })
    })
    
     const sorted = messages.sort((a,b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))

    return sorted
  } catch (err) {
    console.log(err)
  }
}

export  {postMessage,getMessages}