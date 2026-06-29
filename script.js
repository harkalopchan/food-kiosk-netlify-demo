async function loadHomeContent() {
    try {
      const response = await fetch("./content/home.json");
      const data = await response.json();
  
      document.getElementById("hero-eyebrow").textContent = data.heroEyebrow;
      document.getElementById("hero-title").textContent = data.heroTitle;
      document.getElementById("hero-description").textContent =
        data.heroDescription;
  
      document.getElementById("instagram-link").href = data.instagramUrl;
      document.getElementById("tiktok-link").href = data.tiktokUrl;
  
      document.getElementById("about-title").textContent = data.aboutTitle;
      document.getElementById("about-description").textContent =
        data.aboutDescription;
    } catch (error) {
      console.error("Failed to load home content:", error);
    }
  }
  
  async function loadMenuContent() {
    try {
      const response = await fetch("./content/menu.json");
      const data = await response.json();
  
      const menuList = document.getElementById("menu-list");
  
      menuList.innerHTML = data.items
        .map(
          (item) => `
            <article class="menu-card">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <span class="price">${item.price}</span>
            </article>
          `
        )
        .join("");
    } catch (error) {
      console.error("Failed to load menu content:", error);
    }
  }
  
  loadHomeContent();
  loadMenuContent();