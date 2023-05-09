import fs from 'fs';
import path from 'path';

export default async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const filePath = path.join(process.cwd(), 'public', 'pharmaclone.apk');
    const fileContents = fs.createReadStream(filePath);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=pharmaclone.apk');
    res.setHeader('Content-Length', fileContents.length);

    fileStream.pipe(res);


};
