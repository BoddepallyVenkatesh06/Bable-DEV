/* eslint-disable @babel/development/plugin-name */

import { declare } from "@babel/helper-plugin-utils";
import {
  createClassFeaturePlugin,
  FEATURES,
} from "@babel/helper-create-class-features-plugin";

export interface Options {
  loose?: boolean;
}

export default declare((api, options: Options) => {
  api.assertVersion(
    process.env.BABEL_8_BREAKING && process.env.IS_PUBLISH
      ? PACKAGE_JSON.version
      : 7,
  );

  return createClassFeaturePlugin({
    name: "transform-class-properties",

    api,
    feature: FEATURES.fields,
    loose: options.loose,

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("classProperties", "classPrivateProperties");
    },
  });
});
