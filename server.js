const express = require("express")
const http = require("http")
const path = require("path")
const publicPath = path.join(__dirname, "..", "public")

const app = express()

const httpServer = http.createServer(app)

app.use(
    express.urlencoded({
        extended: false
    })
)
app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.get("/data", (req, res) => {
    res.sendFile("data.txt", { root: __dirname })
})
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"))
})

const port = process.env.PORT || 5000

httpServer.listen(port, () => console.log(`Server up and running at: localhost:${port}`))