import commander from "commander";
import { buildExternalHelpers } from "@babel/core";

function collect(value: unknown, previousValue: Array<string>): Array<string> {
  // If the user passed the option with no value, like "babel-external-helpers --whitelist", do nothing.
  if (typeof value !== "string") return previousValue;

  const values = value.split(",");

  if (previousValue) {
    previousValue.push(...values);
    return previousValue;
  }
  return values;
}

commander.option(
  "-l, --whitelist [whitelist]",
  "Whitelist of helpers to ONLY include",
  collect,
);
commander.option(
  "-t, --output-type [type]",
  "Type of output (global|umd|var)",
  "global",
);

commander.usage("[options]");
commander.parse(process.argv);

console.log(buildExternalHelpers(commander.whitelist, commander.outputType));
