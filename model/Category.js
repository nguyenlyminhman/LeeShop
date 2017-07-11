const queryDB = require('../utils/Database');

class Category {
    constructor(cateId, cateName, cateParent) {
        this.cateId = cateId;
        this.cateName = cateName;
        this.cateParent = cateParent
    }

    static getCategory(cb) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM "category"`;
            queryDB(sql, [], (err, result) => {
                if (err) return reject(err);
               resolve(undefined, result.rows);
            })
        });
    }
}

module.exports = Category;
Category.getCategory((err, rows) => {
    if (err) return console.log(err);
    console.log(rows);
});