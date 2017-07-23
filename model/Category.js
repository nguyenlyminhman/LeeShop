const queryDB = require('../utils/Database');

class Category {
    constructor(cateId, cateName, cateParent) {
        this.cateId = cateId;
        this.cateName = cateName;
        this.cateParent = cateParent
    }

    static getCategory() {
        let sql = 'select * from "category"';
        return queryDB(sql, [])
            .then(result => result.rows);
    }
}
module.exports = Category;

Category.getCategory().then(a=>console.log(a))