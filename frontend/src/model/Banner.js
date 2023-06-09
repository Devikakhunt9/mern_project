import React from 'react'

export default function Banner() {
  return (
    <div class="main-containt-banner" style={{ marginTop: 10 }}>
        <div class="banner ">
          <div class="container">
            <div class="slider-container has-scrollbar">
              <div class="slider-item">
                <img
                  src="assets/images/banner-1.jpg"
                  alt="women's latest fashion sale"
                  class="banner-img"
                />
              </div>
              <div class="slider-item">
                <img
                  src="assets/images/banner-2.jpg"
                  alt="modern sunglasses"
                  class="banner-img"
                />
              </div>
              <div class="slider-item">
                <img
                  src="assets/images/banner-3.jpg"
                  alt="new fashion summer sale"
                  class="banner-img"
                />
              </div>
              <div class="slider-item">
                <img
                  src="assets/images/banner-4.jpg"
                  alt="women's latest fashion sale"
                  class="banner-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
