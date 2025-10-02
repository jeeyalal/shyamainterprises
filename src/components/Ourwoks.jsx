// import React, { useRef, useState, useEffect } from "react";

// import v1 from "../assets/v1.mp4";
// import v2 from "../assets/v2.mp4";
// import v3 from "../assets/v3.mp4";
// import v4 from "../assets/v4.mp4";
// import v5 from "../assets/v5.mp4";
// import v6 from "../assets/v6.mp4";

// function Ourwoks() {
//   const videos = [v1, v2, v3, v4, v5, v6];
//   const videoRefs = useRef([]);
//   const itemRefs = useRef([]);
//   const scrollRef = useRef(null);

//   const [isPlaying, setIsPlaying] = useState(null);
//   const [scrollOffset, setScrollOffset] = useState(0);
//   const [lastTimestamp, setLastTimestamp] = useState(null);
//   const [animating, setAnimating] = useState(true);

//   useEffect(() => {
//     let frame;

//     const animate = (timestamp) => {
//       if (!lastTimestamp) {
//         setLastTimestamp(timestamp);
//         frame = requestAnimationFrame(animate);
//         return;
//       }
//       const delta = timestamp - lastTimestamp;
//       setLastTimestamp(timestamp);

//       if (animating && scrollRef.current) {
//         setScrollOffset((prev) => {
//           const totalWidth = scrollRef.current.scrollWidth / 2;
//           const newOffset = prev - delta * 0.05;
//           return newOffset <= -totalWidth ? 0 : newOffset;
//         });
//       }

//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [animating, lastTimestamp]);

//   const handlePlayPause = (index) => {
//     const video = videoRefs.current[index];
//     if (!video) return;

//     if (isPlaying === index) {
//       video.pause();
//       setIsPlaying(null);
//       setAnimating(true);
//     } else {
//       videoRefs.current.forEach((vid) => {
//         if (vid) vid.pause();
//       });

//       if (itemRefs.current[index] && scrollRef.current) {
//         const parent = scrollRef.current;
//         const child = itemRefs.current[index];
//         const parentCenter = parent.offsetWidth / 2;
//         const childCenter = child.offsetLeft + child.offsetWidth / 2;

//         parent.scrollTo({
//           left: childCenter - parentCenter,
//           behavior: "smooth",
//         });
//       }

//       setTimeout(() => {
//         video.volume = 0; // audio muted
//         video.playsInline = true;

//         const playPromise = video.play();
//         if (playPromise !== undefined) {
//           playPromise.catch((err) => console.warn("Video play failed:", err));
//         }

//         setIsPlaying(index);
//         setAnimating(false);

//         video.onended = () => {
//           setIsPlaying(null);
//           setAnimating(true);
//         };
//       }, 50);
//     }
//   };

//   return (
//     <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-gray-50 overflow-hidden">
//       <div className="text-center max-w-2xl mx-auto mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Our Works
//         </h2>
//         <p className="mt-4 text-gray-600">Explore some of our sample works.</p>
//       </div>

//       <div className="relative w-full overflow-hidden">
//         <div
//           ref={scrollRef}
//           className="flex gap-6"
//           style={{ transform: `translateX(${scrollOffset}px)` }}
//         >
//           {[...videos, ...videos].map((src, idx) => {
//             const realIndex = idx % videos.length;
//             return (
//               <div
//                 key={idx}
//                 ref={(el) => (itemRefs.current[realIndex] = el)}
//                 className={`min-w-[250px] sm:min-w-[320px] md:min-w-[420px] lg:min-w-[500px] flex-shrink-0 transition-all duration-500 ${
//                   isPlaying === realIndex
//                     ? "h-[500px]"
//                     : "h-[300px] sm:h-[380px] md:h-[420px]"
//                 }`}
//               >
//                 <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
//                   <video
//                     ref={(el) => (videoRefs.current[realIndex] = el)}
//                     src={src}
//                     loop={false}
//                     playsInline
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                     <button
//                       onClick={() => handlePlayPause(realIndex)}
//                       className="px-6 py-2 rounded-lg bg-[var(--color-primary)] text-white transform hover:scale-105 transition"
//                     >
//                       {isPlaying === realIndex ? "Pause" : "Play"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Ourwoks;

import React, { useRef, useState, useEffect } from "react";

import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";
import v5 from "../assets/v5.mp4";
import v6 from "../assets/v6.mp4";

function Ourwoks() {
  const videos = [v1, v2, v3, v4, v5, v6];
  const videoRefs = useRef([]);
  const itemRefs = useRef([]);
  const scrollRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [lastTimestamp, setLastTimestamp] = useState(null);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    let frame;

    const animate = (timestamp) => {
      if (!lastTimestamp) {
        setLastTimestamp(timestamp);
        frame = requestAnimationFrame(animate);
        return;
      }
      const delta = timestamp - lastTimestamp;
      setLastTimestamp(timestamp);

      if (animating && scrollRef.current) {
        setScrollOffset((prev) => {
          const totalWidth = scrollRef.current.scrollWidth / 2;
          const newOffset = prev - delta * 0.05;
          return newOffset <= -totalWidth ? 0 : newOffset;
        });
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line
  }, [animating, lastTimestamp]);

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (isPlaying === index) {
      video.pause();
      setIsPlaying(null);
      setAnimating(true);
    } else {
      videoRefs.current.forEach((vid) => {
        if (vid) vid.pause();
      });

      // Center the selected video
      if (itemRefs.current[index] && scrollRef.current) {
        const parent = scrollRef.current;
        const child = itemRefs.current[index];
        const parentCenter = parent.offsetWidth / 2;
        const childCenter = child.offsetLeft + child.offsetWidth / 2;

        parent.scrollTo({
          left: childCenter - parentCenter,
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        video.muted = true;   // Muted video as per requirement, set *muted* attribute!
        video.playsInline = true;

        // Reset to start when playing again
        video.currentTime = 0;

        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => console.warn("Video play failed:", err));
        }

        setIsPlaying(index);
        setAnimating(false);

        video.onended = () => {
          setIsPlaying(null);
          setAnimating(true);
        };
      }, 50);
    }
  };

  return (
    <section id="work" className=" scroll-mt-20 w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-gray-50 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Works
        </h2>
        <p className="mt-4 text-gray-600">Explore some of our sample works.</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6"
          style={{ transform: `translateX(${scrollOffset}px)` }}
        >
          {[...videos, ...videos].map((src, idx) => {
            // Use true unique index in the doubled array for stable refs
            return (
              <div
                key={idx}
                ref={el => (itemRefs.current[idx] = el)}
                className={`min-w-[250px] sm:min-w-[320px] md:min-w-[420px] lg:min-w-[500px] flex-shrink-0 transition-all duration-500 ${
                  isPlaying === idx ? "h-[500px]" : "h-[300px] sm:h-[380px] md:h-[420px]"
                }`}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                  <video
                    ref={el => (videoRefs.current[idx] = el)}
                    src={src}
                    loop={false}
                    playsInline
                    muted
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      onClick={() => handlePlayPause(idx)}
                      className="px-6 py-2 rounded-lg bg-[var(--color-primary)] text-white transform hover:scale-105 transition"
                    >
                      {isPlaying === idx ? "Pause" : "Play"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Ourwoks;
