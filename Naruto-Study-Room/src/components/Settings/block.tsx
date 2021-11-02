import React, { ReactNode } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { Switch, Divider, InputNumber } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import styles from './style/block.module.less';

import { initialState } from '../../recoil/global';

export interface BlockProps {
  title?: ReactNode;
  options?: { name: string; value: string; type?: 'switch' | 'number' }[];
  children?: ReactNode;
}

export default function Block(props: BlockProps) {
  const { title, options, children } = props;
  const locale = useLocale();
  const { settings } = useRecoilValue(initialState);
  const setInitialData = useSetRecoilState(initialState);

  return (
    <div className={styles.block}>
      <h5 className={styles.title}>{title}</h5>
      {options &&
        options.map((option) => {
          const type = option.type || 'switch';

          return (
            <div className={styles.switchWrapper} key={option.value}>
              <span>{locale[option.name]}</span>
              {type === 'switch' && (
                <Switch
                  size="small"
                  checked={!!settings[option.value]}
                  onChange={(checked) => {
                    const newSetting = {
                      ...settings,
                      [option.value]: checked,
                    };
                    setInitialData((initValue) => ({
                      ...initValue,
                      settings: newSetting,
                    }));
                    // set color week
                    if (checked && option.value === 'colorWeek') {
                      document.body.style.filter = 'invert(80%)';
                    }
                    if (!checked && option.value === 'colorWeek') {
                      document.body.style.filter = 'none';
                    }
                  }}
                />
              )}
              {type === 'number' && (
                <InputNumber
                  style={{ width: 80 }}
                  size="small"
                  value={settings.menuWidth}
                  onChange={(value) => {
                    const newSetting = {
                      ...settings,
                      [option.value]: value,
                    };
                    setInitialData((initValue) => ({
                      ...initValue,
                      settings: newSetting,
                    }));
                  }}
                />
              )}
            </div>
          );
        })}
      {children}
      <Divider />
    </div>
  );
}
