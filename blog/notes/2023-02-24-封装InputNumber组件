---
title: 封装 InputNumber 组件
date: 2023-02-24
tags: 
  - React
author: qinghuanI
location: wuhan
---

## 封装 InputNumber 组件

```tsx
import type { ChangeEvent, FC } from "react";
import { useState } from "react";

interface Props {
  max: number;
  min: number;
  defaultValue: number;
  onChange: (value: number) => void;
}

const InputNumber: FC<Props> = (props): JSX.Element => {
  const { max, min, defaultValue, onChange } = props;
  const [value, setValue] = useState<string>(String(defaultValue));

  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    try {
      const formatValue = JSON.parse(value);
      if (formatValue >= min && formatValue <= max) {
        onChange(formatValue);
      }
    } catch (e) {}
    setValue(value);
  };

  const onBlur = (): void => {
    let formatValue = 0;
    try {
      formatValue = JSON.parse(value);

      if (formatValue < min) {
        setValue(String(min));
        onChange(min);
      } else if (formatValue > max) {
        setValue(String(max));
        onChange(max);
      } else {
        setValue(value);
      }
    } catch (e) {
      setValue("");
    }
  };

  return (
    <input
      type="text"
      max={max}
      min={min}
      value={value}
      onChange={onNumberChange}
      onBlur={onBlur}
    />
  );
};

export default InputNumber;
```
