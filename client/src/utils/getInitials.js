const getInitials = (person) => {
    return person.split(' ').reduce((accumulator, value) => {
        return `${accumulator}${value.charAt(0).toLocaleUpperCase()}`
    }, '')
}

export default getInitials