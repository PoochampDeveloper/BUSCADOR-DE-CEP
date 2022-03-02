import express from "express"
import cors from "cors"
import path from "path"

import { router } from "./routes/router"

const app = express()

app.use(cors())

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.use(router)

app.listen(4000)