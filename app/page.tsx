import AgentPulse from "@/components/AgentPulse";
import Image from "next/image";
import {
  Brain,
  Icon,
  Image as ImageIcon,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Video,
  Captions,
  Lightbulb
} from "lucide-react"
import { title } from "process";
import YoutubeForm from "@/components/YoutubeForm";


const steps = [
  {
    title: "1. Connect Your Content",
    description: "Share your Yuutube Video URL and let your Agent get to work",
    Icon: ExternalLink,
  },
  {
    title: "2. Get AI Analysis",
    description : "Your personal agent analyzes every aspect of your content",
    Icon: Brain,
  },
  {
    title: "3. Unlock Insights",
    description: "Get detailed insights , strategic recommendations , and creative ideas to grow your channel",
    Icon: Lightbulb,
  }
]




const features = [
  {
    title: 'AI Analysis',
    description: 'Get detailed analysis of your video content with AI powered insights',
    Icon: Brain,
    iconfig: "bg-blue-200",
    iconcolor: "text-blue-600"
  },
  {
    title: 'Intelligent Transcription',
    description: "Get accurate transcription of your video content in seconds . Perfect for creating subtitles , blog posts and more",
    Icon: Captions,
    iconfig: "bg-green-200",
    iconcolor: "text-green-600"
  },
  {
    title: "Thumbnail Generation",
    description: "Create beautiful custom thumbnails for your videos with AI powered design",
    Icon: ImageIcon,
    iconfig: "bg-yellow-200",
    iconcolor: "text-yellow-600"
  },
  {
    title: "Title Generation",
    description: "Create attention-grabbing , SEO-Optimized titles for your videos using AI . Maximize views with titles that resonate with your audience",
    Icon: MessageSquare,
    iconfig: "bg-purple-200",
    iconcolor: "text-purple-600"
  },
  {
    title: "Shooting Script",
    description: "Get detailed , step-by-step instructions to recreate viral videos . Learn Shooting Techniques , angles and editing tips from successful content.",
    Icon: Video,
    iconfig: "bg-red-200",
    iconcolor: "text-red-600"
  },
  {
    title: "Discuss with Your AI Agent",
    description: "Engage in deep conversation about your content strategy, brainstrom ideas, and unlock new creative possibilities with your AI Agent companion.",
    Icon: Sparkles,
    iconfig: "bg-orange-200",
    iconcolor: "text-orange-600",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen">
      {/*Hero Section*/}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-10 text-center mb-12"> 
              <AgentPulse size='large' color='blue' pulse={true}/>
              <h1 className="text-4xl font-bold text-gray-600 mb-6 ">
                Meet your Personal{""}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400
               bg-clip-text text-transparent"> AI Content Agent</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform Your Video content with AI Powered Analysis,
                Transcription, and Insights . Get Started in Seconds. 
              </p>
              <YoutubeForm />
            </div>
          </div>
        </section>



      {/*Feature Section*/}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powerful Features for Creative Ones
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*Feature Grid*/}
            {features.map((features , index) => {
              const Icon = features.Icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border  
                border-gray-200 hover:border-blue-500 transition-all duration-300"> 
                  <div className={`w-12 h-12 rounder-lg flex items-center
                    justify-center mb-4 ${features.iconfig}`}>
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{features.title}</h3>
                  <p className="text-gray-600">{features.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        </section>




      {/*How it works section*/}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                Meet Your AI Agent in 3 Simple Steps
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((steps , index) => {
              const Icon = steps.Icon;
              return (
                <div key={index} className="text-center shadow-md hover:shadow-lg bg-white p-6 rounded-xl border  
                transition-all"> 
                  <div className={`w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 
                   rounder-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon  className="w-8 h-8 text-white "/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{steps.title}</h3>
                  <p className="text-gray-600">{steps.description}</p>
                </div>
              );
            })}
              </div>
            </div>
        </section>




      {/*Foorer Section*/}
      <section className="py-20 px-4 mx:pd-0 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Meet Your AI Content Agent?
          </h2>
          <p className="text-xl mb-8">
            Join creators who are transforming their content with AI! 
          </p>
        </div>
      </section>
    </div>
  );
}
