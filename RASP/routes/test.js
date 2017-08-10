import Router from 'koa-router'

const api = 'test'

const router = new Router();

router.prefix(`/${api}`)
// GET /api/city
router.get('/', async(ctx) =>
  ctx.body = 'hello world')



export default router