const Manager = require('../lib/Manager')
test('constructor return office number', () => {
    const officeNumber = '606'
    const manager = new Manager('JC', 1234, "email@email.com", officeNumber)
    expect (manager.officeNumber).toBe(officeNumber)
})