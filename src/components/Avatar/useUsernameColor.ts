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

/**
 * Determines a color to assign to a given username
 * @param id - a Matrix username ID
 * @returns a hexadecimal color
 */
export function useUsernameColor(id: string): number {
  const MIN = 1;
  const MAX = 8;
  // Sum up the values of all the char codes in the string
  const charCodeSum = id.split("").reduce((sum, char) => {
    return sum + char.charCodeAt(0);
  }, 0);
  return (charCodeSum % MAX) + MIN;
}
