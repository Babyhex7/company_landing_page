"use strict";

/**
 * about-page service
 * Business logic untuk about page
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::about-page.about-page");
