import fs from 'fs'
import path from 'path'
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*")
    const filepath = path.join(process.cwd(), 'public','pharmaclone_trial.apk')
    const fileread= fs.readFileSync(filepath)

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=pharmaclone_trial.apk');
    res.setHeader('Content-Length', fileread.length);
    res.send(fileread)


}