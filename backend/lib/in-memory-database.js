import { nanoid } from "nanoid"
const subscribers = [
  {
    id: "b1245",
    fname: "Tanya",
    lname: "Sinclair",
    sex: "Female",
  },
  {
    id: "c5431",
    fname: "John",
    lname: "Tarkpor",
    sex: "Male",
  },
  {
    id: "d6790",
    fname: "Carson",
    lname: "Knapp",
    sex: "Male",
  },
]

async function getSubscribers() {
  return subscribers
}

async function addSubscriber(subscriber) {
  subscriber.id = nanoid(5)
  subscribers.push(subscriber)
}

async function removeSubscriber(id) {
  const index = subscribers.findIndex((subscriber) => subscriber.id === id)
  subscribers.splice(index, 1)
}

async function favoriteSubscriber(id) {
  const index = subscribers.findIndex((subscriber) => subscriber.id === id)
  subscribers[index].isFavorite = !subscribers[index].isFavorite
}

export const database = {
  getSubscribers,
  addSubscriber,
  removeSubscriber,
  favoriteSubscriber,
}
