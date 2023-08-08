require("dotenv").config()

import { runServer } from "./src/api/server"

const init = () => {
    runServer()
}

init()