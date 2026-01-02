import dayjs from 'dayjs';
import { prisma } from './../lib/prisma';
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";


export async function getActivities(app: FastifyInstance) {

  app.withTypeProvider<ZodTypeProvider>().get('/trips/:tripId/activities', {
    schema: {
      params: z.object({
        tripId: z.string().uuid(),
      })
    }

  }, 
  async (request, reply) => {

    const {tripId} = request.params;


    const trip = await prisma.trip.findUnique({
      where: {
        id: tripId,
      },
      include: {
        activities: true,
      } 
    })

    if(!trip){
      return new Error('Trip not found'  );
    }

    return {activities: trip.activities };
  },
  )
}