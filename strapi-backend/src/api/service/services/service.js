'use strict';

/**
 * service service
 * Business logic untuk operasi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service.service');
