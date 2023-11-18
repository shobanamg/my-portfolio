'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const iconButtonVariants = cva(
    'flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-xl p-2 transition-colors duration-200 [&_svg]:stroke-gray-500 [&_svg]:hover:stroke-gray-600',
    {
        variants: {
            size: {
                md: '[&_svg]:w-6 [&_svg]:h-6',
                lg: '[&_svg]:w-8 [&_svg]:h-8',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);

export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof iconButtonVariants> {
    asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className, size, asChild = false, children, ...props }, ref) => {
        return (
            <button
                className={mergeClasses(iconButtonVariants({ size }), className)}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';

export default IconButton;
