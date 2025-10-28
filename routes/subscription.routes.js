import { Router } from "express"
import authorize from "../middlewares/auth.middleware.js"
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js"

const subscriptionRouter = Router()

subscriptionRouter.get("/", (req, res) => {
    res.send({ title: "Get all subs" })
})

subscriptionRouter.get("/:id", (req, res) => {
    res.send({ title: "Get  subs details" })
})

subscriptionRouter.post("/", authorize, createSubscription)

subscriptionRouter.put("/:id", (req, res) => {
    res.send({ title: "update sub" })
})

subscriptionRouter.delete("/:id", (req, res) => {
    res.send({ title: "delete subs" })
})

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions)

subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.send({ title: "cancel subs" })
})

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    res.send({ title: "get upcomming renewals" })
})

export default subscriptionRouter