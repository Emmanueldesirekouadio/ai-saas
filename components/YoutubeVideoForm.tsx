import { analyseYoutubeVideo } from "@/actions/analyseYoutubeVideo";
import Form from "next/form";
import AnalyseButton from "./AnalyseButton";
function YoutubeVideoForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form
        action={analyseYoutubeVideo}
        className="flex flex-col sm:flex-row gap-2 items-center justify-center"
      >
        <input
          name="url"
          type="text"
          placeholder="Enter Youtube Video URL"
          className="flex-1 w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-300"
        />

        <AnalyseButton />
      </Form>
    </div>
  );
}

export default YoutubeVideoForm;
