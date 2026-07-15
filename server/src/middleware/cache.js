export const cacheMiddleware = (maxAge = 60) => (req, res, next) => {
  res.setHeader("Cache-Control", `public, max-age=${maxAge}, s-maxage=${maxAge}`);
  next();
};
