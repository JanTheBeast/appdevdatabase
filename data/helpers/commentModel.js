const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
  getReportedComments,
};

function get(id) {
    let query = db("comments as c");
  
    if (id) {
      return query
        .where("c.id", id)
        .first();
    } else {
      return query;
    }
  }
  
  function insert(comment) {
    return db("comments")
      .insert(comment)
      .then(([id]) => get(id));
  }
  
  function update(id, changes) {
    return db("comments")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? get(id) : null));
  }
  
  function remove(id) {
    return db("comments")
      .where("id", id)
      .del();
  }

  function getReportedComments() {
    return db("comments").where('reports', '>', 0);
  }