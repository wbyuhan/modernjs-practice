import React, { useEffect, useState } from 'react';
import styled from '@modern-js/runtime/styled';
import products from '@api/index';

import './App.css';

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 2;
`;

const App: React.FC = () => {
  const [data, setState] = useState<any[]>([]);

  const load = async () => {
    const _data = await products();
    setState(_data);
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div>
      {data.map((item: any) => {
        const { id, name, price } = item;
        return (
          <ItemWrapper key={id}>
            <span>{name}</span>
            <span>${price}</span>
          </ItemWrapper>
        );
      })}
    </div>
  );
};

export default App;
