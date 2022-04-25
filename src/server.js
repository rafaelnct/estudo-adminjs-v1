import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'

const app = express()

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [],
})

const router = AdminJSExpress.buildRouter(adminJS)

app.use(adminJS.options.rootPath, router)
app.listen(8080, () => {
    console.log('AdminJS rodando em: http://localhost:8080/admin')
})
