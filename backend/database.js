import Database from 'better-sqlite3'
import { v4 as uuidv4 } from 'uuid'

let db = null

export const initDatabase = () => {
  db = new Database('app.db')
  db.pragma('journal_mode = WAL')


  db.exec(`
    CREATE TABLE IF NOT EXISTS user (
      id TEXT NOT NULL PRIMARY KEY,
      email TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS item (
      id TEXT NOT NULL PRIMARY KEY,
      name TEXT NOT NULL,
      status TEXT NOT NULL,
      userId TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  console.log('Database initialized')
}

export const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized')
  }
  return db
}

export const generateId = () => uuidv4()
