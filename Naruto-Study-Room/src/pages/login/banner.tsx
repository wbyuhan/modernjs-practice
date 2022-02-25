import { Carousel } from '@arco-design/web-react';
import React from 'react';

export default function LoginBannber() {
  return (
    <Carousel
      style={{
        width: '72%',
        height: '100%',
        marginRight: 50,
      }}
      autoPlay
      indicatorType="never"
      animation="fade"
      showArrow="never"
    >
      {/* {currentSrc.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ))} */}
    </Carousel>
  );
}
