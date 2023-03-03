const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
  getLocationRange,
};

function get(id) {
    let query = db("notes as n");

    if (id) {
      return query
        .where("n.id", id)
        .first();
    } else {
      return query.then(projects => {
        return projects.map(project => mappers.projectToBody(project));
      });
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
    .andWhereBetween("longitude", [minLong, maxLong])
    .then(actions => actions.map(action => mappers.actionToBody(action)));
}
