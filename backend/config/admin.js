module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3abfa69f465dcc809609082f9dace68c'),
  },
});
