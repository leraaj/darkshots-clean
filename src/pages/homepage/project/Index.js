import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import VideoList from "../../../components/collections/VideoList";
const Index = () => {
  const textHeading = "We Proudly present our VideoGraphy";
  const projectContent = {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    padding: "10%",
    position: "relative",
    backgroundSize: "cover",
    backdropFilter: "blur(100em)",
  };
  const projects = [
    {
      id: 1,
      title: "Project 1",
      media: {
        thumbnail:
          "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
        videoLink: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      },
    },
    {
      id: 2,
      title: "Project 2",
      media: {
        thumbnail:
          "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
        videoLink: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
      },
    },
    {
      id: 3,
      title: "Project 3",
      media: {
        thumbnail:
          "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
        videoLink: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
      },
    },

    {
      id: 4,
      title: "Project 4",
      media: {
        thumbnail:
          "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
        videoLink: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
      },
    },
    {
      id: 5,
      title: "Project 5",
      media: {
        thumbnail:
          "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png",
        videoLink: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
      },
    },
  ];

  return (
    <div className="row mx-0 align-items-center" style={projectContent}>
      <div className=" col-12">
        <ThemeHeader title={textHeading} />
      </div>
      <div className="col-12">
        <VideoList items={projects} />
      </div>
    </div>
  );
};

export default Index;
