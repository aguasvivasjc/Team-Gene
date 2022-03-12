const Intern = require('../lib/Intern')
test('constructor return school', () => {
    const school = 'UNH'
    const intern = new Intern('JC', 1234, "email@email.com", school)
    expect (intern.school).toBe(school)
})