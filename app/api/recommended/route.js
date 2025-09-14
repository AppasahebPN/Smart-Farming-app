import { NextResponse } from "next/server";
import crops from "@/data/crops.json";


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const soil = searchParams.get("soil");
  const month = parseInt(searchParams.get("month"));

  // Filter crops by soil + month
  const recs = crops
    .filter((c) => c.soil === soil && c.months.includes(month))
    .map((c) => ({
      crop: c.crop,
      season: c.season,
      avgYield: c.avg_yield,
      yields: c.yields || {} // pass yearly yield data for charts
    }));

  return NextResponse.json({ recommendations: recs });
}

