import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { getLugares, postLugar, updateLugares } from '../controllers/lugar.controller.js';

const router = Router();
const prisma = new PrismaClient();

router.get('/', getLugares);
router.post('/', postLugar);
router.put('/:id', updateLugares);

export default router;
