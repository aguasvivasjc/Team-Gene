const Engineer = require('../lib/Engineer')
test('constructor return github', () => {
    const github = 'aguasvivasjc'
    const engineer = new Engineer('JC', 1234, "email@email.com", github)
    expect (engineer.github).toBe(github)
})