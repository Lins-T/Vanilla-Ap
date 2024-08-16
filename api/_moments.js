import moment from 'moment'


 export default function handler(req, res) {
 res.status(200).json({ moment: moment})
 //res.status(200).json({ moment: moment })
} 