import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send(200)
});

import emoji from './api/emojis';
router.use('/emoji', emoji)

export default router;