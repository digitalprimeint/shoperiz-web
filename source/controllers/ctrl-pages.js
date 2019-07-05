mvc.controller({
  name: "Dashboard",
  action: "dashboard",
  path: "/",
  view: "dashboard.ejs"
}, "dashboardDependencies", function (req, dashboardDependencies) {
  return dashboardDependencies.returnAll();
});