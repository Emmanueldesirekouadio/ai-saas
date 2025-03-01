if (!process.env.CLERK_ISSUE_URL) {
  throw new Error("CLERK_ISSUE_URL is not set");
}

export default {
  providers: [
    {
      domain: process.env.CLERK_ISSUE_URL,
      applicationID: "convex",
    },
  ],
};
