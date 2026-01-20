const IMAGES = [
  // Logo and icons
  "/icons/logo.png",
  "/icons/favicon.png",

  // About section
  "/images/about-us4.jpeg",

  // Flags
  "/images/flags/en.png",
  "/images/flags/ru.png",
  "/images/flags/ka.png",

  // Workshop images
  "/images/workshop/audi-rs6.jpg",
  "/images/workshop/bmw-m850.jpg",
  "/images/workshop/chevrolet-corvette-c3.jpg",
  "/images/workshop/ferrari-296gtb.jpg",
  "/images/workshop/lamborghini-urus-performante.jpg",
  "/images/workshop/mercedes-sl190.jpg",
  "/images/workshop/mercedes-v300.jpg",
  "/images/workshop/mercedes-gt63.jpg",
  "/images/workshop/porsche-911-carrera.jpg",
  "/images/workshop/porsche-911-carrera-gts.jpg",
  "/images/workshop/porsche-gt3.jpg",
  "/images/workshop/shelby-cobra.jpg",

  // Service images
  "/images/services/premium-quality-ppf.jpg",
  "/images/services/premium-vinyl-wraps.jpg",
  "/images/services/interior-detailing.jpg",
  "/images/services/ceramic-coating.jpg",
  "/images/services/wheel-powder-coating-paint.jpg",
  "/images/services/window-tint.jpg",
  "/images/services/noise-vibration-insulation.jpg",
  "/images/services/polishing.jpg",
  "/images/services/detailing-wash.jpg",
  "/images/services/pdr-dent-repair.jpg",
];

const VIDEOS = ["/compressed.mp4"];

const MAX_PRELOAD_TIME = 8000;

const preloadImages = (): Promise<void[]> => {
  return Promise.all(
    IMAGES.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          const timeout = setTimeout(() => resolve(), 5000);

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
          const timeout = setTimeout(() => resolve(), 5000);

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
