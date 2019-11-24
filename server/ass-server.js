const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const statementsModel = require('./models/statements');

router.get('/statements', async (ctx, next) => {
	// const allStatments = await statementsModel().getAllStatements();

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
