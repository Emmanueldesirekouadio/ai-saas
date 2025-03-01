import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  images: defineTable({
    userId: v.string(),
    videoId: v.string(),
    storageId: v.string(),
  }).index("by_user_and_video", ["userId", "videoId"]),
});
