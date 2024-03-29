import {
  injectVirtualStackFrame,
  expectedError,
} from "./rewrite-stack-trace.ts";

export default class ConfigError extends Error {
  constructor(message: string, filename?: string) {
    super(message);
    expectedError(this);
    if (filename) injectVirtualStackFrame(this, filename);
  }
}
