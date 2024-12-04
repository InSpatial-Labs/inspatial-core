/*################################################################################
DESCRIPTION: Type-safe key-value store with schema validation at compile time.
Optimized for Spatial and Universal Apps
################################################################################*/


type KvSchema = {
  key: Deno.KvKey;
  schema: unknown;
}[];

type CompareKeys<k1 extends Deno.KvKey, k2 extends Deno.KvKey> = k1 extends k2
  ? true
  : false;

type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;

type IsAny<T> = IfAny<T, true, never>;

type IsUnknown<T> =
  IsAny<T> extends never ? (unknown extends T ? true : never) : never;

type IsNever<T> = [T] extends [never] ? true : never;

type ExtractKeys<S extends KvSchema> = S[number]["key"];

// [never, number, never] => number
type ExtractNotNever<T extends (unknown | never)[]> = T extends [
  infer F,
  ...infer R,
]
  ? true extends IsNever<F>
    ? ExtractNotNever<R>
    : F
  : never;

// [{ key: ["user", number], schema: { id: string, name: string } }], ["user", B3N] => { id: string, name: string }
type ExtractSchema<S extends KvSchema, K extends Deno.KvKey> = ExtractNotNever<{
  [Index in keyof S]: CompareKeys<S[Index]["key"], K> extends true
    ? S[Index]["schema"]
    : never;
}>;

// ["user", B3N] => ["user", number]
type AbstractKeys<Keys extends Deno.KvKey> = {
  [Index in keyof Keys]: Keys[Index] extends number ? number : Keys[Index];
};

/**
 * Base KV class with schema support
 */
export class InSpatialKV<S extends KvSchema> extends Deno.Kv {
  // @ts-expect-error: TYPE HACK
  public override get<T = unknown, K extends ExtractKeys<S>>(
    key: K,
    options?: { consistency?: Deno.KvConsistencyLevel }
  ): Promise<
    Deno.KvEntryMaybe<
      true extends IsUnknown<T> ? ExtractSchema<S, AbstractKeys<K>> : T
    >
  > {
    return super.get(key, options);
  }

  public override set<K extends ExtractKeys<S>>(
    key: K,
    value: ExtractSchema<S, AbstractKeys<K>>,
    options?: { expireIn?: number }
  ): Promise<Deno.KvCommitResult> {
    return super.set(key, value, options);
  }

  public override delete(key: ExtractKeys<S>): Promise<void> {
    return super.delete(key);
  }

  // @ts-expect-error: TYPE HACK
  public override list<T = unknown, K extends ExtractKeys<S>>(
    selector: Deno.KvListSelector & {
      prefix?: K;
      start?: K;
      end?: K;
    },
    options?: Deno.KvListOptions
  ): Deno.KvListIterator<
    true extends IsUnknown<T> ? ExtractSchema<S, AbstractKeys<K>> : T
  > {
    return super.list(selector, options);
  }
}

/**
 * Set a value in the KV store
 */
export async function setKV<S extends KvSchema, K extends ExtractKeys<S>>(
  kv: InSpatialKV<S>,
  key: K,
  value: ExtractSchema<S, AbstractKeys<K>>,
  options?: { expireIn?: number }
): Promise<Deno.KvCommitResult> {
  return kv.set(key, value, options);
}

/**
 * Get a value from the KV store
 */
export async function getKV<
  S extends KvSchema,
  T = unknown,
  K extends ExtractKeys<S>,
>(
  kv: InSpatialKV<S>,
  key: K,
  options?: { consistency?: Deno.KvConsistencyLevel }
): Promise<
  Deno.KvEntryMaybe<
    true extends IsUnknown<T> ? ExtractSchema<S, AbstractKeys<K>> : T
  >
> {
  return kv.get(key, options);
}

/**
 * Delete a value from the KV store
 */
export async function deleteKV<S extends KvSchema>(
  kv: InSpatialKV<S>,
  key: ExtractKeys<S>
): Promise<void> {
  return kv.delete(key);
}

/**
 * List values from the KV store
 */
export function listKV<
  S extends KvSchema,
  T = unknown,
  K extends ExtractKeys<S>,
>(
  kv: InSpatialKV<S>,
  selector: Deno.KvListSelector & {
    prefix?: K;
    start?: K;
    end?: K;
  },
  options?: Deno.KvListOptions
): Deno.KvListIterator<
  true extends IsUnknown<T> ? ExtractSchema<S, AbstractKeys<K>> : T
> {
  return kv.list(selector, options);
}

/**
 * Example usage:
 * ```ts
 * // Define your schema
 * type UserSchema = [{
 *   key: ["user", number],
 *   schema: { id: string, name: string }
 * }];
 *
 * // Create KV instance
 * const kv = new InSpatialKV<UserSchema>();
 *
 * // Use utility functions
 * await setKV(kv, ["user", 123], { id: "B3N", name: "Ben Emma" });
 * const user = await getKV(kv, ["user", 123]);
 * await deleteKV(kv, ["user", 123]);
 * const users = listKV(kv, { prefix: ["user"] });
 *
 * // Type safety is preserved
 * // This would cause a type error:
 * // await setKV(kv, ["user", 123], { id: 123 }); // Error: id should be string
 * ```
 */
