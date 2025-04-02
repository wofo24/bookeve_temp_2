module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "*.bookeve.in" }],
        destination: "/[subdomain]",
      },
    ];
  },
};
