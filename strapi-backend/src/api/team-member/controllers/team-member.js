"use strict";

/**
 * team-member controller
 * Menghandle semua request API untuk team members
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::team-member.team-member");
