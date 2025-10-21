import { Router } from "express"

const subscriptionRouter = Router()

subscriptionRouter.get("/", (req, res) => {
    res.send({ title: "Get all subs" })
})

subscriptionRouter.get("/:id", (req, res) => {
    res.send({ title: "Get  subs details" })
})

subscriptionRouter.post("/", (req, res) => {
    res.send({ title: "create subs" })
})

subscriptionRouter.put("/:id", (req, res) => {
    res.send({ title: "update sub" })
})

subscriptionRouter.delete("/:id", (req, res) => {
    res.send({ title: "delete subs" })
})

subscriptionRouter.get("/user/:id", (req, res) => {
    res.send({ title: "Get all user subscriptions" })
})

subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.send({ title: "cancel subs" })
})

subscriptionRouter.get("/upcoming-renewals", (req, res)=>{
    res.send({title:"get upcomming renewals"})
})

export default subscriptionRouter