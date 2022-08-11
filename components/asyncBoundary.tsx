import { ComponentProps } from 'react';
import ErrorBoundary from './errorBoundary';
import OnlyClient from './onlyClient';

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface Props extends Omit<ErrorBoundaryProps, 'fallback'> {
  pendingFallback: ComponentProps<typeof OnlyClient>['fallback'];
  rejectedFallback: ErrorBoundaryProps['fallback'];
}

function AsyncBoundary({
  pendingFallback,
  rejectedFallback,
  children,
  ...errorBoundaryProps
}: Props) {
  return (
    <ErrorBoundary fallback={rejectedFallback} {...errorBoundaryProps}>
      <OnlyClient fallback={pendingFallback}>{children}</OnlyClient>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
