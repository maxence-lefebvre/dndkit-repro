import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementRef,
  forwardRef,
} from 'react';
import { css } from '@emotion/react';

export const Button = forwardRef<
  ElementRef<'button'>,
  ComponentPropsWithoutRef<'button'> & { as?: ComponentType | 'div' }
>(function Button({ as, ...props }, ref) {
  const Comp = as ?? 'button';

  return (
    <Comp
      // @ts-expect-error -- just a reproduction repo
      ref={ref}
      {...props}
      css={(theme) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 16px 32px;

        color: ${theme.colors.iris12};
        background: ${theme.colors.iris3};
        border: 1px solid ${theme.colors.iris7};

        &:hover {
          cursor: pointer;
          background: ${theme.colors.iris4};
          border-color: ${theme.colors.iris8};
        }
      `}
    />
  );
});
