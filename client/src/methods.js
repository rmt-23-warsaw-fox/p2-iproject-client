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
const postRef = ref(database, 'posts')

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

function posting(puuid,user,content) {
  const newPost = {
    puuid : puuid,
    postedBy : user,
    content : content,
    createdAt : new Date(),
  }

  const newPostKey = Math.floor(Math.random() * 899999 + 100000)

  const updates = {}
  updates['/posts/'+ newPostKey] = newPost

  return update(ref(database),updates)
}

function postingComment(puuid,user,content,postId) {
  const newPost = {
    puuid : puuid,
    postedBy : user,
    content : content,
    createdAt : new Date(),
  }

  const otherkey = Math.floor(Math.random() * 899999 + 112312)

  const updates = {}
  updates[`/posts/${postId}/comments/`+otherkey] = newPost

  return update(ref(database),updates)
}

async function getPosts(){
  try {
    const snapshot = await get(postRef)
    const data = snapshot.val()
    let posts = []

    Object.keys(data).forEach(key=>{
      let ArrayOfComments = []
      if(data[key].comments){
        let comments = []
          console.log(data[key].comments)
         Object.keys(data[key].comments).forEach((x) =>{
          comments.push({
            id : x,
            postedBy : data[key].comments[x].postedBy,
            content : data[key].comments[x].content,
            puuid : data[key].comments[x].puuid,
            createdAt : data[key].comments[x].createdAt,
          })
        }) 

        const sortedComments = comments.sort((a,b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))

        ArrayOfComments = sortedComments
      }
      
     
 
      posts.push({
        id : key,
        postedBy : data[key].postedBy,
        content : data[key].content,
        puuid : data[key].puuid,
        createdAt : data[key].createdAt,
        comments : ArrayOfComments
      })
    })
    
     const sorted = posts.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    return sorted
  } catch (err) {
    console.log(err)
  }
}



export  {postMessage,getMessages,posting,postingComment,getPosts}