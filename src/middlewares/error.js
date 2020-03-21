export default function errorMiddleware() {
  return next => action => {
    const result = next(action)

    if (!(result instanceof Promise)) {
      return action
    }

    return result.catch(() => {})
  }
}
