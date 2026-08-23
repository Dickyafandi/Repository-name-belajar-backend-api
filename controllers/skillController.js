const db = require("../config/database");

// GET semua skills
const getSkills = (req, res) => {
    const sql = "SELECT * FROM skills";

    db.query(sql, (error, result) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({
                message: "Gagal mengambil data skills"
            });
        }

        res.json(result);
    });
};

// GET skill berdasarkan ID
const getSkillById = (req, res) => {
    const { id } = req.params;

    const sql = "SELECT * FROM skills WHERE id = ?";

    db.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({
                message: "Gagal mengambil skill"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Skill tidak ditemukan"
            });
        }

        res.json(result[0]);
    });
};

// CREATE skill
const createSkill = (req, res) => {
    const { name } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            message: "Nama skill wajib diisi"
        });
    }

    const sql = "INSERT INTO skills (name) VALUES (?)";

    db.query(sql, [name.trim()], (error, result) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({
                message: "Gagal menambahkan skill"
            });
        }

        res.status(201).json({
            message: "Skill berhasil ditambahkan",
            id: result.insertId,
            name: name.trim()
        });
    });
};

// UPDATE skill
const updateSkill = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            message: "Nama skill wajib diisi"
        });
    }

    const sql = "UPDATE skills SET name = ? WHERE id = ?";

    db.query(sql, [name.trim(), id], (error, result) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({
                message: "Gagal mengubah skill"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Skill tidak ditemukan"
            });
        }

        res.json({
            message: "Skill berhasil diubah",
            id: id,
            name: name.trim()
        });
    });
};

// DELETE skill
const deleteSkill = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM skills WHERE id = ?";

    db.query(sql, [id], (error, result) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({
                message: "Gagal menghapus skill"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Skill tidak ditemukan"
            });
        }

        res.json({
            message: "Skill berhasil dihapus",
            id: id
        });
    });
};

module.exports = {
    getSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
};