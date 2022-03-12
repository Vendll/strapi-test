module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5713d668f8d333fa201f8303b0f638e4'),
  },
});
