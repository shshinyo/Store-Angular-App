export type StringKeys<T> = Extract<keyof T, string>;

/**
 * The non-function property names of class T.
 */
export type ClassPropertyNames<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [K in keyof Required<T>]: T[K] extends Function ? never : K;
}[StringKeys<T>];

/**
 * Pick the non-function properties from Class.
 */
export type ClassProperties<Class> = Pick<Class, ClassPropertyNames<Class>>;

/**
 * Add to or replace any properties from the base class.
 */
export type Override<Class, Properties extends Record<string, unknown>> = Pick<
  Class,
  Exclude<keyof Class, keyof Properties>
> &
  Properties;

export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

export type Nullable<T> = { [P in keyof T]: T[P] | null };

export type Optional<T> = T | null | undefined;

export function toBool(val: unknown): boolean {
  if (val) {
    try {
      return !!JSON.parse(String(val).toLowerCase());
    } catch {
      return false;
    }
  }
  return false;
}
