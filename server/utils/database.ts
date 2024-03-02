import { Task } from '~/types/Task'

export function migrateDatabase() {
  const db = useDatabase()
  db.sql`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    body TEXT,
    status TEXT,
    user_id TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`
}

export async function addTask(task: Partial<Task>) {
  const db = useDatabase()
  const { error } =
    await db.sql`INSERT INTO tasks (title, body, status, user_id) VALUES (${task.title}, ${task.body}, ${task.status}, ${task.user_id})`

  return error
}

export async function getTasks() {
  const db = useDatabase()
  const { rows } = await db.sql`SELECT * FROM tasks ORDER BY created_AT ASC`
  return rows as {
    id: number
    title: string
    body: string
    status: string
    user_id: string
    created_at: number
  }[]
}
