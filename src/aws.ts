import {S3} from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId : "",
    secretAccessKey : "",
    //region : "us-west-2"  //replace with your region
})

//fileName => output/.../App.jsx
//filePath : /Users/../App.jsx


export const uploadFile = async (fileName: string, localFilePath: string) => {
 const fileContent = fs.readFileSync(localFilePath); //sync reading file

 const response = await s3.upload({
    Body: fileContent,
    Bucket:"vercel",
    Key: fileName,
 }).promise();
 console.log(`File ${fileName} uploaded to S3 bucket`);
 console.log(response)
}