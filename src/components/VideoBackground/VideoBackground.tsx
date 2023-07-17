import video from "../../assets/video.mp4";


export const VideoBackground = () => {
  return <video className="video" src={video} muted autoPlay loop></video>;
};
