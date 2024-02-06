const school = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'ekushey february'],
    unique: {
        color: 'blue',
        result: {
            merit: 'top',
        }
    }
}
console.log(school.name)
console.log(school.unique)
console.log(school.unique.color)
console.log(school.unique.result.merit)

school.unique.result.merit = 'top most'
console.log(school.unique.result.merit)

school.events[1] = '16 dec',
    console.log(school.events)

delete school.class;
console.log(school)