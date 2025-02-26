"use client";

import AgensePluse from "@/components/AgensePluse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { gsap } from "gsap";
import {
  Brain,
  Image as ImageIcon,
  MessageSquare,
  Sparkles,
  Video,
} from "lucide-react";
import { useEffect, useRef } from "react";

const steps = [
  {
    title: "1: Connect your content ",
    description:
      "Share your video to the platform and let your AI agent analyze it.",
    icon: Video,
  },
  {
    title: "2: AI Agent Analysis",
    description:
      "Your AI agent will analyze your content and provide insights.",
    icon: Brain,
  },
  {
    title: "3: Receive intelligence",
    description: "Get actionable insights and strategic recommendations.",
    icon: MessageSquare,
  },
];

const features = [
  {
    title: "AI Analysis",
    description:
      "Get deep insights into your content with AI analysis. Understand your audience better and create content that resonates.",
    icon: Brain,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Smart Transcription",
    description:
      "Get accurate transcripts of your videos with AI. Save time and focus on creating content.",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Thumbnail Generation",
    description:
      "Generate eye-catching thumbnails for your videos with AI. Make your content stand out.",
    icon: ImageIcon,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Shot Script",
    description:
      "Summarize your videos with AI. Save time and focus on creating content.",
    icon: Video,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Discuss with your AI",
    description:
      "Discuss with your AI and get feedback on your content. Make your content better.",
    icon: Sparkles,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      stepsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-900">
      {/* Hero section */}
      <section
        ref={heroRef}
        className="py-20 min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgensePluse size="large" color="blue" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meet your personal{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-200 text-transparent bg-clip-text">
                AI Content Agent
              </span>
            </h1>
            <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              AgentTube is your personal AI content agent. It helps you create
              content for your social media platforms.
            </p>
            {/* Youtube video Form */}
            <YoutubeVideoForm />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section ref={featuresRef} className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Powerful features to boost your content
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl border border-blue-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 shadow-lg transform hover:-translate-y-1 transition-all duration-300 px-6 py-8"
                >
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${feature.iconBg}`}
                  >
                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* How it works section */}
      <section ref={stepsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Meet your AI Agent in 3 Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Footer section   */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-700">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to boost your content?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join AgentTube today and start creating content that resonates with
            your audience.
          </p>
        </div>
      </section>
    </div>
  );
}
