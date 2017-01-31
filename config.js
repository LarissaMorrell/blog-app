exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       'mongodb://dbuser:dbpassword@ds137749.mlab.com:37749/blog';
exports.PORT = process.env.PORT || 8080;