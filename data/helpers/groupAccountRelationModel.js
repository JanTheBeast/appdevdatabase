const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
    let query = db("groupAccountRelations as g");

    if (id) {
      return query
        .where("g.id", id)
        .first();
    } else {
      return query;
    }
}

function insert(GARel) {
  return db("groupAccountRelations")
    .insert(GARel)
    .then(([id]) => get(id));
}

function update(id, changes) {
  return db("groupAccountRelations")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db("groupAccountRelations")
    .where("id", id)
    .del();
}