const IMAGES = [
  "/images/logo.png",
  "/images/black-icon.png",
  "/images/about-us4.jpeg",
  "/images/flags/en.png",
  "/images/flags/ru.png",
  "/images/flags/ka.png",
];

const VIDEOS = ["/compressed.mp4"];

const MAX_PRELOAD_TIME = 3000;

const preloadImages = (): Promise<void[]> => {
  return Promise.all(
    IMAGES.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          const timeout = setTimeout(() => resolve(), 2000);

          img.onload = () => {
            clearTimeout(timeout);
            resolve();
          };
          img.onerror = () => {
            clearTimeout(timeout);
            resolve();
          };
          img.src = src;
        })
    )
  );
};

const preloadVideos = (): Promise<void[]> => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    return Promise.resolve([]);
  }

  return Promise.all(
    VIDEOS.map(
      (src) =>
        new Promise<void>((resolve) => {
          const video = document.createElement("video");
          const timeout = setTimeout(() => resolve(), 2000);

          video.onloadeddata = () => {
            clearTimeout(timeout);
            resolve();
          };
          video.onerror = () => {
            clearTimeout(timeout);
            resolve();
          };
          video.preload = "auto";
          video.src = src;
        })
    )
  );
};

export const preloadAllAssets = async (): Promise<void> => {
  try {
    await Promise.race([
      Promise.all([preloadImages(), preloadVideos()]),
      new Promise<void>((resolve) => setTimeout(resolve, MAX_PRELOAD_TIME)),
    ]);
  } catch (error) {
    console.error("Error preloading assets:", error);
  }
};
