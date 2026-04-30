// This s just a mocking API, in future we will integrate Shopify Storefront API

import { NextResponse } from "next/server";
import { testimonials } from "../../../db/testimonials";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: testimonials.length,
    data: testimonials,
  });
}