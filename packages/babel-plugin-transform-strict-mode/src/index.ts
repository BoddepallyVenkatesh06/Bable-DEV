import { declare } from "@babel/helper-plugin-utils";
import { types as t } from "@babel/core";

export default declare(api => {
  api.assertVersion(
    process.env.BABEL_8_BREAKING && process.env.IS_PUBLISH
      ? PACKAGE_JSON.version
      : 7,
  );

  return {
    name: "transform-strict-mode",

    visitor: {
      Program(path) {
        const { node } = path;

        for (const directive of node.directives) {
          if (directive.value.value === "use strict") return;
        }

        path.unshiftContainer(
          "directives",
          t.directive(t.directiveLiteral("use strict")),
        );
      },
    },
  };
});
