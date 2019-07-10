mvc.controller({
  name: "home",
  action: "home",
  path: "",
  view: "home.ejs"
}, "homeDependencies", function (req, homeDependencies) {
  return homeDependencies.returnAll();
});

mvc.controller({
  name: "Dashboard",
  action: "product",
  path: "/product",
  view: "dashboard.ejs"
}, "dashboardDependencies", function (req, dashboardDependencies) {
  return dashboardDependencies.returnAll();
});
mvc.controller({
  name: "Dashboard",
  action: "template",
  path: "/template-data",
  view: "template-data.ejs"
}, "dashboardDependencies", function (req, dashboardDependencies) {
  return dashboardDependencies.returnAll();
});

mvc.controller({
  name: "Dashboard",
  action: "option-template",
  path: "/option-template",
  view: "option-template.ejs"
}, "dashboardDependencies", function (req, dashboardDependencies) {
  return dashboardDependencies.returnAll();
});

mvc.controller({
  name: "Dashboard",
  action: "lit-product",
  path: "/list-product",
  view: "list-product.ejs"
}, "dashboardDependencies", function (req, dashboardDependencies) {
  return dashboardDependencies.returnAll();
});