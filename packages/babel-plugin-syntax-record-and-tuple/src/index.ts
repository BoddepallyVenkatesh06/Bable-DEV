import { declare } from "@babel/helper-plugin-utils";

export interface Options {
  syntaxType: "hash" | "bar";
}

export default declare((api, options: Options) => {
  api.assertVersion(
    process.env.BABEL_8_BREAKING && process.env.IS_PUBLISH
      ? PACKAGE_JSON.version
      : 7,
  );

  return {
    name: "syntax-record-and-tuple",

    manipulateOptions(opts, parserOpts) {
      opts.generatorOpts.recordAndTupleSyntaxType = options.syntaxType;

      parserOpts.plugins.push([
        "recordAndTuple",
        { syntaxType: options.syntaxType },
      ]);
    },
  };
});
