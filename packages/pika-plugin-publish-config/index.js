/**
 * Pika plugin for "publishConfig" & "private" fields
 *
 * - ensures, that only pkg dir can be published
 * - enables configuring (multiple) publish configs
 */

/**
 *  @typedef { import("@pika/types").BuilderOptions } BuilderOptions
 */

/**
 *  @typedef { import("@pika/types").MessageError } MessageError
 */

/**
 * @param {BuilderOptions}
 * @returns {void}
 */
module.exports.beforeBuild = function ({ manifest, reporter }) {
  if (manifest.private === undefined) {
    reporter.warning('field "private" package.json is undefined! Set it to true, so only "pkg" dir can be published')
  }

  if (manifest.private === false) {
    reporter.warning('field "private" package.json is false! Set it to true, so only "pkg" dir can be published')
  }
}

/**
 * @param {object} newManifest
 * @param {BuilderOptions} props
 * @returns {object}
 */
module.exports.manifest = function (newManifest, props) {
  const {manifest, options} = props

  if (!manifest.private) {
    newManifest.private = false
  }

  if(!manifest.publishOptions) {
    newManifest.private = {access: "public", ...options}
  }

  return newManifest
}
