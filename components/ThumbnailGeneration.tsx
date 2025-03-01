import { FeatureFlag } from "@/features/flags";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../convex/_generated/api";
import Usage from "./Usage";

interface GeneratedImage {
  _id: string;
  url: string;
  _creationTime: number;
  userId: string;
  videoId: string;
  storageId: string;
}

function ThumbnailGeneration({ videoId }: { videoId: string }) {
  const { user } = useUser();

  const images =
    useQuery(api.images.getImages, {
      userId: user?.id ?? "",
      videoId,
    }) ?? [];

  return (
    <div className="border p-4 pb-0 rounded-xl gap-4 flex flex-col">
      <div className="min-w-52">
        <Usage
          featureFlag={FeatureFlag.IMAGE_GENERATION}
          title="AI Thumbnail Generation"
        />
      </div>

      {images.length > 0 ? (
        <div className="flex overflow-x-auto gap-4 mt-4">
          {images.map((image: GeneratedImage) => (
            <div
              key={image._id}
              className="flex-none w-[200px] h-[110px] rounded-lg overflow-hidden"
            >
              <Image
                src={image.url}
                alt="Generated thumbnail"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 px-4 rounded-lg border-2 border-dashed border-gray-200">
          <p className="text-gray-500">No thumbnails have been generated yet</p>
          <p className="text-sm text-gray-400 mt-1">
            Generate thumbnails to see them appear here
          </p>
        </div>
      )}
    </div>
  );
}

export default ThumbnailGeneration;
