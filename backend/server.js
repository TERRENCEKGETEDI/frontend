const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false },
});

// Test route
app.get("/", (req, res) => {
  res.json({ message: "BEC API is running!" });
});

// Register new user
app.post("/users", async (req, res) => {
  try {
    console.log("📥 Received registration request:", req.body);
    
    const { name, email, password, role_type, branch_id, position, status } = req.body;

    if (!name || !email || !password || !branch_id || !position) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if user exists
    const existingUser = await pool.query(
      'SELECT * FROM "Users" WHERE "email" = $1',
      [email]
    );
    
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    // Get the next available ID
    const maxIdResult = await pool.query('SELECT COALESCE(MAX(id), 0) as max_id FROM "Users"');
    const nextId = parseInt(maxIdResult.rows[0].max_id) + 1;

    // Use short values for limited columns
    const insertValues = [
      nextId, // Manually generated ID
      name.substring(0, 50),
      email.substring(0, 50),
      password.substring(0, 50),
      `{${(role_type || "stu").substring(0, 3)}}`,
      parseInt(branch_id),
      `{${(position || "Stu").substring(0, 3)}}`,
      `{${(status || "act").substring(0, 3)}}`
    ];

    console.log("💾 Inserting with manual ID:", nextId);

    // Insert user with manual ID
    const userResult = await pool.query(
      `INSERT INTO "Users" 
        ("id", "name", "email", "password ", "role_type ", "branch_id ", "position ", "status")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      insertValues
    );

    console.log("✅ User registered successfully with ID:", nextId);

    const user = userResult.rows[0];

    res.status(201).json({
      message: "User registered successfully",
      user: user
    });

  } catch (err) {
    console.error("❌ Registration error:", err);
    
    res.status(500).json({ 
      error: "Internal server error. Please try again.",
      details: err.message 
    });
  }
});

// Login endpoint
app.post("/api/auth/login", async (req, res) => {
  try {
    console.log("📥 Received login request:", req.body);
    
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user by email
    const userResult = await pool.query(
      'SELECT * FROM "Users" WHERE "email" = $1',
      [email]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = userResult.rows[0];

    // Simple password comparison (since passwords are stored in plain text during testing)
    if (user["password "] !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    console.log("✅ Login successful for user:", user.email);

    // Extract role_type from array format if needed
    let role_type = user["role_type "];
    if (Array.isArray(role_type) && role_type.length > 0) {
      role_type = role_type[0];
    } else if (typeof role_type === 'string' && role_type.startsWith('{') && role_type.endsWith('}')) {
      role_type = role_type.slice(1, -1); // Remove curly braces
    }

    // Clean user object for response
    const cleanUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role_type: role_type,
      branch_id: user["branch_id "],
      position: user["position "],
      status: user.status
    };

    res.json({
      message: "Login successful",
      user: cleanUser
    });

  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ 
      error: "Internal server error. Please try again.",
      details: err.message 
    });
  }
});

// Get all users endpoint
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Users" ORDER BY "id" DESC LIMIT 10');
    res.json({
      count: result.rows.length,
      users: result.rows
    });
  } catch (err) {
    console.error("❌ Get users error:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`👤 Register user: POST http://localhost:${PORT}/users`);
  console.log(`🔐 Login: POST http://localhost:${PORT}/api/auth/login`);
  console.log(`👥 Get users: GET http://localhost:${PORT}/users`);
});