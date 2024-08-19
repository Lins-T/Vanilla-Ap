import moment from 'moment'
console.log(moment)
 export default function handler(req, res) {
 res.status(200).json({ mesaage: moment, info: "Hello world"})
}

