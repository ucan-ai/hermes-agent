(function () {
  const SDK = window.__HERMES_PLUGIN_SDK__;
  if (!SDK || !window.__HERMES_PLUGINS__) return;

  const { React } = SDK;
  const { Card, CardHeader, CardTitle, CardContent } = SDK.components;

  function ExamplePluginPage() {
    return React.createElement(
      "div",
      { className: "space-y-4" },
      React.createElement(
        Card,
        null,
        React.createElement(
          CardHeader,
          null,
          React.createElement(CardTitle, null, "Example Dashboard Plugin"),
        ),
        React.createElement(
          CardContent,
          { className: "text-sm text-muted-foreground" },
          "Frontend bundle loaded successfully. Backend route: /api/plugins/example/hello",
        ),
      ),
    );
  }

  window.__HERMES_PLUGINS__.register("example", ExamplePluginPage);
})();
