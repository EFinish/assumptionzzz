console.log('starting ass-server!')

const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const db = require('./db');

router.get('/statements', async (ctx, next) => {

	ctx.body = {
		success: true,
		// allStatments
	};
	return next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(425, function() {
	console.log('ass-server listening on 425! .....')
});
