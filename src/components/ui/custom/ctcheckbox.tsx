import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const CTCheckbox: React.FC<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
> = (props) => {
  return (
    <Checkbox
      {...props}
      className={cn(
        "outline-1 border-foreground data-[state=checked]:bg-background-tertiary",
        props.className
      )}
    />
  );
};

export default CTCheckbox;
