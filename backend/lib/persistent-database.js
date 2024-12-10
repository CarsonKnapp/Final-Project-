import { JSONFilePreset } from "lowdb/node"
import { nanoid } from "nanoid"

const initialData = {
  subscribers: [
    {
      id: "b1245",
      fname: "Tanya",
      lname: "Sinclair",
      quote: "I've been interested in coding for a while now, but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
      portrait_img:
        "https://m.media-amazon.com/images/M/MV5BNTA4MDgzMTc1Nl5BMl5BanBnXkFtZTcwNjQyMjIwNQ@@._V1_QL75_UY148_CR7,0,100,148_.jpg",
    },
    {
      id: "c5431",
      fname: "John",
      lname: "Tarkpor",
      quote: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      portrait_img:
        "https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_QL75_UX100_CR0,1,100,148_.jpg",
    },
    {
      id: "d6790",
      fname: "Bill",
      lname: "Cunningham",
      quote: "This course has helped me deploy a full-stack application. I now have a job at a top tech company. I am so grateful for the knowledge gained.",
      portrait_img:
        "https://m.media-amazon.com/images/M/MV5BMTM0MTc0Njk2OF5BMl5BanBnXkFtZTcwMTIxMTAzNQ@@._V1_QL75_UY148_CR6,0,100,148_.jpg",
    },
  ],
}

// Initialize the database
let db = await JSONFilePreset("db.json", initialData)

async function getSubscribers() {
  await db.read()
  return db.data.subscribers
}

async function addSubscriber(subscriber) {
  subscriber.id = nanoid(5)
  db.data.subscribers.push(subscriber)
  await db.write()
}

async function removeSubscriber(id) {
  const index = db.data.subscribers.findIndex(
    (subscriber) => subscriber.id === id
  )
  db.data.subscribers.splice(index, 1)
  await db.write()
}

async function favoriteSubscriber(id) {
  const index = db.data.subscribers.findIndex(
    (subscriber) => subscriber.id === id
  )
  db.data.subscribers[index].isFavorite = !db.data.subscribers[index].isFavorite
  await db.write()
}

export const database = {
  getSubscribers,
  addSubscriber,
  removeSubscriber,
  favoriteSubscriber,
}
