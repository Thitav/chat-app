class AppError {
  message: unknown
  statusCode: number

  constructor(statusCode: number, message: unknown) {
    this.statusCode = statusCode
    this.message = message
  }
}

export default AppError
