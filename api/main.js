pimport moment from 'moment'

 export default function handler(req, res) {
 const now = moment()
 res.status(200).json({ good1: moment, good2: moment()})
}
