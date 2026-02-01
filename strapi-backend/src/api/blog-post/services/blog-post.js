"use strict";

/**
 * blog-post service
 * Business logic untuk operasi blog-post
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::blog-post.blog-post");
