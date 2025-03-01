import { FeatureFlag } from "@/features/flags";
import { useSchematicEntitlement } from "@schematichq/schematic-react";
import { useState } from "react";
import Usage from "./Usage";

interface VideoAnalysis {
  summary: string;
  topics: string[];
}

function VideoAnalysis({ videoId }: { videoId: string }) {
  const [analysis, setAnalysis] = useState<VideoAnalysis | null>(null);
  const { featureUsageExceeded } = useSchematicEntitlement(
    FeatureFlag.ANALYSE_VIDEO
  );

  return (
    <div className="border p-4 pb-0 rounded-xl gap-4 flex flex-col">
      <Usage
        featureFlag={FeatureFlag.ANALYSE_VIDEO}
        title="AI Video Analysis"
      />

      {/* Analysis Content */}
      {!featureUsageExceeded ? (
        <div className="flex flex-col gap-4">
          {analysis ? (
            <>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">Summary</h3>
                <p className="text-sm text-gray-600">{analysis.summary}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">
                  Key Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {analysis.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8 px-4 rounded-lg border-2 border-dashed border-gray-200">
              <p className="text-gray-500">No analysis available yet</p>
              <p className="text-sm text-gray-400 mt-1">
                Analyze your video to see insights here
              </p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default VideoAnalysis;
