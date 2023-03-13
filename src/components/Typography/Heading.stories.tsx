/*
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

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
import { Meta, StoryFn } from "@storybook/react";

import { Heading as HeadingComponent } from "./Heading";

export default {
  title: "Typography",
  component: HeadingComponent,
  size: {
    options: ["xs", "sm", "md", "lg"],
    control: { type: "inline-radio" },
  },
  weight: {
    options: ["regular", "medium", "semibold"],
    control: { type: "inline-radio" },
  },
} as Meta<typeof HeadingComponent>;

const Template: StoryFn<typeof HeadingComponent> = (args) => (
  <HeadingComponent size={args.size} weight={args.weight}>
    The quick brown fox jumps over the lazy dog
  </HeadingComponent>
);

export const Heading = Template.bind({});
Heading.args = {
  size: "md",
  weight: "regular",
};
