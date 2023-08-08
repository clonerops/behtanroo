import {readdirSync} from "fs";
import {Router} from 'express';
// import aboutRouter from './about'
const router = Router()

// router.use('/about', aboutRouter)

readdirSync('src/api/routes').map(async (route) => {
    const {default: handler} = await import(`./${route}`)
    router.use(`/${route.slice(0, -3)}`, handler)

});


export default router
