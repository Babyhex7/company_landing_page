"use strict";

/**
 * homepage service
 * Business logic untuk homepage
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::homepage.homepage");
