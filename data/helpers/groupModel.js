const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
    get,
    insert,
    update,
    remove,
    removeMember,
    addMember,
    getMembers,
    getNotes,
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

function removeMember(id, user_id) {
    return db("groupAccountRelations")
        .where("group_id", id)
        .andWhere("user_id", user_id)
        .del();
}

function addMember(group_id, user_id) {
    return db("groupAccountRelations")
        .insert({ "user_id": user_id, "group_id": group_id })
        .then(([id]) => get(id));
}

function getMembers(id) {
    subquery = db("groupAccountRelations")
        .select("user_id")
        .where("group_id", id);

    return db("accounts")
        .whereIn("id", subquery);
}

function getNotes(id) {
    return db("notes").where("group_id", id);
}