import { DragDropProvider } from '@dnd-kit/react';
import { css } from '@emotion/react';
import { Draggable } from './components/Draggable';
import { Button } from './components/Button';
import { useState } from 'react';
import styled from '@emotion/styled';

export function App() {
  const [clickCount, setClickCount] = useState(0);
  const [source, setSource] = useState<string | null>(null);

  const onClick = (source: string | null) => {
    setClickCount((count) => count + 1);
    setSource(source);
  };

  return (
    <DragDropProvider>
      <div
        css={(theme) => css`
          flex: 1 0 auto;
          padding: 32px;

          display: flex;
          flex-direction: column;
          gap: 32px;

          background: ${theme.colors.iris1};
          color: ${theme.colors.iris12};
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 32px;
          `}
        >
          <DraggableItem>
            <p>First, bubble</p>
            <Button onPointerDown={() => onClick('First')}>Click</Button>
          </DraggableItem>
          <DraggableItem>
            <p>Second, capture</p>
            <Button onPointerDownCapture={() => onClick('Second')}>
              Click
            </Button>
          </DraggableItem>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 8px;
          `}
        >
          <span>Click count: {clickCount}</span>
          <span>Pointer down source: {source ?? 'none yet'}</span>
          <span
            css={css`
              font-style: italic;
            `}
          >
            Try clicking the buttons and observe the source of the pointer down
            event.
          </span>
        </div>
      </div>
    </DragDropProvider>
  );
}

const DraggableItem = styled(Draggable)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
