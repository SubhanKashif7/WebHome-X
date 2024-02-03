import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import randomskjs from "randomskjs1";

const app = express();
app.use(cors());

const port = 3990;

app.get("/get/",(req,res)=>{
    res.json({
        main : {
            data : {
                students : [
                    {
                        name : "Subhan",
                        age : 13,
                        hobby : "coding"
                    },
                    {
                        name : "Subhan-Amin",
                        age : 11,
                        hobby : "didnt know"
                    },
                    {
                        name : "Irtaza Ahmed",
                        age : 14,
                        hobby : "Football"
                    }
                ],
                teachers : [
                    {
                        name : "Mam Sana",
                        Subject : "Maths",
                        score : 59
                    },
                    {
                        name : "Mam Saba",
                        Subject : "English",
                        score : 47
                    },
                    {
                        name : "Mam Naushi",
                        Subject : "SST",
                        score : 99
                    }
                ]
            },
        }
    })
});

app.listen(port,()=>{
    console.log(`app listneing on port ${port}`);
})