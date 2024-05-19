import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";
//import { useRouter} from "next/router"

export async function GET(req, { params }) {
  
  const section = await prisma.heading1.findUnique({
    where: { id: Number(params.slug) },
    include: {
      subSections: true,
    },
  });
  return NextResponse.json(section);
}
