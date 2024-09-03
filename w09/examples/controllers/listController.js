// import data - the MODEL
const { lists, tasks } = require("../data");

// Read all lists for a user
exports.list = async (req, res, next) => {
  const user_id = req.signedCookies.user_id;
  const data = lists
    .filter((lst) => lst.user_id == user_id)
    .map((lst) => {
      return { id: lst.id, name: lst.name };
    });
  res.json(data);
};

// Read a list detail
exports.get = async (req, res, next) => {
  const listID = req.params.listID;
  // get list
  const data = lists.filter((lst) => lst.id == listID)[0];
  // get all tasks in list
  data.tasks = tasks.filter((t) => t.list_id == listID);
  res.json(data);
};

// Create a new list for a user
exports.create = async (req, res, next) => {
  const user_id = req.signedCookies.user_id;
  const listName = req.body.name; 
 
  // generate a new id
  const ids = lists.map(lst => lst.id);
  const max_id = Math.max(...ids);
  const new_id = max_id + 1;
  lists.push({ id: new_id, name: listName, user_id: user_id });
  res.json({id: new_id});
};

// Update a list
exports.update = async (req, res, next) => {
  const listID = req.params.listID;
  const newName = req.body.name;

  for (let idx = 0; idx < lists.length; idx++) {
    if (lists[idx].id == listID) {
      lists[idx].name = newName;
      break;
    }
  }
  
  res.json({id: listID});
};

// Delete a list
exports.delete = async (req, res, next) => {
  const listID = req.params.listID;
  // delete all related tasks
  const taskTemp = tasks.filter((t) => t.list_id != listID);
  tasks.length = 0; // clear all tasks
  taskTemp.forEach((t) => tasks.push(t)); // copy from temp to tasks

  // delete the list
  for (let idx = 0; idx < lists.length; idx++) {
    if (lists[idx].id == listID) {
      lists.splice(idx, 1);
      break;
    }
  }

  res.json({ msg: `List ${listID} deleted` });
};
