import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

import { mergeClasses } from "@/lib/utils";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = (
  props: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Portal>
) => <DrawerPrimitive.Portal {...props} />;
DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>((props, ref) => (
  <DrawerPrimitive.Overlay
    className={clsx(
      "fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm",
      props.className
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
  "fixed z-50 shadow-2xl bg-gray-0 ring-1 ring-black/10 transition-all ease-in-out duration-100",
  {
    variants: {
      side: {
        right:
          "inset-y-0 right-0 h-full max-w-xs w-full data-[state=open]:animate-drawer-open data-[state=closed]:animate-drawer-close",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={clsx(mergeClasses(drawerVariants({ side })), className)}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent };
