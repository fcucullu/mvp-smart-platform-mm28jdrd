import { Router } from 'express'
import { getDb, generateId } from '../database.js'

const router = Router()

// Get all items
router.get('/', (req, res) => {
  try {
    const db = getDb()
    const items = db.prepare('SELECT * FROM item ORDER BY created_at DESC').all()
    res.json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get item by ID
router.get('/:id', (req, res) => {
  try {
    const db = getDb()
    const item = db.prepare('SELECT * FROM item WHERE id = ?').get(req.params.id)
    if (!item) {
      return res.status(404).json({ error: 'Item not found' })
    }
    res.json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create item
router.post('/', (req, res) => {
  try {
    const db = getDb()
    const id = generateId()
    const fields = Object.keys(req.body)
    const values = Object.values(req.body)

    const stmt = db.prepare(
      `INSERT INTO item (id, ${fields.join(', ')}) VALUES (?, ${fields.map(() => '?').join(', ')})`
    )
    stmt.run(id, ...values)

    const item = db.prepare('SELECT * FROM item WHERE id = ?').get(id)
    res.status(201).json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update item
router.put('/:id', (req, res) => {
  try {
    const db = getDb()
    const fields = Object.keys(req.body)
    const values = Object.values(req.body)

    const setClause = fields.map(f => `${f} = ?`).join(', ')
    const stmt = db.prepare(`UPDATE item SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`)
    stmt.run(...values, req.params.id)

    const item = db.prepare('SELECT * FROM item WHERE id = ?').get(req.params.id)
    res.json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete item
router.delete('/:id', (req, res) => {
  try {
    const db = getDb()
    db.prepare('DELETE FROM item WHERE id = ?').run(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
