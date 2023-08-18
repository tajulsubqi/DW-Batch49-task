// array of object
const testimonialData = [
  {
    author: "Vincenzo",
    quote: "Genre: crime, drama, dark, comedy",
    image: "image/VZ.png",
    rating: 5,
  },
  {
    author: "Vagabond",
    quote: "Genre: Spy Crime Action Thriller Romance",
    image: "image/VB.png",
    rating: 5,
  },
  {
    author: "Big Mouth",
    quote: "Genre: Hardboiled Noir Legal Crime",
    image: "image/BM.png",
    rating: 4,
  },
  {
    author: "Taxi Driver",
    quote: "Genre: Action Crime Thriller Mystery",
    image: "image/TX.png",
    rating: 3,
  },
  {
    author: "Reborn Rich",
    quote: "Genre: Fantasy Period Revenge",
    image: "image/RB.png",
    rating: 1,
  },
];

function allTestimonials() {
    let testimonialHTML = "";
  
    testimonialData.forEach(function (item) {
      testimonialHTML += `
      <div class="testimonial">
        <img src="${item.image}" class="profile-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
      </div>
      `;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  
  allTestimonials();
  
  function filterTestimonials(rating) {
    let testimonialHTML = "";
  
    const testimonialFiltered = testimonialData.filter(function (item) {
      return item.rating === rating;
    });
  
    if (testimonialFiltered.length === 0) {
      testimonialHTML = `<h1>Data not found!</h1>`;
    } else {
      testimonialFiltered.forEach(function (item) {
        testimonialHTML += `
        <div class="testimonial">
          <img src="${item.image}" class="profile-testimonial" />
          <p class="quote">${item.quote}</p>
          <p class="author">- ${item.author}</p>
          <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
        </div>
        `;
      });
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }