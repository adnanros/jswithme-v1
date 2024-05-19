import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { NextResponse } from "next/server"

export async function GET(req) {
    const sections = await prisma.heading1.findMany({
      include: {
        subSections: true,
      },
    });
    return NextResponse.json(sections);
  }