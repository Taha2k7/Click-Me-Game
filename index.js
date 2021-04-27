const express = require('express');
const path = require("path")

const playRouter = require("./routes/play_router.js")
app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))

app.use(playRouter)



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on PORT: ${PORT}`) })