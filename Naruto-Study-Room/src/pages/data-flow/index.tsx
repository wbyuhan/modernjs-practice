import { Spin } from '@arco-design/web-react';
import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { currentUserNameQuery } from './recoil';

const DataFlow = () => {
  const asyncState = useRecoilValueLoadable(currentUserNameQuery);
  if (asyncState.state === 'loading') {
    return <Spin loading />;
  }
  if (asyncState.state === 'hasValue') {
    return <div>{asyncState.contents.name}</div>;
  }
  return null;
};

export default DataFlow;
