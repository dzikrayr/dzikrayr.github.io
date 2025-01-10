document.addEventListener("DOMContentLoaded", () => {
    // Blog data
    const articles = [
      {
        title: "Teknik Irigasi untuk Pertanian Modern",
        date: "10 Januari 2025",
        excerpt: "Pelajari bagaimana teknik irigasi modern membantu menghemat air dan meningkatkan hasil panen.",
      },
      {
        title: "Dekarbonisasi dalam Pertanian",
        date: "5 Januari 2025",
        excerpt: "Mengupas strategi dekarbonisasi untuk mengurangi jejak karbon dalam sistem pangan.",
      },
      {
        title: "Pemupukan Berkelanjutan",
        date: "1 Januari 2025",
        excerpt: "Menggunakan pupuk secara bijak untuk menjaga keseimbangan tanah.",
      },
    ];
  
    // Load articles into blog section
    const blogList = document.getElementById("blog-list");
    articles.forEach((article) => {
      const blogItem = document.createElement("div");
      blogItem.classList.add("blog-item");
      blogItem.innerHTML = `
        <h3>${article.title}</h3>
        <p><small>${article.date}</small></p>
        <p>${article.excerpt}</p>
      `;
      blogList.appendChild(blogItem);
    });
  
    // Handle contact form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Terima kasih telah menghubungi kami! Pesan Anda telah dikirim.");
      contactForm.reset();
    });
  });
  