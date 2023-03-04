const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
  getLocationRange,
  getNoteComments,
};

function get(id) {
    let query = db("notes as n");

    if (id) {
      return query
        .where("n.id", id)
        .first();
    } else {
      return query;
    }
}

function insert(note) {
  return db("notes")
    .insert(note)
    .then(([id]) => get(id));
}

function update(id, changes) {
  return db("notes")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db("notes")
    .where("id", id)
    .del();
}

function getLocationRange(minLat, minLong, maxLat, maxLong) {
    return db("notes")
    .whereBetween("latitude", [minLat, maxLat])
    .andWhereBetween("longitude", [minLong, maxLong]);
}

function getNoteComments(noteId) {
    return db("comments")
        .where("note_id", noteId);
}