const Director = require("../Models/directorsModel")
const express = require("express")
const router = express.Router()

//get all directors
router.get("/", async (req, res) => {
    try {
        const diretors = await Director.find()
        res.json(diretors)
    } catch (error) {
        res.json(error)
    }
})

//get a specific director
router.get("/:id", async (req, res) => {
    try {
        const director = await Director.findById(req.params.id)
        res.json(director)
    } catch (error) {
        res.json(error)
    }
})

//add a director
router.post("/", async (req, res) => {
    try {
        const name = req.body.name
        if(!name) {
            res.json("Add name")
        }
        
        const director = await Director.create({
            name: name
        })
        
        res.json({
            message: "New director created",
            director: director
        })
    } catch (error) {
        res.json(error)
    }
})

//edid a director
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const name = req.body.name
        if (!id) {
            res.json("Add ID")
        }
        if (!name) {
            res.json("Add name")
        }
    
        const director = await Director.findByIdAndUpdate(id, req.body, {
            new: true
        })
    
        res.json({
            message: "Director updated succesfully",
            director: director
        })
    } catch (error) {
        res.json(error)
    }
})

//delete a director
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        if(!id) {
            res.json("Add ID")
        }
        
        const director = await Director.findByIdAndDelete(id)

        res.json({
            message: "you deleted a director"
        })
    } catch (error) {
        res.json(error)
    }
})

module.exports = router