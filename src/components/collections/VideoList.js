import { useState, useEffect, useRef } from "react";

const VideoCollection = ({ items }) => {
  const [videoLists, setVideoLists] = useState(items);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const activeVideo = useRef(null);
  const videoThumbnail = useRef(null);
  const videoStatus = useRef(null);

  const videoPlayList = {
    cursor: "pointer",
  };
  const playVideoHandler = (event) => {
    activeVideo.current.src =
      event.target.attributes.getNamedItem("videosource").value;
    setSelectedVideo(activeVideo.current.src);
  };
  useEffect(() => {
    videoThumbnail.current = document.querySelectorAll(".video-thumbnail");

    videoStatus.current = document.querySelectorAll(".video-status");

    for (let i = 0; i < videoThumbnail.current.length; i++) {
      videoThumbnail.current[i].getAttribute("videosource") === selectedVideo
        ? (videoStatus.current[i].innerText = "Now Playing")
        : (videoStatus.current[i].innerText = "");
    }
  });

  return (
    <>
      <div className="row justify-content-center">
        <video
          ref={activeVideo}
          className="col-12 p-0 mb-5"
          controls
          autoPlay={true}
          muted
          playsInline
          poster="https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div className="row justify-content-between">
        {videoLists.map((list) => {
          return (
            <div
              key={list.id}
              className="card bg-transparent  col-2 px-0 videos"
            >
              <img
                src={list.media.thumbnail}
                videosource={list.media.videoLink}
                className="card-img-top rounded-0 video-thumbnail"
                style={videoPlayList}
                onClick={playVideoHandler}
              />
              <div className="card-body px-0">
                <h5 className="card-title text-white">{list.title}</h5>
                <p
                  className="card-text text-white video-status"
                  useRef={videoStatus}
                ></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default VideoCollection;
