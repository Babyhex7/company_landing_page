"use strict";

/**
 * project controller
 * Menghandle semua request API untuk portfolio projects
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::project.project");
