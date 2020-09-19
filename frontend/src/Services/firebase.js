import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
const config = {
  apiKey: 'AIzaSyAk4yExZ9ifv2WgGf9jtdsbdXRkseAgfrs',
  authDomain: 'tochki-rosta.firebaseapp.com',
  databaseURL: 'https://tochki-rosta.firebaseio.com'
}

firebase.initializeApp(config)

export const auth = firebase.auth
export const db = firebase.database()
