import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/revalidate?path=/posts&secret=d9a85ee4ae4c0ed3fc0505622042b3a213e9700eab4f9f

export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	const path = request.nextUrl.searchParams.get("path");

	if (secret !== process.env.MY_SECRET_TOKEN) {
		return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
	}

	if (!path) {
		return NextResponse.json(
			{ message: "Missing path param" },
			{ status: 400 }
		);
	}

	revalidatePath(path);

	return NextResponse.json({ revalidated: true, now: Date.now() });
}
