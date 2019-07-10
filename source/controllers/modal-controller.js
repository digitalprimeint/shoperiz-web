mvc.controller({
  name: "component",
  action: "modal"
  }, function (req, send) {
    plugdo.collect("plugdoModalComponent").get({}, function (response, err) {
      if(err) {
        send({}, err);
      }
      else {
        send(response);
      }
  });
});

mvc.controller({
  name: "component",
  action: "profile"
  }, function (req, send) {
    plugdo.collect("plugdoComponentProfile").get({}, function (response, err) {
      if(err) {
        send({}, err);
      }
      else {
        send(response);
      }
  });
});

mvc.controller({
  name: "component",
  action: "sales"
  }, function (req, send) {
    plugdo.collect("plugdoComponentSale").get({}, function (response, err) {
      if(err) {
        send({}, err);
      }
      else {
        send(response);
      }
  });
});