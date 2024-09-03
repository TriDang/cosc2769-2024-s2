const users = [
  { id: 1, name: "Alice", username: "alice", password: "password" },
  { id: 2, name: "Bob", username: "bob", password: "123456" },
];

const lists = [
  { id: 1, name: "Personal", user_id: 1 },
  { id: 2, name: "Work", user_id: 1 },
  { id: 3, name: "Test", user_id: 2 },
];

const tasks = [
  { id: 1, name: "Exercise", deadline: "2024-08-27", list_id: 1 },
  { id: 2, name: "Watch TV", deadline: "2024-08-28", list_id: 1 },
  {
    id: 3,
    name: "Submit Full Stack Dev Project",
    deadline: "2024-09-06",
    list_id: 2,
  },
];

exports.users = users;
exports.lists = lists;
exports.tasks = tasks;