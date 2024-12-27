import { useDraggable } from '@dnd-kit/react';
import { ComponentPropsWithoutRef, useId } from 'react';
import { Button } from './Button';
import { css } from '@emotion/react';

export const Draggable = (
  props: Omit<ComponentPropsWithoutRef<typeof Button>, 'as'>
) => {
  const id = useId();

  const { ref, isDragSource } = useDraggable({ id });

  return (
    <Button
      ref={ref}
      {...props}
      as="div"
      css={
        isDragSource &&
        ((theme) => css`
          background-color: ${theme.colors.grass4};
          border-color: ${theme.colors.grass8};
        `)
      }
    />
  );
};
