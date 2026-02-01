"use strict";

/**
 * category controller
 * Menghandle semua request API untuk categories
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::category.category");
