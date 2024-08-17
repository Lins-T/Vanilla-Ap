import moment from 'moment'
 export default function handler(req, res) {
 res.status(200).json({ message: moment()})
 //Done
 //res.status(200).json({ moment: moment })
} 
