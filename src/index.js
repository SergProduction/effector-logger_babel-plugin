
module.exports = function effector_logger({ t, ...p }, pluginOptions) {
  return {
    name: 'effector-logger',
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value === 'effector') {
          if (!pluginOptions || pluginOptions.off !== true) {
            path.node.source.value = 'effector-logger'
          }
        }
      },
    },
  };
}