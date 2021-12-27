module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13ef6aac553e5cacdc890fea2a16104d'),
  },
});
