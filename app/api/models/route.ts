import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.TUNNEL}/api/models`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Backend returned error:", res.status);
      return NextResponse.json(
        { error: "Backend fetch failed" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching models:", err);
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}
