/**
 * Conditionally joins classNames together filtering out falsy values.
 * Lightweight zero-dependency utility.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
