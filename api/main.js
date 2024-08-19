import moment from 'moment'
console.log(moment)
function hello() {
console.log('Hello fxn')
}

const obj = {
 fxn() {
 return moment 
 }
}

 export default function handler(req, res) {
 res.status(200).json({ detail: obj,message: `${hello}`, info: "Hello world"})
}

