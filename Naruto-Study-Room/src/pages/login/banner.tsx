import { Carousel } from '@arco-design/web-react';
import React from 'react';

const imageSrc = [
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Abstract_re_l9xy.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Co-working_re_w93t.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Control_panel_re_y3ar.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Design_notes_re_eklr.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Designer_life_re_6ywf.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Developer_activity_re_39tg.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Hello_re_3evm.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_In_sync_re_jlqd.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_My_documents_re_13dc.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Organizing_projects_re_9p1k.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Our_solution_re_8yk6.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Programmer_re_owql.png',
  'https://image-1257802703.cos.ap-shanghai.myqcloud.com/undraw_Thought_process_re_om58.png',
];
export default function LoginBannber() {
  const currentSrc = [
    imageSrc[parseInt((13 * Math.random()) as any)],
    imageSrc[parseInt((13 * Math.random()) as any)],
    imageSrc[parseInt((13 * Math.random()) as any)],
  ];
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
