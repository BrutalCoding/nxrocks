
module.exports = {
  changelog: true,
  npm: true,
  github: true,
  repositoryUrl: "https://github.com/tinesoft/nxrocks",
  commitMessage: "chore(release): 🚀 release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
  tagFormat: "${PROJECT_NAME}/v${VERSION}",
  buildTarget: "${PROJECT_NAME}:build",
  outputPath: '${WORKSPACE_DIR}/dist/packages/${PROJECT_NAME}'
}
