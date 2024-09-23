import TestAnimation from "@/components/TestAnimation";
// import video from "../assets/video.mp4";

export default function Home() {
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center">
        <div className="w-full video-background">
          <video
            className="w-full object-cover"
            src="./video.mp4"
            autoPlay
            muted
            loop
            plays-inline="true"
          />
        </div>
        <div className="w-full">
          <h3 className="text-white text-4xl font-semibold text-center">
            Our Mission <br />
            テクノロジーとマネジメント力で、プロダクトの成長・成功へ最大限貢献する
          </h3>
        </div>
      </div>
      <TestAnimation />
    </>
  );
}
