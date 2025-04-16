import React from 'react';
import './Banner.css'; // Đảm bảo import file CSS

export default function Banner() {
  return (
    <div className="full-banner">
      <div className="banner-background">
        {/* Bạn có thể thêm thẻ <img> cho hình nền tại đây nếu cần */}
      </div>
      <div className="banner-content">
        <div className="recipe-card">
          <div className="recipe-of-the-day">Recipe of the day</div>
          <div className="recipe-content">
            <h2 className="recipe-title">Salad Caprese</h2>
            <p className="recipe-description">
              Classic Italian Salad Caprese: ripe tomatoes, fresh
              mozzarella, herbs, olive oil, and balsamic vinegar
              create a refreshing dish for lunch or appetizer.
            </p>
            <div className="author-info">
              <img src="./src/images/Avatar.png" alt="" />
              <div className="recipe-name">Salad Caprese</div>
            </div>
            <button className="view-now-button">
              View Now <span style={{ fontSize: '12px' }}>→</span>
            </button>
          </div>
        </div>
        {/* Các nội dung khác có thể có trong banner */}
      </div>
    </div>
  );
}