export enum FeatureFlag {
  TRANSCRIPTION = "transcription",
  IMAGE_GENERATION = "image_generation",
  ANALYSE_VIDEO = "analyse_video",
  TITLE_GENERATIONS = "title_generations",
  SCRIPT_GENERATION = "script_generation",
}

export const featureFlagEvents: Record<FeatureFlag, { event: string }> = {
  [FeatureFlag.TRANSCRIPTION]: {
    event: "transcribe",
  },
  [FeatureFlag.IMAGE_GENERATION]: {
    event: "generate_image",
  },
  [FeatureFlag.ANALYSE_VIDEO]: {
    event: "analyse_video",
  },
  [FeatureFlag.TITLE_GENERATIONS]: {
    event: "generate_title",
  },
  [FeatureFlag.SCRIPT_GENERATION]: {
    event: "",
  },
};
