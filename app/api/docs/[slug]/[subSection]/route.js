import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";
//import { useRouter} from "next/router"

export async function GET(req, { params }) {
  console.log('params.slug-------',params.slug); // Heading1
  console.log('params.subSection-------',params.subSection); // Heading2
  
  //const queryParam = req.nextUrl.searchParams.get("id");
  //console.log(queryParam);

  
  //const { slug } = req.query;

  /**
   * Temoprorely use as the parent route in reteriving data by parent ID
   */
  const section = await prisma.heading2.findUnique({
    where: { id: Number(params.subSection) },
    include: {
      subSections: true,
    },
  });
  return NextResponse.json(section);
}
