import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { crossChainOperation } from "../core/crosschain.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.json({
        project: "AIGORN",
        status: "running"
    })
})

app.post("/execute", async (req,res)=>{

    const result = await crossChainOperation(req.body)

    res.json(result)

})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Aigorn API running on port ${PORT}`)
})
