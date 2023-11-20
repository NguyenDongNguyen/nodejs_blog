const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    app.use("/", siteRouter)

    app.use("/news", newsRouter)

    app.use("/search", siteRouter)

}

module.exports = route