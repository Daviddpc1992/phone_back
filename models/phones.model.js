const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("select * from phones.phone", (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    getAll
}