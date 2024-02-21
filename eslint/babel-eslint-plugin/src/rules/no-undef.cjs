const ruleComposer = require("eslint-rule-composer");
const eslint = require("eslint");

const rule = new eslint.Linter().getRules().get("no-undef");

/**
 * Returns whether a node is under a decorator or not.
 * @param  {ASTNode}  node CallExpression node
 * @returns {Boolean} Returns true if the node is under a decorator.
 */
function isAccessorFieldName(node) {
  return (
    node.parent.type === "ClassAccessorProperty" &&
    node.parent.key === node &&
    !node.parent.computed
  );
}

module.exports = ruleComposer.filterReports(
  rule,
  problem => !isAccessorFieldName(problem.node),
);
