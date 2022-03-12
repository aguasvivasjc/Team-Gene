const Employee = require('../lib/Employee')
test('Employee result will be object', () => {
    const employee = new Employee() 
    expect (typeof (employee)).toBe('object')
} )
test('constructor return name', () => {
    const name = 'JC'
    const employee = new Employee(name)
    expect (employee.name).toBe(name)
})

test('getName method return name', () => {
    const name = 'JC'
    const employee = new Employee(name)
    expect (employee.getName()).toBe(name)
})

test('constructor return id', () => {
    const id = 1234
    const employee = new Employee('JC', id)
    expect (employee.id).toBe(id)
})

test('getId method return id', () => {
    const id = 1234
    const employee = new Employee('JC', id)
    expect (employee.getId()).toBe(id)
})

test('constructor return email', () => {
    const email = 'aguasvivasjc@gmail.com'
    const employee = new Employee('JC', 1234, email)
    expect (employee.email).toBe(email)
})

test('getEmail method return email', () => {
    const email = 'aguasvivasjc@gmail.com'
    const employee = new Employee('JC', 1234, email)
    expect (employee.getEmail()).toBe(email)
})

test('getRole method return email', () => {
    const role = 'Employee'
    const employee = new Employee('JC', 1234, 'email@email.com')
    expect (employee.getRole()).toBe(role)
})