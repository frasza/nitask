export default defineEventHandler(async (event) => {
  const tasks = await getTasks()

  return tasks
})
