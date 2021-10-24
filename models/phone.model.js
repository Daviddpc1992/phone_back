const getByIdPhone = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM phones.phone WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })
}

const createPhone = ({
    name,
    manufacturer,
    description,
    color,
    price,
    imageFile,
    screen,
    processor,
    ram
}) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO phone (name, manufacturer, description, color ,price ,imageFile,screen ,processor ,ram) VALUES (?,?,?,?,?,?,?,?,?);', [name, manufacturer, description, color, price, imageFile, screen, processor, ram], (err, row) => {
            if (err) reject(err);
            resolve(row)
        })
    })
}

const updatePhone = (id, {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFile,
    screen,
    processor,
    ram
}) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE phone SET  name = ? , manufacturer = ?, description = ?, color = ? , price= ?, imageFileName= ?, screen= ?,  processor= ?, ram= ? WHERE id = ?;', [name, manufacturer, description, color, price, imageFile, screen, processor, ram, id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })
}


module.exports = {
    getByIdPhone,
    updatePhone,
    createPhone
}

/*
id, name, manufacturer, description, color ,price ,imageFileName,screen ,processor ,ram
 */