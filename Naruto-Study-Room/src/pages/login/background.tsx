import React from 'react';
import { Carousel } from '@arco-design/web-react';

const imageSrc = [
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/%E7%AE%80%E7%BA%A6%E5%AE%9E%E6%99%AF%E8%BD%BB%E8%AE%BE%E8%AE%A1%E6%A8%AA%E7%89%88%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E5%A5%97%E8%A3%85%20(1).jpg',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/%E7%AE%80%E7%BA%A6%E5%AE%9E%E6%99%AF%E8%BD%BB%E8%AE%BE%E8%AE%A1%E6%A8%AA%E7%89%88%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E5%A5%97%E8%A3%85%20(2).jpg',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/%E7%AE%80%E7%BA%A6%E5%AE%9E%E6%99%AF%E8%BD%BB%E8%AE%BE%E8%AE%A1%E6%A8%AA%E7%89%88%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E5%A5%97%E8%A3%85.jpg',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/%E7%AE%80%E7%BA%A6%E6%96%87%E8%89%BA%E6%B8%85%E6%96%B0%E6%97%85%E6%B8%B8%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E7%94%9F%E6%B4%BB%E5%A8%B1%E4%B9%90%20(1).jpg',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/%E7%AE%80%E7%BA%A6%E6%96%87%E8%89%BA%E6%B8%85%E6%96%B0%E6%97%85%E6%B8%B8%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E7%94%9F%E6%B4%BB%E5%A8%B1%E4%B9%90.jpg',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/%E7%AE%80%E7%BA%A6%E6%96%87%E8%89%BA%E6%B8%85%E6%96%B0%E6%97%85%E6%B8%B8%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2%E7%94%9F%E6%B4%BB%E5%A8%B1%E4%B9%90.png',
];
const currentSrc = [
  imageSrc[parseInt((5 * Math.random()) as any)],
  imageSrc[parseInt((5 * Math.random()) as any)],
  imageSrc[parseInt((5 * Math.random()) as any)],
  imageSrc[parseInt((5 * Math.random()) as any)],
  imageSrc[parseInt((5 * Math.random()) as any)],
];

function Background() {
  return (
    <Carousel
      style={{
        width: '100%',
        height: '100%',
      }}
      autoPlay
      indicatorType="never"
      animation="fade"
      showArrow="never"
    >
      {currentSrc.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default Background;
