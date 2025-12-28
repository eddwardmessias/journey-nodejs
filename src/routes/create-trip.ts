import { FastifyInstance } from "fastify";
import z from "zod";


export async function createTrip(app: FastifyInstance) {

  app.post('/trips', async (request, reply) => {
    return "helo world";
  })
}