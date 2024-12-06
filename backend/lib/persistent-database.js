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
        "https://media.istockphoto.com/id/2135643049/photo/waist-up-shot-of-a-handsome-hispanic-latino-carefree-black-male-looking-at-the-camera-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=9UhZSA9t22Mu5gXF9Y3yQlPNA9nXbbKaS78ThhhQXgM=",
    },
    {
      id: "c5431",
      fname: "John",
      lname: "Tarkpor",
      quote: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      portrait_img:
        "https://media.istockphoto.com/id/2135643049/photo/waist-up-shot-of-a-handsome-hispanic-latino-carefree-black-male-looking-at-the-camera-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=9UhZSA9t22Mu5gXF9Y3yQlPNA9nXbbKaS78ThhhQXgM=",
    },
    {
      id: "d6790",
      fname: "Bill",
      lname: "Cunningham",
      quote: "This course has helped me deploy a full-stack application. I now have a job at a top tech company. I am so grateful for the knowledge gained.",
      portrait_img:
        "https://media.istockphoto.com/id/2135643049/photo/waist-up-shot-of-a-handsome-hispanic-latino-carefree-black-male-looking-at-the-camera-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=9UhZSA9t22Mu5gXF9Y3yQlPNA9nXbbKaS78ThhhQXgM=",
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
