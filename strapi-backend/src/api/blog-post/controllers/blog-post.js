"use strict";

/**
 * blog-post controller
 * Menghandle semua request API untuk blog posts
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog-post.blog-post");
