// 1 - iniciando projeto 
//console.log("Express + TS!!!")

//init express
import express from "express";

const app = express()

app.use(express.json())

app.get("/", (req, res) =>{
    return res.send("Hello, World!")
})

app.listen(3000, () => {
    console.log("Aplicação de TS + Express funcionado!")
}) 