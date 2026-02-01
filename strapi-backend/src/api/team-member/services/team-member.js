'use strict';

/**
 * team-member service
 * Business logic untuk operasi team-member
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::team-member.team-member');
