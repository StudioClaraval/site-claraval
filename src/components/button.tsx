import { tv, type VariantProps } from 'tailwind-variants';
import Icon from './icon';

const buttonVariants = tv({
  base: 'flex items-center justify-center cursor-pointer gap-1 uppercase p-2',
  variants: {
    size: {
      sm: 'h-6.5 text-[10px]',
      md: 'h-8 text-xs'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const textVariants = tv({
  base: 'font-bold',
  variants: {
    size: {
      sm: 'text-[10px]',
      md: 'text-xs'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<'button'>, 'size'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg'];
}

export default function Button({
  className,
  icon,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ size, className })} {...props}>
      <span className={textVariants({ size })}>{children}</span>
      {icon && <Icon svg={icon} />}
    </button>
  );
}
