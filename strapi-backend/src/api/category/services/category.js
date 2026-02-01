"use strict";

/**
 * category service
 * Business logic untuk operasi category
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::category.category");
