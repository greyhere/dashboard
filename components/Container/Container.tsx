import type { ComponentType, FC, HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  el?: string | ComponentType<HTMLAttributes<HTMLElement>>;
  className?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({
  el: Component = 'div',
  className = '',
  children,
  ...rest
}) => (
  <Component
    className={`px-6 mx-auto max-w-7xl ${className}`}
    {...rest}
  >
    {children}
  </Component>
);

export default Container;
