module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '22df6ce3fa19c50c3afd7e8b7b89a2cf'),
    },
  },
});
