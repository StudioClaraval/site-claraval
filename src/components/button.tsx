import { tv, type VariantProps } from 'tailwind-variants';
import Icon from './icon';

const buttonVariants = tv({
  base: 'flex items-center justify-center cursor-pointer gap-1 uppercase'
});

const textVariants = tv({
  base: 'font-bold'
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
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ className })} {...props}>
      <span className={textVariants()}>{children}</span>
      {icon && <Icon svg={icon} />}
    </button>
  );
}
