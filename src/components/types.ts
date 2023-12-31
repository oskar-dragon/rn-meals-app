import { PropsWithChildren } from 'react';

export type TWPropsWithChildren<T = object> = PropsWithChildren<
  { className?: string } & T
>;
