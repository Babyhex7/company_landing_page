"use strict";

/**
 * project service
 * Business logic untuk operasi project
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::project.project");
