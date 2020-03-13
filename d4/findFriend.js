const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];
const findFriend = function (data, name, field) {
  let fields = Object.keys(data[0]);
  fields = fields.slice(1, fields.length - 1);
  console.log(fields)

  if (!fields.includes(field)) {
    return "Not found";
  } else {
    results = {};
    data.forEach(contact => {
      if (contact.name === name) {
        results["name"] = contact.friends[0];
      }
    })
    data.forEach(contact => {
      if (contact.name === results["name"]) {
        results[field] = contact[field];
      }
    })
    if (results.name == undefined) {
      return "Not found"
    }
    return results
  }

};

console.log(findFriend(contacts, "Abbott", "pone"))


console.log(findFriend(contacts, "Linh", "phone"))

console.log(findFriend(contacts, "Abbott", "phone"));

