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