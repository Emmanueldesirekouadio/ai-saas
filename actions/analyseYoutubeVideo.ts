"use server";

import { getVideoIdFromUrl } from "@/lib/getVideoIdFromUrl";
import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();

  if (!url) return;

  const videoId = getVideoIdFromUrl(url);

  console.log(videoId);
  if (!videoId) return;

  return redirect(`/video/${videoId}/analysis`);
}
