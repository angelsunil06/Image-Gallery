const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const imageGallery = [
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Beautiful tropical beach destination"
  },
  {
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
    alt: "Charming European travel street"
  },
  
  {
    url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern city skyline destination"
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Scenic lake and mountain destination"
  },
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Beautiful coastal cliff destination"
  },
  {
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    alt: "Historic city travel view"
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    alt: "Snowy mountain destination"
  },
  
  {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    alt: "Ocean and sunset travel destination"
  }
];

function setActiveThumbnail(selectedThumb) {
  const thumbnails = document.querySelectorAll(".thumb-bar img");
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));
  selectedThumb.classList.add("active");
}

for (let i = 0; i < imageGallery.length; i++) {
  const thumbImage = document.createElement("img");
  thumbImage.setAttribute("src", imageGallery[i].url);
  thumbImage.setAttribute("alt", imageGallery[i].alt);

  if (i === 0) {
    thumbImage.classList.add("active");
  }

  thumbBar.appendChild(thumbImage);

  thumbImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", imageGallery[i].url);
    displayedImage.setAttribute("alt", imageGallery[i].alt);
    setActiveThumbnail(thumbImage);
  });
}