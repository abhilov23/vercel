import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import generate from "./utils";
import path from "path";
import {getAllFiles} from "./file";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy",async (req, res)=>{
 const repoUrl = req.body.repoUrl; //getting the github URL
 const id = generate(); //generating the id
 await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`)); //cloning the repository

 const files = getAllFiles(path.join(__dirname, `output/${id}`));
 console.log(files);
 //put this on S3
 res.json({"id": id});
})

app.listen(3000);