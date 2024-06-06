import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";

export async function DELETE(
    req: Request,
    { params }: { params: { channelId: string } }
  ) {
    try {
        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 });
          }
      
          if (!serverId) {
            return new NextResponse("Server ID missing", { status: 400 });
          }
      
          if (!params.channelId) {
            return new NextResponse("Channel ID missing", { status: 400 });
          }
      
          if(name === "general"){
            return new NextResponse("Channel name cannot be 'general'", { status: 400 });
          }
      
    }catch (error) {
        console.log("[CHANNEL_ID_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 });
      }
}