

const MapToDb = (formArray) => {
    //maps the array from From into object for DB
    let temp = {}

    formArray.forEach(item => {
        temp[item.id] = item.value
    })
    console.log('ready for db')
    console.log('temp: ', temp)

    return temp
}

export default MapToDb