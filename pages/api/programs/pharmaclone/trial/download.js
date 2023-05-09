import fs from 'fs'
import path from 'path'
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*")
    const filepath = path.join(process.cwd(), 'public','pharmaclone_trial.apk')
    const fileread= fs.createReadStream(filepath)

   
    res.setHeader('Content-Disposition', 'attachment; filename=pharmaclone_trial.apk');
    fileread.pipe(res)


}
