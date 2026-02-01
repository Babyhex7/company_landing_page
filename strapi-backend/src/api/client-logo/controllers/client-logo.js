'use strict';

/**
 * client-logo controller
 * Menghandle semua request API untuk client logos
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client-logo.client-logo');
