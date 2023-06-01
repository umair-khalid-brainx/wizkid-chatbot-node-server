const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express()
const port = 5089
const corsOptions = {
  origin: ["http://localhost:5500", "http://localhost:5089", "https://wizkid-bot-backend.brainxdemo.com", "http://localhost:5173"],
}

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
