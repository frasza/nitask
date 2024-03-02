import { Task } from '~/types/Task'

export default defineEventHandler(async (event) => {
  const body: Task = await readBody(event)

  const error = await addTask(body)

  if (error) {
    throw createError({ status: 400, message: 'Something went wrong' })
  }

  return {
    success: true,
    message: 'Task saved',
  }
})
