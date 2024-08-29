import {S3} from "aws-sdk";
import fs from "fs";
require('dotenv').config();

const s3 = new S3({
    accessKeyId : process.env.AWS_ACCESSKEYID,
    secretAccessKey : process.env.AWS_SECRETKEYID,
    region : process.env.AWS_REGION  //replace with your region
})

//fileName => output/.../App.jsx
//filePath : /Users/../App.jsx


export const uploadFile = async (fileName: string, localFilePath: string) => {
 const fileContent = fs.readFileSync(localFilePath); //sync reading file

 const response = await s3.upload({
    Body: fileContent,
    Bucket:"vercel-bucket-099",
    Key: fileName,
 }).promise();
 console.log(`File ${fileName} uploaded to S3 bucket`);
 console.log(response)
}