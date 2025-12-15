// List of all images to preload
const IMAGES = [
  "/images/no-bg.png",
  "/images/full-logo.jpg",
  "/images/logo-black.png",
  "/images/logo-hover.jpg",
  "/images/cropped.png",
  "/images/about-us.jpeg",
  "/images/about-us2.jpg",
  "/images/about-us3.heic",
  "/images/about-us4.jpeg",
  "/images/flags/en.png",
  "/images/flags/ru.png",
];

// Background video
const VIDEOS = ["/background.mp4"];

/**
 * Preload images
 */
const preloadImages = (): Promise<void[]> => {
  return Promise.all(
    IMAGES.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Resolve even if image fails to load
          img.src = src;
        })
    )
  );
};

/**
 * Preload videos
 */
const preloadVideos = (): Promise<void[]> => {
  return Promise.all(
    VIDEOS.map(
      (src) =>
        new Promise<void>((resolve) => {
          const video = document.createElement("video");
          video.onloadeddata = () => resolve();
          video.onerror = () => resolve(); // Resolve even if video fails to load
          video.preload = "auto";
          video.src = src;
        })
    )
  );
};

/**
 * Preload all critical assets
 */
export const preloadAllAssets = async (): Promise<void> => {
  try {
    await Promise.all([preloadImages(), preloadVideos()]);
  } catch (error) {
    console.error("Error preloading assets:", error);
  }
};
