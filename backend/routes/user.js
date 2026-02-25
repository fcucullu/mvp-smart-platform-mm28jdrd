import { Router } from 'express'
import { getDb, generateId } from '../database.js'

const router = Router()

// Get all users
router.get('/', (req, res) => {
  try {
    const db = getDb()
    const items = db.prepare('SELECT * FROM user ORDER BY created_at DESC').all()
    res.json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get user by ID
router.get('/:id', (req, res) => {
  try {
    const db = getDb()
    const item = db.prepare('SELECT * FROM user WHERE id = ?').get(req.params.id)
    if (!item) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create user
router.post('/', (req, res) => {
  try {
    const db = getDb()
    const id = generateId()
    const fields = Object.keys(req.body)
    const values = Object.values(req.body)

    const stmt = db.prepare(
      `INSERT INTO user (id, ${fields.join(', ')}) VALUES (?, ${fields.map(() => '?').join(', ')})`
    )
    stmt.run(id, ...values)

    const item = db.prepare('SELECT * FROM user WHERE id = ?').get(id)
    res.status(201).json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update user
router.put('/:id', (req, res) => {
  try {
    const db = getDb()
    const fields = Object.keys(req.body)
    const values = Object.values(req.body)

    const setClause = fields.map(f => `${f} = ?`).join(', ')
    const stmt = db.prepare(`UPDATE user SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`)
    stmt.run(...values, req.params.id)

    const item = db.prepare('SELECT * FROM user WHERE id = ?').get(req.params.id)
    res.json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete user
router.delete('/:id', (req, res) => {
  try {
    const db = getDb()
    db.prepare('DELETE FROM user WHERE id = ?').run(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
