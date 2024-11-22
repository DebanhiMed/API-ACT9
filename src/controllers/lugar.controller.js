import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//req queries, parameters
//res resultado en json

export const getLugares = async (req, res) => {
  const lugares = await prisma.lugar.findMany();
  res.json(lugares);
}

export const postLugar = async (req, res) => {
  const { pais, continente, estado, date, imageUrl } = req.body;
  const lugar = await prisma.lugar.create({
    data: {
      pais,
      continente,
      estado,
      date,
      imageUrl
    }
  })
  res.json(lugar)
}

export const updateLugares = async (req, res) => {
  const { id } = req.params;
  const { pais, continente, estado, date, imageUrl } = req.body;
  const lugar = await prisma.lugar.update({
    where: {
      lugarid: parseInt(id)
    },
    data: {
      pais,
      continente,
      estado,
      date,
      imageUrl
    }
  })
  res.json(lugar)
}