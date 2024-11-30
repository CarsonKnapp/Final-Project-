import { JSONFilePreset } from "lowdb/node"
import { nanoid } from "nanoid"

const initialData = {
  subscribers: [
    {
      id: "b1245",
      fname: "Pierce",
      lname: "Brosnan",
      quote: "This is fantastic!",
      portrait_img:
        "https://m.media-amazon.com/images/M/MV5BMTMwMjMxNzM4OV5BMl5BanBnXkFtZTcwNDM5NzkxMw@@._V1_QL75_UY148_CR4,0,100,148_.jpg",
    },
    {
      id: "c5431",
      fname: "Jennifer",
      lname: "Garner",
      quote: "The best thing since sliced bread!",
      portrait_img:
        "https://m.media-amazon.com/images/M/MV5BNTA4MDgzMTc1Nl5BMl5BanBnXkFtZTcwNjQyMjIwNQ@@._V1_QL75_UY148_CR7,0,100,148_.jpg",
    },
    {
      id: "d6790",
      fname: "Harrison",
      lname: "Ford",
      quote: "I'm Han Solo!",
      portrait_img:
        "https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_QL75_UX100_CR0,1,100,148_.jpg",
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
