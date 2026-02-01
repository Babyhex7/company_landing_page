"use strict";

/**
 * homepage controller
 * Menghandle request untuk homepage content
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::homepage.homepage");
