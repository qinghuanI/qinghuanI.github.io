---
title: 封装 useDebounceFn 方法
date: 2023-02-24
tags: 
  - React
author: qinghuanI
location: wuhan
---

## useDebounceFn

```ts
import { useCallback } from "react";

const DEBOUNCE_TIME = 500;

export function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timer: null | number = null;

  return (...args: unknown[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}

interface DebounceOptions {
  wait?: number;
}

export function useDebounceFn(
  fn: (...args: any) => void,
  options: DebounceOptions = {
    wait: DEBOUNCE_TIME,
  }
): (...args: unknown[]) => void {
  return useCallback(debounce(fn, options.wait!), []);
}

```
