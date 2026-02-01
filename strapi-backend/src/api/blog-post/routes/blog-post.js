'use strict';

/**
 * blog-post router
 * Mendefinisikan endpoint URL untuk blog-post API
 * GET /api/blog-posts - ambil semua blog posts
 * GET /api/blog-posts/:id - ambil satu blog post
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog-post.blog-post');
