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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPobXE0c9q8ZkdVcemjL4l06LoF46JDqVqcg&s",
    },
    {
      id: "c5431",
      fname: "John",
      lname: "Tarkpor",
      quote: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      portrait_img:
        "data:image/jpeg;base64,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",
    },
    {
      id: "d6790",
      fname: "Bill",
      lname: "Cunningham",
      quote: "This course has helped me deploy a full-stack application. I now have a job at a top tech company. I am so grateful for the knowledge gained.",
      portrait_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1x-5yh0gTfKwc7UMs9HKyfN1PO5gfyGCbw&s",
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
