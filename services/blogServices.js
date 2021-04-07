var config = require('../config/config');
var response = require('../config/response');


const createBlog = async(req, res) => {
    try {
        let author = req.body.author;
        let category = req.body.category;
        let date = req.body.date
        let blogTitle = req.body.blogTitle;
        let tag = req.body.tag;
        let blog_body = req.body.blog_body;

         // database object setup
         const db = req.app.locals.db;
         let dba = db.db(config.fact_dr_db_2);
        
         let dataObj = {
            author,
            category,
            date,
            blogTitle,
            tag,
            blog_body

        }

        let result = await dba.collection(config.blogCollection).insertOne(dataObj);
        if (result.insertedCount) {
            res.status(200).send(response.successful_insert)
        } else {
            res.status(400).send(failed_to_insert)
        }
    } catch (error) {
        res.status(400).send(error)
        
    }
}
        

        

module.exports.createBlog = createBlog;
