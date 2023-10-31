import { Router } from 'express';

const router = Router();

router.get('/', (res, req) => {
   res.render('chat', {title: 'Coder House'});
});

export default router;
