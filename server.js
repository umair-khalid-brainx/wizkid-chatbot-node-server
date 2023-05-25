const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express()
const port = 3500
const allowedOrigin = "http://127.0.0.1:5500"

const corsOptions = {
  origin: (origin, callback) => {
    if (origin === allowedOrigin || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
}

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, "dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
