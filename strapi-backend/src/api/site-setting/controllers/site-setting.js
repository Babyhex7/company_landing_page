'use strict';

/**
 * site-setting controller
 * Menghandle request untuk site settings
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::site-setting.site-setting');
