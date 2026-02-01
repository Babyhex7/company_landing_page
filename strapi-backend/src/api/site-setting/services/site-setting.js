"use strict";

/**
 * site-setting service
 * Business logic untuk site settings
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::site-setting.site-setting");
