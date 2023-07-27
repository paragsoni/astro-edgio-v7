// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from '@edgio/core'
import { astroRoutes } from '@edgio/astro'

export default new Router().use(astroRoutes)
.match(/^\/_astro\/.*(css|js)/, ({proxy}) => { proxy('origin') })