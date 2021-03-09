const formatDate = date => {
    // const splitDate = date.split("T")[0];
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];

    const dateString = `${day}/${month}/${year}`;
    
    // const time = date.split("T")[1];
    // const hour = time.split(":")[0];
    // const minutes = time.split(":")[1];

    // const timeString = `${hour}:${minutes}`;
        

    return dateString
}

export default formatDate;