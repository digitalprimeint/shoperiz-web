plugdo.collector("plugdoModalComponent", {
  type: "http",
  action: "get",
  url: "https://shoperiz.plugdo.com/component/modal.html"
  });

  plugdo.collector("plugdoComponentProfile", {
    type: "http",
    action: "get",
    url: "https://shoperiz.plugdo.com/secure/profile"
    });

    plugdo.collector("plugdoComponentSale", {
      type: "http",
      action: "get",
      url: "https://shoperiz.plugdo.com/secure/sales"
      });