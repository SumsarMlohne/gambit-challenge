const express = require("express")
const http = require("http")
const path = require("path")
const publicPath = path.join(__dirname, "frontend", "build")
const axios = require("axios")

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
    axios.get("http://tuftuf.gambitlabs.fi/feed.txt").then(resp => {
        return res.send(resp.data)
    }).catch(err => console.log(err))
})

if (process.env.NODE_ENV === "production") {
    console.log("Public path = ", publicPath)
    app.use(express.static(publicPath))

    app.get("*", (req, res) => {
        res.sendFile("index.html", { root: publicPath })
    })
}

const port = process.env.PORT || 5000

httpServer.listen(port, () => console.log(`Server up and running at: localhost:${port}`))