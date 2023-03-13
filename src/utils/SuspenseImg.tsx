/*
Copyright 2023  New Vector Ltd

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

const imgCache = {
  __cache: new Map<string, Promise<unknown> | boolean>(),
  read(src: string): boolean {
    if (!this.__cache.has(src)) {
      // Create a cache entry with a promise to notify the image is still being loadedd
      this.__cache.set(
        src,
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            this.__cache.set(src, true);
            resolve(this.__cache.get(src));
          };
          img.src = src;
        }).then(() => {
          this.__cache.set(src, true);
        })
      );
    }
    if (this.__cache.get(src) instanceof Promise) {
      throw this.__cache.get(src);
    }
    return this.__cache.get(src) as boolean;
  },
};

type SuspenseImgProps = {
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function SuspenseImg({ src, ...props }: SuspenseImgProps): JSX.Element {
  /**
   * Read the cache, if the image has already been loaded, it will be displayed
   * straight away. If not, it will throw an exception that will be caught by the
   * `<Suspense />` wrapper.
   * Once the promise is resolved, suspense will replace the fallback with the below
   */
  imgCache.read(src);
  return (
    <img
      alt=""
      src={src}
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
