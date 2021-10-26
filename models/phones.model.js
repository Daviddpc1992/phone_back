const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("select * from heroku_71e322468e54ac5.phone", (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    getAll
}