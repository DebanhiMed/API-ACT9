import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    const users = await prisma.user.findMany();

    res.json(users);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
        where: {
            userid: parseInt(id),
        },
    });

    res.json(user);
});

router.post('/', async (req, res) => {
    const { name, lastname, email } = req.body;

    const user = await prisma.user.create({
        data: {
            name,
            lastname,
            email,
        },
    });

    res.json(user);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, lastname, email } = req.body;

    const user = await prisma.user.update({
        where: {
            userid: parseInt(id),
        },
        data: {
            name,
            lastname,
            email,
        },
    });

    res.json(user);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const user = await prisma.user.delete({
        where: {
            userid: parseInt(id),
        },
    });

    res.json(user);
});

export default router;
