import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-soft focus-visible:ring-primary-500',
  secondary:
    'bg-secondary-800 text-white hover:bg-secondary-900 shadow-soft focus-visible:ring-secondary-600',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-secondary-800 focus-visible:ring-white',
  ghost:
    'text-secondary-800 hover:bg-secondary-100 focus-visible:ring-secondary-400',
};

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

export default function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'primary', size = 'md', icon, className = '', children } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...anchorProps } = props;
    void _as; void _v; void _s; void _i; void _c; void _ch;
    return (
      <a className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...buttonProps } = props;
  void _as; void _v; void _s; void _i; void _c; void _ch;
  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
