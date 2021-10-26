const getByIdPhone = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM heroku_71e322468e54ac5.phone WHERE id = ?', [id], (err, row) => {
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
        db.query('INSERT INTO heroku_71e322468e54ac5.phone (name, manufacturer, description, color, price, imageFile, screen, processor, ram) VALUES (?,?,?,?,?,?,?,?,?);', [name, manufacturer, description, color, price, imageFile, screen, processor, ram], (err, row) => {
            if (err) reject(err);
            resolve(row)
        })
    })
}

const updatePhone = (id, {
    name, manufacturer, description, color, price, imageFile, screen, processor, ram
}) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE heroku_71e322468e54ac5.phone SET name = ? , manufacturer = ?, description = ?, color = ? , price = ?, imageFile = ?, screen = ?,  processor = ?, ram = ? where id = ?;", [name, manufacturer, description, color, price, imageFile, screen, processor, ram, id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })
}
const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query(
            "delete from heroku_71e322468e54ac5.phone where id = ?",
            [pId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
};

module.exports = {
    getByIdPhone,
    updatePhone,
    createPhone,
    deleteById
}

/*
id, name, manufacturer, description, color ,price ,imageFileName,screen ,processor ,ram
 */