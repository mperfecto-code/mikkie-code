const pool = require('../config/database');

const getAllDepartments = async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM departments');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getDepartmentsById = async (req, res) => {
    try {
      const [rows] = await pool.query('');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



  