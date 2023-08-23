import { RateLimiter } from "limiter";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/revalidate?path=/posts&secret=d9a85ee4ae4c0ed3fc0505622042b3a213e9700eab4f9f

const limiter = new RateLimiter({ tokensPerInterval: 4, interval: "min" });

export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	const path = request.nextUrl.searchParams.get("path") || "/";

	const remainingRequests = await limiter.removeTokens(1);

	if (secret !== process.env.MY_SECRET_TOKEN) {
		return NextResponse.json(
			{ message: "Invalid secret" },
			{ status: 401, statusText: "Unauthorized" }
		);
	}
	if (remainingRequests < 1) {
		return NextResponse.json(
			{
				message: "Too Many Requests - your IP is being rate limited",
				Headers: { "Content-Type": "text/plain;charset=UTF-8" },
			},
			{ status: 429 }
		);
	} else {
		revalidatePath(path);
		return NextResponse.json({ revalidated: true, now: Date.now() });
	}
}
