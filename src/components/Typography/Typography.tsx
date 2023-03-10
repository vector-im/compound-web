/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";

type TypographyProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  type?: "body" | "heading";
  weight?: "regular" | "semibold" | "medium" | "bold";
  size?: "xs" | "sm" | "md" | "lg";
} & React.ComponentPropsWithoutRef<C>;

export const Typography = <C extends React.ElementType = "p">({
  as,
  children,
  type = "body",
  weight = "regular",
  size = "md",
  ...restProps
}: TypographyProps<C>) => {
  const Component = as || "p";

  return (
    <Component
      {...restProps}
      style={{
        ...(restProps.style || {}),
        font: `var(--cpd-font-${type}-${size}-${weight})`,
        letterSpacing: `var(--cpd-font-letter-spacing-${type}-${size})`,
      }}
    >
      {children}
    </Component>
  );
};
