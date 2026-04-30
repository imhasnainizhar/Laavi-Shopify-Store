// Module-level singleton — initialized once when the server process starts.
// Survives across all requests until the server restarts.
// In future shopify bacnend can be integrated.

const SALE_DURATION_MS = (5 * 3600 + 11 * 60 + 43) * 1000;
const saleStartedAt = Date.now();
const saleEndsAt = saleStartedAt + SALE_DURATION_MS;

export async function GET() {
  const now = Date.now();
  const remainingMs = Math.max(0, saleEndsAt - now);

  return Response.json({
    saleEndsAt,       // absolute timestamp — use this as the Countdown target
    remainingMs,      // convenience: ms left right now
    isActive: remainingMs > 0,
  });
}