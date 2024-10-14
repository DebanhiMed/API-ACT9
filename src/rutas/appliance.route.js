import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    const users = await prisma.appliances.findMany();
    
    res.json(users);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const appliances = await prisma.appliances.findUnique({
        where: {
            applianceid: parseInt(id),
        },
    });

    res.json(appliances);
});

router.post("/", async (req, res) => {
    const { userid, name, type, wattage, description} = req.body;

    const appliance = await prisma.appliances.create({
        data: {
            userid,
            name,
            type,
            wattage,
            description,
        },
    });

    res.json(appliance);
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { userid, name, type, wattage, description } = req.body;

    const appliance = await prisma.appliances.update({
        where: {
            applianceid: parseInt(id),
        },
        data: {
            userid,
            name,
            type,
            wattage,
            description,
        },
    });

    res.json(appliance);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const appliance = await prisma.appliances.delete({
        where: {
            applianceid: parseInt(id),
        },
    });

    res.json(appliance);
});

export default router;