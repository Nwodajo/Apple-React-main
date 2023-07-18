import React, { useState, useEffect } from "react";

function Youtube() {
  const [youtube, setVideo] = useState([]);

  // channel id UCE_M8A5yxnLfW0KghEeajjw
  // my api AIzaSyAFKS3Nh_ZMQEZ4Ktq80i6Gc4grH3egEVM

  //  https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAFKS3Nh_ZMQEZ4Ktq80i6Gc4grH3egEVM

  //  https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=viewCount&key=AIzaSyAFKS3Nh_ZMQEZ4Ktq80i6Gc4grH3egEVM

  //  https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=viewCount&key=AIzaSyAFKS3Nh_ZMQEZ4Ktq80i6Gc4grH3egEVM

  // response(10)
  //     .then((x) => { })

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyCiYheoWUI7SBoQS6HTngY16KhP_zqqQpc"
    )
      .then((r) => {
        return r.json(); //new object
      })
      .then((d) => setVideo(d.items));
  }, []);

  console.log(youtube);

  // let x = [4, 5, 6, 7];

  // for (i = 0; i < x.length; i++){
  //   console.log(x[i])
  // }

  // x.map((value,index) => {
  //   console.log(index);
  // })

  // https://www.youtube.com/watch?v=TEblbkq8Qnc

  return (
    <div>
      {youtube.map((value, i) => {
        let vidId = value.id.videoId;
        let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

        let videoWrapper = (
          <div key={i} className="col-sm-12 col-md-4">
            
            <a href={vidLink} target="blank">
              <img src={value.snippet.thumbnails.high.url} alt="images" />
            </a>

            <a href={vidLink} target="blank">
              {value.snippet.title}
            </a>

            <p> {value.snippet.description}</p>
          </div>
        );
        return videoWrapper;
      })}
    </div>
  );
}

export default Youtube;
