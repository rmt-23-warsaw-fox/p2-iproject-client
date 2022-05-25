import app from './firebase'
import {
  getDatabase,
  ref,update,get
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";


const database = getDatabase(app);
const messageRef = ref(database,'messages')

function postMessage(puuid,user,content) {
  const newMessage = {
    puuid : puuid,
    postedBy : user,
    content : content
  }

  const newMessageKey = Math.floor(Math.random() * 899999 + 100000)

  const updates = {}
  updates['/messages/'+newMessageKey] = newMessage
  
  return update(ref(database), updates)
}

async function getMessages(){
  try {
    const snapshot = await get(messageRef)
    const data = snapshot.val()
    let messages = []

    Object.keys(data).forEach(key=>{
      messages.push({
        id : key,
        postedBy : data[key].postedBy,
        content : data[key].content,
        puuid : data[key].puuid
      })
    })

    return messages
  } catch (err) {
    console.log(err)
  }
}

export  {postMessage,getMessages}