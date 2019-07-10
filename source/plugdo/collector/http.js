// plugdo.collector("readFile", {
//   type: "http",
//   action: "get",
//   url: "./content/templated/obj-template.json",
//   data: "",
//   headers: {},
//   json: false
// });



plugdo.collector("customerFiles", {
  type: "file",
  action: "read",
  path: plugdo.PATH + "/source/plugdo/collector/obj-template.xml",
  json: false
});

