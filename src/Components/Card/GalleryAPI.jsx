import React from "react";
import axios from "axios";

const GalleryAPI = () => {
  const [images, setImages] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [ButtonToggle, setButtonToggle] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);

  const getImages = async (currentPage) => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${currentPage}&limit=30`,
    );
    if (response.data.length == 0) {
      setHasMore(false);
      return;
    }
    console.log(response.data);
    setHasMore(true);
    setImages(response.data);
    setButtonToggle(true);
  };
  const nextPage = () =>{
    const nextPage = page + 1;
    setPage(nextPage);
    getImages(nextPage);
  }
  const prevPage = () => {
    if(page <= 1) return
    const prevPage = page - 1;
    setPage(prevPage);
    getImages(prevPage);
  }
  return (
    <div className="h-screen w-full ">
      <div className="h-full w-full flex flex-col ">
        <button className="default-btn" onClick={() => getImages(page)}>
          Press to view Images
        </button>
        <div className="h-full w-full flex flex-wrap  ">
          {images.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-[30%] w-[30%] flex m-5 bg-amber-300 rounded-lg overflow-hidden"
              >
                <img
                  className="object-cover w-full"
                  src={elem.download_url}
                  alt={elem.author}
                />
              </div>
            );
          })}
        </div>
        {ButtonToggle && (
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={prevPage}
              disabled={page <= 1}
              className="w-10 h-10 bg-yellow-500 text-white rounded-full hover:bg-gray-400 transition flex items-center justify-center font-bold"
            >
              -
            </button>

            <h4>Next</h4>
            <button
              onClick={nextPage}
              disabled={!hasMore}
              className="w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryAPI;
