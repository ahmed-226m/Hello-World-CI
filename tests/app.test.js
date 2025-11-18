const request = require('supertest')
const app = require('../src/index')

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('Hello from GitHub Actions! 🚀')
  })
})

describe('GET /health', () => {
  it('should return OK', async () => {
    const res = await request(app).get('/health')
    expect(res.statusCode).toBe(200)
    expect(res.text).toBe('OK')
  })
})