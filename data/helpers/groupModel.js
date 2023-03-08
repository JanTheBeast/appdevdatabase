const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
    let query = db("groups as g");

    if (id) {
      return query
        .where("g.id", id)
        .first();
    } else {
      return query;
    }
}

function insert(group) {
  return db("groups")
    .insert(group)
    .then(([id]) => get(id));
}

function update(id, changes) {
  return db("groups")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db("groups")
    .where("id", id)
    .del();
}