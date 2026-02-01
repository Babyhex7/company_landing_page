"use strict";

/**
 * service controller
 * Menghandle semua request API untuk services
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::service.service");
