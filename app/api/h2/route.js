import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";
//import { useRouter} from "next/router"

export async function GET(req) {
  const queryParam = req.nextUrl.searchParams.get("id");
  console.log(queryParam);

  //const { slug } = req.query;
  const heading2 = await prisma.heading2.findUnique({
    where: { id: Number(queryParam) },
    include: {
      subSections: true,
    },
  });
  return NextResponse.json(heading2);
}