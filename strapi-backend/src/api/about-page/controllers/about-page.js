'use strict';

/**
 * about-page controller
 * Menghandle request untuk about page content
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about-page.about-page');
