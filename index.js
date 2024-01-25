// https://github.com/Webudvikler-TechCollege/DSI/blob/main/Guides/Backend/3.0%20-%20NODEJS%20-%20Express%20Router.md

// Skriv node index.js i terminalen

import dotenv from 'dotenv'
import mysql from 'mysql2'
import express from "express"
import db from "./Database.config.js"


const port = process.env.PORT
const api_key = process.env.APIKEY

const app = express()

// Default start route
app.get("/", (req, res) => {
    res.send("welcome to my api")
})

// Contact route
app.get("/api", (req, res) => {
    db.query(`SELECT color_id, color_name FROM colors`, (error, result) => {
        if (error) {
            console.error(error)
        } else {
            res.json(result)
        }
    })
})

// Start server listening
app.listen(8081, () => {
    console.log("server started on port 8081");
}
)

// 404 not found route
app.use((req, res) => {
    res.status(404).send("page not found")
})

