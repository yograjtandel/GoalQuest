import auth0 from '../../../src/utility/auth0';

export default auth0.withApiAuthRequired(async function getToken(req, res) {
  const { accessToken } = await auth0.getAccessToken(req, res);
  res.status(200).json({ accessToken });
});
