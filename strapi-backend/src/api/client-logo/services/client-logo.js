'use strict';

/**
 * client-logo service
 * Business logic untuk operasi client-logo
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-logo.client-logo');
