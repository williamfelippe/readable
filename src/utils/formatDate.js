import moment from 'moment'

const DATE_LIMIT = 31

const formatDate = (date) => {
    if (moment(date).isValid()) {
        
        const daysPasted = getDaysPastFromToday(date)

        if(daysPasted <= DATE_LIMIT) {
            const formattedDate = moment(date).format("YYYYMMDD")
            return moment(formattedDate, "YYYYMMDD").fromNow()
        }

        return moment(date).format("DD/MM/YYYY")
    }

    return ''
}

const getDaysPastFromToday = (date) => {
    return -moment(date).diff(moment(Date.now()), 'days')
}

export default formatDate