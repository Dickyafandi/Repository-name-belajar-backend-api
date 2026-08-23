const express = require("express");

const router = express.Router();

const {
    getSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
} = require("../controllers/skillController");

// GET semua skills
router.get("/", getSkills);

// GET skill berdasarkan ID
router.get("/:id", getSkillById);

// CREATE skill
router.post("/", createSkill);

// UPDATE skill
router.put("/:id", updateSkill);

// DELETE skill
router.delete("/:id", deleteSkill);

module.exports = router;