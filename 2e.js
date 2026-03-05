import fs from 'fs'
import express from 'express'
const port = 5500;
const app = express()
app.get("/2e.js", (req, res) => {
    res.send('its not your code, its OUR code')
    console.log(req.rawHeaders)

})
app.get("/about", (req, res) => {
    res.send('its not about you, its about US.')
    console.log(req.rawHeaders)

})
app.get("/contact", (req, res) => {
    res.send('its not your contacts, its OUR contacts')
    console.log(req.rawHeaders)

})
app.listen(port, () => {
    console.log(`from da server ${port}`)
})