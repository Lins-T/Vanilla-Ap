import moment from 'moment'
console.log(moment)

function hello() {
console.log('Hello fxn')
}

const obj = {
name: "Yaw",
fxn() {
 return moment 
 }
}
let string = JSON.stringify(obj)
let objSon = JSON.parse(string)
 export default function handler(req, res) {
 res.status(200).json({ detail: objSon,message: `${hello}`, info: "Infinite world"})
}

