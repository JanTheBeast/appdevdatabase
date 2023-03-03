const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
    let query = db("accounts as a");

    if (id) {
      return query
        .where("a.id", id)
        .first();
    } else {
      return query;
    }
}

function insert(account) {
  return db("accounts")
    .insert(account)
    .then(([id]) => get(id));
}

function update(id, changes) {
  return db("accounts")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db("accounts")
    .where("id", id)
    .del();
}