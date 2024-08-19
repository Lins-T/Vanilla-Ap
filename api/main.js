import moment from 'moment'
console.log(moment)
function hello() {
console.log('Hello fxn')
}

 export default function handler(req, res) {
 res.status(200).json({ mesaage: hello, info: "Hello world"})
}

