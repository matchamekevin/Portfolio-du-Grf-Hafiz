
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ShowreelProject
 * 
 */
export type ShowreelProject = $Result.DefaultSelection<Prisma.$ShowreelProjectPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model GalleryShot
 * 
 */
export type GalleryShot = $Result.DefaultSelection<Prisma.$GalleryShotPayload>
/**
 * Model SkillSection
 * 
 */
export type SkillSection = $Result.DefaultSelection<Prisma.$SkillSectionPayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
/**
 * Model Hero
 * 
 */
export type Hero = $Result.DefaultSelection<Prisma.$HeroPayload>
/**
 * Model Cta
 * 
 */
export type Cta = $Result.DefaultSelection<Prisma.$CtaPayload>
/**
 * Model Footer
 * 
 */
export type Footer = $Result.DefaultSelection<Prisma.$FooterPayload>
/**
 * Model Translation
 * 
 */
export type Translation = $Result.DefaultSelection<Prisma.$TranslationPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ShowreelProjects
 * const showreelProjects = await prisma.showreelProject.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ShowreelProjects
   * const showreelProjects = await prisma.showreelProject.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.showreelProject`: Exposes CRUD operations for the **ShowreelProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowreelProjects
    * const showreelProjects = await prisma.showreelProject.findMany()
    * ```
    */
  get showreelProject(): Prisma.ShowreelProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryShot`: Exposes CRUD operations for the **GalleryShot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryShots
    * const galleryShots = await prisma.galleryShot.findMany()
    * ```
    */
  get galleryShot(): Prisma.GalleryShotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillSection`: Exposes CRUD operations for the **SkillSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillSections
    * const skillSections = await prisma.skillSection.findMany()
    * ```
    */
  get skillSection(): Prisma.SkillSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hero`: Exposes CRUD operations for the **Hero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heroes
    * const heroes = await prisma.hero.findMany()
    * ```
    */
  get hero(): Prisma.HeroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cta`: Exposes CRUD operations for the **Cta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ctas
    * const ctas = await prisma.cta.findMany()
    * ```
    */
  get cta(): Prisma.CtaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.footer`: Exposes CRUD operations for the **Footer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Footers
    * const footers = await prisma.footer.findMany()
    * ```
    */
  get footer(): Prisma.FooterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.translation`: Exposes CRUD operations for the **Translation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Translations
    * const translations = await prisma.translation.findMany()
    * ```
    */
  get translation(): Prisma.TranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ShowreelProject: 'ShowreelProject',
    Experience: 'Experience',
    GalleryShot: 'GalleryShot',
    SkillSection: 'SkillSection',
    ContactInfo: 'ContactInfo',
    Hero: 'Hero',
    Cta: 'Cta',
    Footer: 'Footer',
    Translation: 'Translation',
    Language: 'Language',
    AdminUser: 'AdminUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "showreelProject" | "experience" | "galleryShot" | "skillSection" | "contactInfo" | "hero" | "cta" | "footer" | "translation" | "language" | "adminUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ShowreelProject: {
        payload: Prisma.$ShowreelProjectPayload<ExtArgs>
        fields: Prisma.ShowreelProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowreelProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowreelProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>
          }
          findFirst: {
            args: Prisma.ShowreelProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowreelProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>
          }
          findMany: {
            args: Prisma.ShowreelProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>[]
          }
          create: {
            args: Prisma.ShowreelProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>
          }
          createMany: {
            args: Prisma.ShowreelProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowreelProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>[]
          }
          delete: {
            args: Prisma.ShowreelProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>
          }
          update: {
            args: Prisma.ShowreelProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>
          }
          deleteMany: {
            args: Prisma.ShowreelProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowreelProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowreelProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>[]
          }
          upsert: {
            args: Prisma.ShowreelProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowreelProjectPayload>
          }
          aggregate: {
            args: Prisma.ShowreelProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowreelProject>
          }
          groupBy: {
            args: Prisma.ShowreelProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowreelProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowreelProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ShowreelProjectCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      GalleryShot: {
        payload: Prisma.$GalleryShotPayload<ExtArgs>
        fields: Prisma.GalleryShotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryShotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryShotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>
          }
          findFirst: {
            args: Prisma.GalleryShotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryShotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>
          }
          findMany: {
            args: Prisma.GalleryShotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>[]
          }
          create: {
            args: Prisma.GalleryShotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>
          }
          createMany: {
            args: Prisma.GalleryShotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryShotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>[]
          }
          delete: {
            args: Prisma.GalleryShotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>
          }
          update: {
            args: Prisma.GalleryShotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>
          }
          deleteMany: {
            args: Prisma.GalleryShotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryShotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryShotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>[]
          }
          upsert: {
            args: Prisma.GalleryShotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryShotPayload>
          }
          aggregate: {
            args: Prisma.GalleryShotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryShot>
          }
          groupBy: {
            args: Prisma.GalleryShotGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryShotGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryShotCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryShotCountAggregateOutputType> | number
          }
        }
      }
      SkillSection: {
        payload: Prisma.$SkillSectionPayload<ExtArgs>
        fields: Prisma.SkillSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          findFirst: {
            args: Prisma.SkillSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          findMany: {
            args: Prisma.SkillSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>[]
          }
          create: {
            args: Prisma.SkillSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          createMany: {
            args: Prisma.SkillSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>[]
          }
          delete: {
            args: Prisma.SkillSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          update: {
            args: Prisma.SkillSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          deleteMany: {
            args: Prisma.SkillSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>[]
          }
          upsert: {
            args: Prisma.SkillSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSectionPayload>
          }
          aggregate: {
            args: Prisma.SkillSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillSection>
          }
          groupBy: {
            args: Prisma.SkillSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillSectionCountArgs<ExtArgs>
            result: $Utils.Optional<SkillSectionCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      Hero: {
        payload: Prisma.$HeroPayload<ExtArgs>
        fields: Prisma.HeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findFirst: {
            args: Prisma.HeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findMany: {
            args: Prisma.HeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          create: {
            args: Prisma.HeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          createMany: {
            args: Prisma.HeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          delete: {
            args: Prisma.HeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          update: {
            args: Prisma.HeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          deleteMany: {
            args: Prisma.HeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          upsert: {
            args: Prisma.HeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero>
          }
          groupBy: {
            args: Prisma.HeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroCountArgs<ExtArgs>
            result: $Utils.Optional<HeroCountAggregateOutputType> | number
          }
        }
      }
      Cta: {
        payload: Prisma.$CtaPayload<ExtArgs>
        fields: Prisma.CtaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CtaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CtaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>
          }
          findFirst: {
            args: Prisma.CtaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CtaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>
          }
          findMany: {
            args: Prisma.CtaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>[]
          }
          create: {
            args: Prisma.CtaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>
          }
          createMany: {
            args: Prisma.CtaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CtaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>[]
          }
          delete: {
            args: Prisma.CtaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>
          }
          update: {
            args: Prisma.CtaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>
          }
          deleteMany: {
            args: Prisma.CtaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CtaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CtaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>[]
          }
          upsert: {
            args: Prisma.CtaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CtaPayload>
          }
          aggregate: {
            args: Prisma.CtaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCta>
          }
          groupBy: {
            args: Prisma.CtaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CtaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CtaCountArgs<ExtArgs>
            result: $Utils.Optional<CtaCountAggregateOutputType> | number
          }
        }
      }
      Footer: {
        payload: Prisma.$FooterPayload<ExtArgs>
        fields: Prisma.FooterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FooterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FooterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          findFirst: {
            args: Prisma.FooterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FooterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          findMany: {
            args: Prisma.FooterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          create: {
            args: Prisma.FooterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          createMany: {
            args: Prisma.FooterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FooterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          delete: {
            args: Prisma.FooterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          update: {
            args: Prisma.FooterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          deleteMany: {
            args: Prisma.FooterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FooterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FooterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>[]
          }
          upsert: {
            args: Prisma.FooterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterPayload>
          }
          aggregate: {
            args: Prisma.FooterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFooter>
          }
          groupBy: {
            args: Prisma.FooterGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooterGroupByOutputType>[]
          }
          count: {
            args: Prisma.FooterCountArgs<ExtArgs>
            result: $Utils.Optional<FooterCountAggregateOutputType> | number
          }
        }
      }
      Translation: {
        payload: Prisma.$TranslationPayload<ExtArgs>
        fields: Prisma.TranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findFirst: {
            args: Prisma.TranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findMany: {
            args: Prisma.TranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          create: {
            args: Prisma.TranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          createMany: {
            args: Prisma.TranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          delete: {
            args: Prisma.TranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          update: {
            args: Prisma.TranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          deleteMany: {
            args: Prisma.TranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          upsert: {
            args: Prisma.TranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          aggregate: {
            args: Prisma.TranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslation>
          }
          groupBy: {
            args: Prisma.TranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    showreelProject?: ShowreelProjectOmit
    experience?: ExperienceOmit
    galleryShot?: GalleryShotOmit
    skillSection?: SkillSectionOmit
    contactInfo?: ContactInfoOmit
    hero?: HeroOmit
    cta?: CtaOmit
    footer?: FooterOmit
    translation?: TranslationOmit
    language?: LanguageOmit
    adminUser?: AdminUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ShowreelProject
   */

  export type AggregateShowreelProject = {
    _count: ShowreelProjectCountAggregateOutputType | null
    _avg: ShowreelProjectAvgAggregateOutputType | null
    _sum: ShowreelProjectSumAggregateOutputType | null
    _min: ShowreelProjectMinAggregateOutputType | null
    _max: ShowreelProjectMaxAggregateOutputType | null
  }

  export type ShowreelProjectAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ShowreelProjectSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ShowreelProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    href: string | null
    imageUrl: string | null
    imagePublicId: string | null
    subKey: string | null
    delay: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowreelProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    href: string | null
    imageUrl: string | null
    imagePublicId: string | null
    subKey: string | null
    delay: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowreelProjectCountAggregateOutputType = {
    id: number
    title: number
    href: number
    imageUrl: number
    imagePublicId: number
    subKey: number
    delay: number
    order: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowreelProjectAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ShowreelProjectSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ShowreelProjectMinAggregateInputType = {
    id?: true
    title?: true
    href?: true
    imageUrl?: true
    imagePublicId?: true
    subKey?: true
    delay?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowreelProjectMaxAggregateInputType = {
    id?: true
    title?: true
    href?: true
    imageUrl?: true
    imagePublicId?: true
    subKey?: true
    delay?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowreelProjectCountAggregateInputType = {
    id?: true
    title?: true
    href?: true
    imageUrl?: true
    imagePublicId?: true
    subKey?: true
    delay?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowreelProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowreelProject to aggregate.
     */
    where?: ShowreelProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowreelProjects to fetch.
     */
    orderBy?: ShowreelProjectOrderByWithRelationInput | ShowreelProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowreelProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowreelProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowreelProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowreelProjects
    **/
    _count?: true | ShowreelProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowreelProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowreelProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowreelProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowreelProjectMaxAggregateInputType
  }

  export type GetShowreelProjectAggregateType<T extends ShowreelProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateShowreelProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowreelProject[P]>
      : GetScalarType<T[P], AggregateShowreelProject[P]>
  }




  export type ShowreelProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowreelProjectWhereInput
    orderBy?: ShowreelProjectOrderByWithAggregationInput | ShowreelProjectOrderByWithAggregationInput[]
    by: ShowreelProjectScalarFieldEnum[] | ShowreelProjectScalarFieldEnum
    having?: ShowreelProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowreelProjectCountAggregateInputType | true
    _avg?: ShowreelProjectAvgAggregateInputType
    _sum?: ShowreelProjectSumAggregateInputType
    _min?: ShowreelProjectMinAggregateInputType
    _max?: ShowreelProjectMaxAggregateInputType
  }

  export type ShowreelProjectGroupByOutputType = {
    id: number
    title: string
    href: string
    imageUrl: string
    imagePublicId: string
    subKey: string
    delay: string
    order: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShowreelProjectCountAggregateOutputType | null
    _avg: ShowreelProjectAvgAggregateOutputType | null
    _sum: ShowreelProjectSumAggregateOutputType | null
    _min: ShowreelProjectMinAggregateOutputType | null
    _max: ShowreelProjectMaxAggregateOutputType | null
  }

  type GetShowreelProjectGroupByPayload<T extends ShowreelProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowreelProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowreelProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowreelProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ShowreelProjectGroupByOutputType[P]>
        }
      >
    >


  export type ShowreelProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    href?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    subKey?: boolean
    delay?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["showreelProject"]>

  export type ShowreelProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    href?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    subKey?: boolean
    delay?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["showreelProject"]>

  export type ShowreelProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    href?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    subKey?: boolean
    delay?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["showreelProject"]>

  export type ShowreelProjectSelectScalar = {
    id?: boolean
    title?: boolean
    href?: boolean
    imageUrl?: boolean
    imagePublicId?: boolean
    subKey?: boolean
    delay?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowreelProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "href" | "imageUrl" | "imagePublicId" | "subKey" | "delay" | "order" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["showreelProject"]>

  export type $ShowreelProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShowreelProject"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      href: string
      imageUrl: string
      imagePublicId: string
      subKey: string
      delay: string
      order: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["showreelProject"]>
    composites: {}
  }

  type ShowreelProjectGetPayload<S extends boolean | null | undefined | ShowreelProjectDefaultArgs> = $Result.GetResult<Prisma.$ShowreelProjectPayload, S>

  type ShowreelProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowreelProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowreelProjectCountAggregateInputType | true
    }

  export interface ShowreelProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShowreelProject'], meta: { name: 'ShowreelProject' } }
    /**
     * Find zero or one ShowreelProject that matches the filter.
     * @param {ShowreelProjectFindUniqueArgs} args - Arguments to find a ShowreelProject
     * @example
     * // Get one ShowreelProject
     * const showreelProject = await prisma.showreelProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowreelProjectFindUniqueArgs>(args: SelectSubset<T, ShowreelProjectFindUniqueArgs<ExtArgs>>): Prisma__ShowreelProjectClient<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShowreelProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowreelProjectFindUniqueOrThrowArgs} args - Arguments to find a ShowreelProject
     * @example
     * // Get one ShowreelProject
     * const showreelProject = await prisma.showreelProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowreelProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowreelProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowreelProjectClient<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowreelProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowreelProjectFindFirstArgs} args - Arguments to find a ShowreelProject
     * @example
     * // Get one ShowreelProject
     * const showreelProject = await prisma.showreelProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowreelProjectFindFirstArgs>(args?: SelectSubset<T, ShowreelProjectFindFirstArgs<ExtArgs>>): Prisma__ShowreelProjectClient<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowreelProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowreelProjectFindFirstOrThrowArgs} args - Arguments to find a ShowreelProject
     * @example
     * // Get one ShowreelProject
     * const showreelProject = await prisma.showreelProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowreelProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowreelProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowreelProjectClient<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShowreelProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowreelProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowreelProjects
     * const showreelProjects = await prisma.showreelProject.findMany()
     * 
     * // Get first 10 ShowreelProjects
     * const showreelProjects = await prisma.showreelProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showreelProjectWithIdOnly = await prisma.showreelProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowreelProjectFindManyArgs>(args?: SelectSubset<T, ShowreelProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShowreelProject.
     * @param {ShowreelProjectCreateArgs} args - Arguments to create a ShowreelProject.
     * @example
     * // Create one ShowreelProject
     * const ShowreelProject = await prisma.showreelProject.create({
     *   data: {
     *     // ... data to create a ShowreelProject
     *   }
     * })
     * 
     */
    create<T extends ShowreelProjectCreateArgs>(args: SelectSubset<T, ShowreelProjectCreateArgs<ExtArgs>>): Prisma__ShowreelProjectClient<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShowreelProjects.
     * @param {ShowreelProjectCreateManyArgs} args - Arguments to create many ShowreelProjects.
     * @example
     * // Create many ShowreelProjects
     * const showreelProject = await prisma.showreelProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowreelProjectCreateManyArgs>(args?: SelectSubset<T, ShowreelProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShowreelProjects and returns the data saved in the database.
     * @param {ShowreelProjectCreateManyAndReturnArgs} args - Arguments to create many ShowreelProjects.
     * @example
     * // Create many ShowreelProjects
     * const showreelProject = await prisma.showreelProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShowreelProjects and only return the `id`
     * const showreelProjectWithIdOnly = await prisma.showreelProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowreelProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowreelProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShowreelProject.
     * @param {ShowreelProjectDeleteArgs} args - Arguments to delete one ShowreelProject.
     * @example
     * // Delete one ShowreelProject
     * const ShowreelProject = await prisma.showreelProject.delete({
     *   where: {
     *     // ... filter to delete one ShowreelProject
     *   }
     * })
     * 
     */
    delete<T extends ShowreelProjectDeleteArgs>(args: SelectSubset<T, ShowreelProjectDeleteArgs<ExtArgs>>): Prisma__ShowreelProjectClient<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShowreelProject.
     * @param {ShowreelProjectUpdateArgs} args - Arguments to update one ShowreelProject.
     * @example
     * // Update one ShowreelProject
     * const showreelProject = await prisma.showreelProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowreelProjectUpdateArgs>(args: SelectSubset<T, ShowreelProjectUpdateArgs<ExtArgs>>): Prisma__ShowreelProjectClient<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShowreelProjects.
     * @param {ShowreelProjectDeleteManyArgs} args - Arguments to filter ShowreelProjects to delete.
     * @example
     * // Delete a few ShowreelProjects
     * const { count } = await prisma.showreelProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowreelProjectDeleteManyArgs>(args?: SelectSubset<T, ShowreelProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowreelProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowreelProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowreelProjects
     * const showreelProject = await prisma.showreelProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowreelProjectUpdateManyArgs>(args: SelectSubset<T, ShowreelProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowreelProjects and returns the data updated in the database.
     * @param {ShowreelProjectUpdateManyAndReturnArgs} args - Arguments to update many ShowreelProjects.
     * @example
     * // Update many ShowreelProjects
     * const showreelProject = await prisma.showreelProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShowreelProjects and only return the `id`
     * const showreelProjectWithIdOnly = await prisma.showreelProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShowreelProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowreelProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShowreelProject.
     * @param {ShowreelProjectUpsertArgs} args - Arguments to update or create a ShowreelProject.
     * @example
     * // Update or create a ShowreelProject
     * const showreelProject = await prisma.showreelProject.upsert({
     *   create: {
     *     // ... data to create a ShowreelProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowreelProject we want to update
     *   }
     * })
     */
    upsert<T extends ShowreelProjectUpsertArgs>(args: SelectSubset<T, ShowreelProjectUpsertArgs<ExtArgs>>): Prisma__ShowreelProjectClient<$Result.GetResult<Prisma.$ShowreelProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShowreelProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowreelProjectCountArgs} args - Arguments to filter ShowreelProjects to count.
     * @example
     * // Count the number of ShowreelProjects
     * const count = await prisma.showreelProject.count({
     *   where: {
     *     // ... the filter for the ShowreelProjects we want to count
     *   }
     * })
    **/
    count<T extends ShowreelProjectCountArgs>(
      args?: Subset<T, ShowreelProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowreelProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowreelProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowreelProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowreelProjectAggregateArgs>(args: Subset<T, ShowreelProjectAggregateArgs>): Prisma.PrismaPromise<GetShowreelProjectAggregateType<T>>

    /**
     * Group by ShowreelProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowreelProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowreelProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowreelProjectGroupByArgs['orderBy'] }
        : { orderBy?: ShowreelProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowreelProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowreelProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShowreelProject model
   */
  readonly fields: ShowreelProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowreelProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowreelProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShowreelProject model
   */
  interface ShowreelProjectFieldRefs {
    readonly id: FieldRef<"ShowreelProject", 'Int'>
    readonly title: FieldRef<"ShowreelProject", 'String'>
    readonly href: FieldRef<"ShowreelProject", 'String'>
    readonly imageUrl: FieldRef<"ShowreelProject", 'String'>
    readonly imagePublicId: FieldRef<"ShowreelProject", 'String'>
    readonly subKey: FieldRef<"ShowreelProject", 'String'>
    readonly delay: FieldRef<"ShowreelProject", 'String'>
    readonly order: FieldRef<"ShowreelProject", 'Int'>
    readonly active: FieldRef<"ShowreelProject", 'Boolean'>
    readonly createdAt: FieldRef<"ShowreelProject", 'DateTime'>
    readonly updatedAt: FieldRef<"ShowreelProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShowreelProject findUnique
   */
  export type ShowreelProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * Filter, which ShowreelProject to fetch.
     */
    where: ShowreelProjectWhereUniqueInput
  }

  /**
   * ShowreelProject findUniqueOrThrow
   */
  export type ShowreelProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * Filter, which ShowreelProject to fetch.
     */
    where: ShowreelProjectWhereUniqueInput
  }

  /**
   * ShowreelProject findFirst
   */
  export type ShowreelProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * Filter, which ShowreelProject to fetch.
     */
    where?: ShowreelProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowreelProjects to fetch.
     */
    orderBy?: ShowreelProjectOrderByWithRelationInput | ShowreelProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowreelProjects.
     */
    cursor?: ShowreelProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowreelProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowreelProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowreelProjects.
     */
    distinct?: ShowreelProjectScalarFieldEnum | ShowreelProjectScalarFieldEnum[]
  }

  /**
   * ShowreelProject findFirstOrThrow
   */
  export type ShowreelProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * Filter, which ShowreelProject to fetch.
     */
    where?: ShowreelProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowreelProjects to fetch.
     */
    orderBy?: ShowreelProjectOrderByWithRelationInput | ShowreelProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowreelProjects.
     */
    cursor?: ShowreelProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowreelProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowreelProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowreelProjects.
     */
    distinct?: ShowreelProjectScalarFieldEnum | ShowreelProjectScalarFieldEnum[]
  }

  /**
   * ShowreelProject findMany
   */
  export type ShowreelProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * Filter, which ShowreelProjects to fetch.
     */
    where?: ShowreelProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowreelProjects to fetch.
     */
    orderBy?: ShowreelProjectOrderByWithRelationInput | ShowreelProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowreelProjects.
     */
    cursor?: ShowreelProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowreelProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowreelProjects.
     */
    skip?: number
    distinct?: ShowreelProjectScalarFieldEnum | ShowreelProjectScalarFieldEnum[]
  }

  /**
   * ShowreelProject create
   */
  export type ShowreelProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * The data needed to create a ShowreelProject.
     */
    data: XOR<ShowreelProjectCreateInput, ShowreelProjectUncheckedCreateInput>
  }

  /**
   * ShowreelProject createMany
   */
  export type ShowreelProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShowreelProjects.
     */
    data: ShowreelProjectCreateManyInput | ShowreelProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowreelProject createManyAndReturn
   */
  export type ShowreelProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * The data used to create many ShowreelProjects.
     */
    data: ShowreelProjectCreateManyInput | ShowreelProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowreelProject update
   */
  export type ShowreelProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * The data needed to update a ShowreelProject.
     */
    data: XOR<ShowreelProjectUpdateInput, ShowreelProjectUncheckedUpdateInput>
    /**
     * Choose, which ShowreelProject to update.
     */
    where: ShowreelProjectWhereUniqueInput
  }

  /**
   * ShowreelProject updateMany
   */
  export type ShowreelProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShowreelProjects.
     */
    data: XOR<ShowreelProjectUpdateManyMutationInput, ShowreelProjectUncheckedUpdateManyInput>
    /**
     * Filter which ShowreelProjects to update
     */
    where?: ShowreelProjectWhereInput
    /**
     * Limit how many ShowreelProjects to update.
     */
    limit?: number
  }

  /**
   * ShowreelProject updateManyAndReturn
   */
  export type ShowreelProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * The data used to update ShowreelProjects.
     */
    data: XOR<ShowreelProjectUpdateManyMutationInput, ShowreelProjectUncheckedUpdateManyInput>
    /**
     * Filter which ShowreelProjects to update
     */
    where?: ShowreelProjectWhereInput
    /**
     * Limit how many ShowreelProjects to update.
     */
    limit?: number
  }

  /**
   * ShowreelProject upsert
   */
  export type ShowreelProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * The filter to search for the ShowreelProject to update in case it exists.
     */
    where: ShowreelProjectWhereUniqueInput
    /**
     * In case the ShowreelProject found by the `where` argument doesn't exist, create a new ShowreelProject with this data.
     */
    create: XOR<ShowreelProjectCreateInput, ShowreelProjectUncheckedCreateInput>
    /**
     * In case the ShowreelProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowreelProjectUpdateInput, ShowreelProjectUncheckedUpdateInput>
  }

  /**
   * ShowreelProject delete
   */
  export type ShowreelProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
    /**
     * Filter which ShowreelProject to delete.
     */
    where: ShowreelProjectWhereUniqueInput
  }

  /**
   * ShowreelProject deleteMany
   */
  export type ShowreelProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowreelProjects to delete
     */
    where?: ShowreelProjectWhereInput
    /**
     * Limit how many ShowreelProjects to delete.
     */
    limit?: number
  }

  /**
   * ShowreelProject without action
   */
  export type ShowreelProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowreelProject
     */
    select?: ShowreelProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowreelProject
     */
    omit?: ShowreelProjectOmit<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    title: string | null
    role: string | null
    meta: string | null
    category: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    role: string | null
    meta: string | null
    category: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    title: number
    role: number
    meta: number
    category: number
    order: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    title?: true
    role?: true
    meta?: true
    category?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    title?: true
    role?: true
    meta?: true
    category?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    title?: true
    role?: true
    meta?: true
    category?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    title: string
    role: string
    meta: string
    category: string
    order: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    role?: boolean
    meta?: boolean
    category?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    role?: boolean
    meta?: boolean
    category?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    role?: boolean
    meta?: boolean
    category?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    title?: boolean
    role?: boolean
    meta?: boolean
    category?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "role" | "meta" | "category" | "order" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["experience"]>

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      role: string
      meta: string
      category: string
      order: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly title: FieldRef<"Experience", 'String'>
    readonly role: FieldRef<"Experience", 'String'>
    readonly meta: FieldRef<"Experience", 'String'>
    readonly category: FieldRef<"Experience", 'String'>
    readonly order: FieldRef<"Experience", 'Int'>
    readonly active: FieldRef<"Experience", 'Boolean'>
    readonly createdAt: FieldRef<"Experience", 'DateTime'>
    readonly updatedAt: FieldRef<"Experience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
  }


  /**
   * Model GalleryShot
   */

  export type AggregateGalleryShot = {
    _count: GalleryShotCountAggregateOutputType | null
    _avg: GalleryShotAvgAggregateOutputType | null
    _sum: GalleryShotSumAggregateOutputType | null
    _min: GalleryShotMinAggregateOutputType | null
    _max: GalleryShotMaxAggregateOutputType | null
  }

  export type GalleryShotAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type GalleryShotSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type GalleryShotMinAggregateOutputType = {
    id: number | null
    src: string | null
    publicId: string | null
    alt: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryShotMaxAggregateOutputType = {
    id: number | null
    src: string | null
    publicId: string | null
    alt: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryShotCountAggregateOutputType = {
    id: number
    src: number
    publicId: number
    alt: number
    order: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryShotAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type GalleryShotSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type GalleryShotMinAggregateInputType = {
    id?: true
    src?: true
    publicId?: true
    alt?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryShotMaxAggregateInputType = {
    id?: true
    src?: true
    publicId?: true
    alt?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryShotCountAggregateInputType = {
    id?: true
    src?: true
    publicId?: true
    alt?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryShotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryShot to aggregate.
     */
    where?: GalleryShotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryShots to fetch.
     */
    orderBy?: GalleryShotOrderByWithRelationInput | GalleryShotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryShotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryShots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryShots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryShots
    **/
    _count?: true | GalleryShotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryShotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryShotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryShotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryShotMaxAggregateInputType
  }

  export type GetGalleryShotAggregateType<T extends GalleryShotAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryShot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryShot[P]>
      : GetScalarType<T[P], AggregateGalleryShot[P]>
  }




  export type GalleryShotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryShotWhereInput
    orderBy?: GalleryShotOrderByWithAggregationInput | GalleryShotOrderByWithAggregationInput[]
    by: GalleryShotScalarFieldEnum[] | GalleryShotScalarFieldEnum
    having?: GalleryShotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryShotCountAggregateInputType | true
    _avg?: GalleryShotAvgAggregateInputType
    _sum?: GalleryShotSumAggregateInputType
    _min?: GalleryShotMinAggregateInputType
    _max?: GalleryShotMaxAggregateInputType
  }

  export type GalleryShotGroupByOutputType = {
    id: number
    src: string
    publicId: string
    alt: string
    order: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: GalleryShotCountAggregateOutputType | null
    _avg: GalleryShotAvgAggregateOutputType | null
    _sum: GalleryShotSumAggregateOutputType | null
    _min: GalleryShotMinAggregateOutputType | null
    _max: GalleryShotMaxAggregateOutputType | null
  }

  type GetGalleryShotGroupByPayload<T extends GalleryShotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryShotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryShotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryShotGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryShotGroupByOutputType[P]>
        }
      >
    >


  export type GalleryShotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    publicId?: boolean
    alt?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryShot"]>

  export type GalleryShotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    publicId?: boolean
    alt?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryShot"]>

  export type GalleryShotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    publicId?: boolean
    alt?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryShot"]>

  export type GalleryShotSelectScalar = {
    id?: boolean
    src?: boolean
    publicId?: boolean
    alt?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryShotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "src" | "publicId" | "alt" | "order" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["galleryShot"]>

  export type $GalleryShotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryShot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      src: string
      publicId: string
      alt: string
      order: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galleryShot"]>
    composites: {}
  }

  type GalleryShotGetPayload<S extends boolean | null | undefined | GalleryShotDefaultArgs> = $Result.GetResult<Prisma.$GalleryShotPayload, S>

  type GalleryShotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryShotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryShotCountAggregateInputType | true
    }

  export interface GalleryShotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryShot'], meta: { name: 'GalleryShot' } }
    /**
     * Find zero or one GalleryShot that matches the filter.
     * @param {GalleryShotFindUniqueArgs} args - Arguments to find a GalleryShot
     * @example
     * // Get one GalleryShot
     * const galleryShot = await prisma.galleryShot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryShotFindUniqueArgs>(args: SelectSubset<T, GalleryShotFindUniqueArgs<ExtArgs>>): Prisma__GalleryShotClient<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryShot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryShotFindUniqueOrThrowArgs} args - Arguments to find a GalleryShot
     * @example
     * // Get one GalleryShot
     * const galleryShot = await prisma.galleryShot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryShotFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryShotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryShotClient<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryShot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryShotFindFirstArgs} args - Arguments to find a GalleryShot
     * @example
     * // Get one GalleryShot
     * const galleryShot = await prisma.galleryShot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryShotFindFirstArgs>(args?: SelectSubset<T, GalleryShotFindFirstArgs<ExtArgs>>): Prisma__GalleryShotClient<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryShot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryShotFindFirstOrThrowArgs} args - Arguments to find a GalleryShot
     * @example
     * // Get one GalleryShot
     * const galleryShot = await prisma.galleryShot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryShotFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryShotFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryShotClient<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryShots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryShotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryShots
     * const galleryShots = await prisma.galleryShot.findMany()
     * 
     * // Get first 10 GalleryShots
     * const galleryShots = await prisma.galleryShot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryShotWithIdOnly = await prisma.galleryShot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryShotFindManyArgs>(args?: SelectSubset<T, GalleryShotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryShot.
     * @param {GalleryShotCreateArgs} args - Arguments to create a GalleryShot.
     * @example
     * // Create one GalleryShot
     * const GalleryShot = await prisma.galleryShot.create({
     *   data: {
     *     // ... data to create a GalleryShot
     *   }
     * })
     * 
     */
    create<T extends GalleryShotCreateArgs>(args: SelectSubset<T, GalleryShotCreateArgs<ExtArgs>>): Prisma__GalleryShotClient<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryShots.
     * @param {GalleryShotCreateManyArgs} args - Arguments to create many GalleryShots.
     * @example
     * // Create many GalleryShots
     * const galleryShot = await prisma.galleryShot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryShotCreateManyArgs>(args?: SelectSubset<T, GalleryShotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryShots and returns the data saved in the database.
     * @param {GalleryShotCreateManyAndReturnArgs} args - Arguments to create many GalleryShots.
     * @example
     * // Create many GalleryShots
     * const galleryShot = await prisma.galleryShot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryShots and only return the `id`
     * const galleryShotWithIdOnly = await prisma.galleryShot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryShotCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryShotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryShot.
     * @param {GalleryShotDeleteArgs} args - Arguments to delete one GalleryShot.
     * @example
     * // Delete one GalleryShot
     * const GalleryShot = await prisma.galleryShot.delete({
     *   where: {
     *     // ... filter to delete one GalleryShot
     *   }
     * })
     * 
     */
    delete<T extends GalleryShotDeleteArgs>(args: SelectSubset<T, GalleryShotDeleteArgs<ExtArgs>>): Prisma__GalleryShotClient<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryShot.
     * @param {GalleryShotUpdateArgs} args - Arguments to update one GalleryShot.
     * @example
     * // Update one GalleryShot
     * const galleryShot = await prisma.galleryShot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryShotUpdateArgs>(args: SelectSubset<T, GalleryShotUpdateArgs<ExtArgs>>): Prisma__GalleryShotClient<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryShots.
     * @param {GalleryShotDeleteManyArgs} args - Arguments to filter GalleryShots to delete.
     * @example
     * // Delete a few GalleryShots
     * const { count } = await prisma.galleryShot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryShotDeleteManyArgs>(args?: SelectSubset<T, GalleryShotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryShots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryShotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryShots
     * const galleryShot = await prisma.galleryShot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryShotUpdateManyArgs>(args: SelectSubset<T, GalleryShotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryShots and returns the data updated in the database.
     * @param {GalleryShotUpdateManyAndReturnArgs} args - Arguments to update many GalleryShots.
     * @example
     * // Update many GalleryShots
     * const galleryShot = await prisma.galleryShot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryShots and only return the `id`
     * const galleryShotWithIdOnly = await prisma.galleryShot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryShotUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryShotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryShot.
     * @param {GalleryShotUpsertArgs} args - Arguments to update or create a GalleryShot.
     * @example
     * // Update or create a GalleryShot
     * const galleryShot = await prisma.galleryShot.upsert({
     *   create: {
     *     // ... data to create a GalleryShot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryShot we want to update
     *   }
     * })
     */
    upsert<T extends GalleryShotUpsertArgs>(args: SelectSubset<T, GalleryShotUpsertArgs<ExtArgs>>): Prisma__GalleryShotClient<$Result.GetResult<Prisma.$GalleryShotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryShots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryShotCountArgs} args - Arguments to filter GalleryShots to count.
     * @example
     * // Count the number of GalleryShots
     * const count = await prisma.galleryShot.count({
     *   where: {
     *     // ... the filter for the GalleryShots we want to count
     *   }
     * })
    **/
    count<T extends GalleryShotCountArgs>(
      args?: Subset<T, GalleryShotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryShotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryShot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryShotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryShotAggregateArgs>(args: Subset<T, GalleryShotAggregateArgs>): Prisma.PrismaPromise<GetGalleryShotAggregateType<T>>

    /**
     * Group by GalleryShot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryShotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryShotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryShotGroupByArgs['orderBy'] }
        : { orderBy?: GalleryShotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryShotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryShotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryShot model
   */
  readonly fields: GalleryShotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryShot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryShotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryShot model
   */
  interface GalleryShotFieldRefs {
    readonly id: FieldRef<"GalleryShot", 'Int'>
    readonly src: FieldRef<"GalleryShot", 'String'>
    readonly publicId: FieldRef<"GalleryShot", 'String'>
    readonly alt: FieldRef<"GalleryShot", 'String'>
    readonly order: FieldRef<"GalleryShot", 'Int'>
    readonly active: FieldRef<"GalleryShot", 'Boolean'>
    readonly createdAt: FieldRef<"GalleryShot", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryShot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryShot findUnique
   */
  export type GalleryShotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * Filter, which GalleryShot to fetch.
     */
    where: GalleryShotWhereUniqueInput
  }

  /**
   * GalleryShot findUniqueOrThrow
   */
  export type GalleryShotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * Filter, which GalleryShot to fetch.
     */
    where: GalleryShotWhereUniqueInput
  }

  /**
   * GalleryShot findFirst
   */
  export type GalleryShotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * Filter, which GalleryShot to fetch.
     */
    where?: GalleryShotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryShots to fetch.
     */
    orderBy?: GalleryShotOrderByWithRelationInput | GalleryShotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryShots.
     */
    cursor?: GalleryShotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryShots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryShots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryShots.
     */
    distinct?: GalleryShotScalarFieldEnum | GalleryShotScalarFieldEnum[]
  }

  /**
   * GalleryShot findFirstOrThrow
   */
  export type GalleryShotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * Filter, which GalleryShot to fetch.
     */
    where?: GalleryShotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryShots to fetch.
     */
    orderBy?: GalleryShotOrderByWithRelationInput | GalleryShotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryShots.
     */
    cursor?: GalleryShotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryShots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryShots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryShots.
     */
    distinct?: GalleryShotScalarFieldEnum | GalleryShotScalarFieldEnum[]
  }

  /**
   * GalleryShot findMany
   */
  export type GalleryShotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * Filter, which GalleryShots to fetch.
     */
    where?: GalleryShotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryShots to fetch.
     */
    orderBy?: GalleryShotOrderByWithRelationInput | GalleryShotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryShots.
     */
    cursor?: GalleryShotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryShots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryShots.
     */
    skip?: number
    distinct?: GalleryShotScalarFieldEnum | GalleryShotScalarFieldEnum[]
  }

  /**
   * GalleryShot create
   */
  export type GalleryShotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryShot.
     */
    data: XOR<GalleryShotCreateInput, GalleryShotUncheckedCreateInput>
  }

  /**
   * GalleryShot createMany
   */
  export type GalleryShotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryShots.
     */
    data: GalleryShotCreateManyInput | GalleryShotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryShot createManyAndReturn
   */
  export type GalleryShotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryShots.
     */
    data: GalleryShotCreateManyInput | GalleryShotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryShot update
   */
  export type GalleryShotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryShot.
     */
    data: XOR<GalleryShotUpdateInput, GalleryShotUncheckedUpdateInput>
    /**
     * Choose, which GalleryShot to update.
     */
    where: GalleryShotWhereUniqueInput
  }

  /**
   * GalleryShot updateMany
   */
  export type GalleryShotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryShots.
     */
    data: XOR<GalleryShotUpdateManyMutationInput, GalleryShotUncheckedUpdateManyInput>
    /**
     * Filter which GalleryShots to update
     */
    where?: GalleryShotWhereInput
    /**
     * Limit how many GalleryShots to update.
     */
    limit?: number
  }

  /**
   * GalleryShot updateManyAndReturn
   */
  export type GalleryShotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * The data used to update GalleryShots.
     */
    data: XOR<GalleryShotUpdateManyMutationInput, GalleryShotUncheckedUpdateManyInput>
    /**
     * Filter which GalleryShots to update
     */
    where?: GalleryShotWhereInput
    /**
     * Limit how many GalleryShots to update.
     */
    limit?: number
  }

  /**
   * GalleryShot upsert
   */
  export type GalleryShotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryShot to update in case it exists.
     */
    where: GalleryShotWhereUniqueInput
    /**
     * In case the GalleryShot found by the `where` argument doesn't exist, create a new GalleryShot with this data.
     */
    create: XOR<GalleryShotCreateInput, GalleryShotUncheckedCreateInput>
    /**
     * In case the GalleryShot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryShotUpdateInput, GalleryShotUncheckedUpdateInput>
  }

  /**
   * GalleryShot delete
   */
  export type GalleryShotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
    /**
     * Filter which GalleryShot to delete.
     */
    where: GalleryShotWhereUniqueInput
  }

  /**
   * GalleryShot deleteMany
   */
  export type GalleryShotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryShots to delete
     */
    where?: GalleryShotWhereInput
    /**
     * Limit how many GalleryShots to delete.
     */
    limit?: number
  }

  /**
   * GalleryShot without action
   */
  export type GalleryShotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryShot
     */
    select?: GalleryShotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryShot
     */
    omit?: GalleryShotOmit<ExtArgs> | null
  }


  /**
   * Model SkillSection
   */

  export type AggregateSkillSection = {
    _count: SkillSectionCountAggregateOutputType | null
    _avg: SkillSectionAvgAggregateOutputType | null
    _sum: SkillSectionSumAggregateOutputType | null
    _min: SkillSectionMinAggregateOutputType | null
    _max: SkillSectionMaxAggregateOutputType | null
  }

  export type SkillSectionAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type SkillSectionSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type SkillSectionMinAggregateOutputType = {
    id: number | null
    section: string | null
    title: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillSectionMaxAggregateOutputType = {
    id: number | null
    section: string | null
    title: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillSectionCountAggregateOutputType = {
    id: number
    section: number
    title: number
    items: number
    order: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillSectionAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type SkillSectionSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type SkillSectionMinAggregateInputType = {
    id?: true
    section?: true
    title?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillSectionMaxAggregateInputType = {
    id?: true
    section?: true
    title?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillSectionCountAggregateInputType = {
    id?: true
    section?: true
    title?: true
    items?: true
    order?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillSection to aggregate.
     */
    where?: SkillSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSections to fetch.
     */
    orderBy?: SkillSectionOrderByWithRelationInput | SkillSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillSections
    **/
    _count?: true | SkillSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillSectionMaxAggregateInputType
  }

  export type GetSkillSectionAggregateType<T extends SkillSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillSection[P]>
      : GetScalarType<T[P], AggregateSkillSection[P]>
  }




  export type SkillSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillSectionWhereInput
    orderBy?: SkillSectionOrderByWithAggregationInput | SkillSectionOrderByWithAggregationInput[]
    by: SkillSectionScalarFieldEnum[] | SkillSectionScalarFieldEnum
    having?: SkillSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillSectionCountAggregateInputType | true
    _avg?: SkillSectionAvgAggregateInputType
    _sum?: SkillSectionSumAggregateInputType
    _min?: SkillSectionMinAggregateInputType
    _max?: SkillSectionMaxAggregateInputType
  }

  export type SkillSectionGroupByOutputType = {
    id: number
    section: string
    title: string
    items: JsonValue
    order: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: SkillSectionCountAggregateOutputType | null
    _avg: SkillSectionAvgAggregateOutputType | null
    _sum: SkillSectionSumAggregateOutputType | null
    _min: SkillSectionMinAggregateOutputType | null
    _max: SkillSectionMaxAggregateOutputType | null
  }

  type GetSkillSectionGroupByPayload<T extends SkillSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillSectionGroupByOutputType[P]>
            : GetScalarType<T[P], SkillSectionGroupByOutputType[P]>
        }
      >
    >


  export type SkillSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    title?: boolean
    items?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillSection"]>

  export type SkillSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    title?: boolean
    items?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillSection"]>

  export type SkillSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    section?: boolean
    title?: boolean
    items?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillSection"]>

  export type SkillSectionSelectScalar = {
    id?: boolean
    section?: boolean
    title?: boolean
    items?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "section" | "title" | "items" | "order" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["skillSection"]>

  export type $SkillSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      section: string
      title: string
      items: Prisma.JsonValue
      order: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skillSection"]>
    composites: {}
  }

  type SkillSectionGetPayload<S extends boolean | null | undefined | SkillSectionDefaultArgs> = $Result.GetResult<Prisma.$SkillSectionPayload, S>

  type SkillSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillSectionCountAggregateInputType | true
    }

  export interface SkillSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillSection'], meta: { name: 'SkillSection' } }
    /**
     * Find zero or one SkillSection that matches the filter.
     * @param {SkillSectionFindUniqueArgs} args - Arguments to find a SkillSection
     * @example
     * // Get one SkillSection
     * const skillSection = await prisma.skillSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillSectionFindUniqueArgs>(args: SelectSubset<T, SkillSectionFindUniqueArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillSectionFindUniqueOrThrowArgs} args - Arguments to find a SkillSection
     * @example
     * // Get one SkillSection
     * const skillSection = await prisma.skillSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionFindFirstArgs} args - Arguments to find a SkillSection
     * @example
     * // Get one SkillSection
     * const skillSection = await prisma.skillSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillSectionFindFirstArgs>(args?: SelectSubset<T, SkillSectionFindFirstArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionFindFirstOrThrowArgs} args - Arguments to find a SkillSection
     * @example
     * // Get one SkillSection
     * const skillSection = await prisma.skillSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillSections
     * const skillSections = await prisma.skillSection.findMany()
     * 
     * // Get first 10 SkillSections
     * const skillSections = await prisma.skillSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillSectionWithIdOnly = await prisma.skillSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillSectionFindManyArgs>(args?: SelectSubset<T, SkillSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillSection.
     * @param {SkillSectionCreateArgs} args - Arguments to create a SkillSection.
     * @example
     * // Create one SkillSection
     * const SkillSection = await prisma.skillSection.create({
     *   data: {
     *     // ... data to create a SkillSection
     *   }
     * })
     * 
     */
    create<T extends SkillSectionCreateArgs>(args: SelectSubset<T, SkillSectionCreateArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillSections.
     * @param {SkillSectionCreateManyArgs} args - Arguments to create many SkillSections.
     * @example
     * // Create many SkillSections
     * const skillSection = await prisma.skillSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillSectionCreateManyArgs>(args?: SelectSubset<T, SkillSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillSections and returns the data saved in the database.
     * @param {SkillSectionCreateManyAndReturnArgs} args - Arguments to create many SkillSections.
     * @example
     * // Create many SkillSections
     * const skillSection = await prisma.skillSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillSections and only return the `id`
     * const skillSectionWithIdOnly = await prisma.skillSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillSection.
     * @param {SkillSectionDeleteArgs} args - Arguments to delete one SkillSection.
     * @example
     * // Delete one SkillSection
     * const SkillSection = await prisma.skillSection.delete({
     *   where: {
     *     // ... filter to delete one SkillSection
     *   }
     * })
     * 
     */
    delete<T extends SkillSectionDeleteArgs>(args: SelectSubset<T, SkillSectionDeleteArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillSection.
     * @param {SkillSectionUpdateArgs} args - Arguments to update one SkillSection.
     * @example
     * // Update one SkillSection
     * const skillSection = await prisma.skillSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillSectionUpdateArgs>(args: SelectSubset<T, SkillSectionUpdateArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillSections.
     * @param {SkillSectionDeleteManyArgs} args - Arguments to filter SkillSections to delete.
     * @example
     * // Delete a few SkillSections
     * const { count } = await prisma.skillSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillSectionDeleteManyArgs>(args?: SelectSubset<T, SkillSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillSections
     * const skillSection = await prisma.skillSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillSectionUpdateManyArgs>(args: SelectSubset<T, SkillSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillSections and returns the data updated in the database.
     * @param {SkillSectionUpdateManyAndReturnArgs} args - Arguments to update many SkillSections.
     * @example
     * // Update many SkillSections
     * const skillSection = await prisma.skillSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillSections and only return the `id`
     * const skillSectionWithIdOnly = await prisma.skillSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillSection.
     * @param {SkillSectionUpsertArgs} args - Arguments to update or create a SkillSection.
     * @example
     * // Update or create a SkillSection
     * const skillSection = await prisma.skillSection.upsert({
     *   create: {
     *     // ... data to create a SkillSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillSection we want to update
     *   }
     * })
     */
    upsert<T extends SkillSectionUpsertArgs>(args: SelectSubset<T, SkillSectionUpsertArgs<ExtArgs>>): Prisma__SkillSectionClient<$Result.GetResult<Prisma.$SkillSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionCountArgs} args - Arguments to filter SkillSections to count.
     * @example
     * // Count the number of SkillSections
     * const count = await prisma.skillSection.count({
     *   where: {
     *     // ... the filter for the SkillSections we want to count
     *   }
     * })
    **/
    count<T extends SkillSectionCountArgs>(
      args?: Subset<T, SkillSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillSectionAggregateArgs>(args: Subset<T, SkillSectionAggregateArgs>): Prisma.PrismaPromise<GetSkillSectionAggregateType<T>>

    /**
     * Group by SkillSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillSectionGroupByArgs['orderBy'] }
        : { orderBy?: SkillSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillSection model
   */
  readonly fields: SkillSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillSection model
   */
  interface SkillSectionFieldRefs {
    readonly id: FieldRef<"SkillSection", 'Int'>
    readonly section: FieldRef<"SkillSection", 'String'>
    readonly title: FieldRef<"SkillSection", 'String'>
    readonly items: FieldRef<"SkillSection", 'Json'>
    readonly order: FieldRef<"SkillSection", 'Int'>
    readonly active: FieldRef<"SkillSection", 'Boolean'>
    readonly createdAt: FieldRef<"SkillSection", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillSection findUnique
   */
  export type SkillSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Filter, which SkillSection to fetch.
     */
    where: SkillSectionWhereUniqueInput
  }

  /**
   * SkillSection findUniqueOrThrow
   */
  export type SkillSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Filter, which SkillSection to fetch.
     */
    where: SkillSectionWhereUniqueInput
  }

  /**
   * SkillSection findFirst
   */
  export type SkillSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Filter, which SkillSection to fetch.
     */
    where?: SkillSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSections to fetch.
     */
    orderBy?: SkillSectionOrderByWithRelationInput | SkillSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillSections.
     */
    cursor?: SkillSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillSections.
     */
    distinct?: SkillSectionScalarFieldEnum | SkillSectionScalarFieldEnum[]
  }

  /**
   * SkillSection findFirstOrThrow
   */
  export type SkillSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Filter, which SkillSection to fetch.
     */
    where?: SkillSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSections to fetch.
     */
    orderBy?: SkillSectionOrderByWithRelationInput | SkillSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillSections.
     */
    cursor?: SkillSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillSections.
     */
    distinct?: SkillSectionScalarFieldEnum | SkillSectionScalarFieldEnum[]
  }

  /**
   * SkillSection findMany
   */
  export type SkillSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Filter, which SkillSections to fetch.
     */
    where?: SkillSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSections to fetch.
     */
    orderBy?: SkillSectionOrderByWithRelationInput | SkillSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillSections.
     */
    cursor?: SkillSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSections.
     */
    skip?: number
    distinct?: SkillSectionScalarFieldEnum | SkillSectionScalarFieldEnum[]
  }

  /**
   * SkillSection create
   */
  export type SkillSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * The data needed to create a SkillSection.
     */
    data: XOR<SkillSectionCreateInput, SkillSectionUncheckedCreateInput>
  }

  /**
   * SkillSection createMany
   */
  export type SkillSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillSections.
     */
    data: SkillSectionCreateManyInput | SkillSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillSection createManyAndReturn
   */
  export type SkillSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * The data used to create many SkillSections.
     */
    data: SkillSectionCreateManyInput | SkillSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillSection update
   */
  export type SkillSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * The data needed to update a SkillSection.
     */
    data: XOR<SkillSectionUpdateInput, SkillSectionUncheckedUpdateInput>
    /**
     * Choose, which SkillSection to update.
     */
    where: SkillSectionWhereUniqueInput
  }

  /**
   * SkillSection updateMany
   */
  export type SkillSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillSections.
     */
    data: XOR<SkillSectionUpdateManyMutationInput, SkillSectionUncheckedUpdateManyInput>
    /**
     * Filter which SkillSections to update
     */
    where?: SkillSectionWhereInput
    /**
     * Limit how many SkillSections to update.
     */
    limit?: number
  }

  /**
   * SkillSection updateManyAndReturn
   */
  export type SkillSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * The data used to update SkillSections.
     */
    data: XOR<SkillSectionUpdateManyMutationInput, SkillSectionUncheckedUpdateManyInput>
    /**
     * Filter which SkillSections to update
     */
    where?: SkillSectionWhereInput
    /**
     * Limit how many SkillSections to update.
     */
    limit?: number
  }

  /**
   * SkillSection upsert
   */
  export type SkillSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * The filter to search for the SkillSection to update in case it exists.
     */
    where: SkillSectionWhereUniqueInput
    /**
     * In case the SkillSection found by the `where` argument doesn't exist, create a new SkillSection with this data.
     */
    create: XOR<SkillSectionCreateInput, SkillSectionUncheckedCreateInput>
    /**
     * In case the SkillSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillSectionUpdateInput, SkillSectionUncheckedUpdateInput>
  }

  /**
   * SkillSection delete
   */
  export type SkillSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
    /**
     * Filter which SkillSection to delete.
     */
    where: SkillSectionWhereUniqueInput
  }

  /**
   * SkillSection deleteMany
   */
  export type SkillSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillSections to delete
     */
    where?: SkillSectionWhereInput
    /**
     * Limit how many SkillSections to delete.
     */
    limit?: number
  }

  /**
   * SkillSection without action
   */
  export type SkillSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSection
     */
    select?: SkillSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillSection
     */
    omit?: SkillSectionOmit<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactInfoSumAggregateOutputType = {
    id: number | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: number | null
    email: string | null
    phone1: string | null
    phone2: string | null
    availability: string | null
    location: string | null
    updatedAt: Date | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: number | null
    email: string | null
    phone1: string | null
    phone2: string | null
    availability: string | null
    location: string | null
    updatedAt: Date | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    email: number
    phone1: number
    phone2: number
    availability: number
    location: number
    updatedAt: number
    _all: number
  }


  export type ContactInfoAvgAggregateInputType = {
    id?: true
  }

  export type ContactInfoSumAggregateInputType = {
    id?: true
  }

  export type ContactInfoMinAggregateInputType = {
    id?: true
    email?: true
    phone1?: true
    phone2?: true
    availability?: true
    location?: true
    updatedAt?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    email?: true
    phone1?: true
    phone2?: true
    availability?: true
    location?: true
    updatedAt?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    email?: true
    phone1?: true
    phone2?: true
    availability?: true
    location?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _avg?: ContactInfoAvgAggregateInputType
    _sum?: ContactInfoSumAggregateInputType
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: number
    email: string
    phone1: string | null
    phone2: string | null
    availability: string | null
    location: string | null
    updatedAt: Date
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone1?: boolean
    phone2?: boolean
    availability?: boolean
    location?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone1?: boolean
    phone2?: boolean
    availability?: boolean
    location?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone1?: boolean
    phone2?: boolean
    availability?: boolean
    location?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectScalar = {
    id?: boolean
    email?: boolean
    phone1?: boolean
    phone2?: boolean
    availability?: boolean
    location?: boolean
    updatedAt?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone1" | "phone2" | "availability" | "location" | "updatedAt", ExtArgs["result"]["contactInfo"]>

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      phone1: string | null
      phone2: string | null
      availability: string | null
      location: string | null
      updatedAt: Date
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfos and returns the data saved in the database.
     * @param {ContactInfoCreateManyAndReturnArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos and returns the data updated in the database.
     * @param {ContactInfoUpdateManyAndReturnArgs} args - Arguments to update many ContactInfos.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactInfo model
   */
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'Int'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly phone1: FieldRef<"ContactInfo", 'String'>
    readonly phone2: FieldRef<"ContactInfo", 'String'>
    readonly availability: FieldRef<"ContactInfo", 'String'>
    readonly location: FieldRef<"ContactInfo", 'String'>
    readonly updatedAt: FieldRef<"ContactInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo createManyAndReturn
   */
  export type ContactInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo updateManyAndReturn
   */
  export type ContactInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
  }


  /**
   * Model Hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  export type HeroAvgAggregateOutputType = {
    id: number | null
  }

  export type HeroSumAggregateOutputType = {
    id: number | null
  }

  export type HeroMinAggregateOutputType = {
    id: number | null
    status: string | null
    badge: string | null
    title: string | null
    subtitle: string | null
    updatedAt: Date | null
  }

  export type HeroMaxAggregateOutputType = {
    id: number | null
    status: string | null
    badge: string | null
    title: string | null
    subtitle: string | null
    updatedAt: Date | null
  }

  export type HeroCountAggregateOutputType = {
    id: number
    status: number
    badge: number
    title: number
    subtitle: number
    tags: number
    updatedAt: number
    _all: number
  }


  export type HeroAvgAggregateInputType = {
    id?: true
  }

  export type HeroSumAggregateInputType = {
    id?: true
  }

  export type HeroMinAggregateInputType = {
    id?: true
    status?: true
    badge?: true
    title?: true
    subtitle?: true
    updatedAt?: true
  }

  export type HeroMaxAggregateInputType = {
    id?: true
    status?: true
    badge?: true
    title?: true
    subtitle?: true
    updatedAt?: true
  }

  export type HeroCountAggregateInputType = {
    id?: true
    status?: true
    badge?: true
    title?: true
    subtitle?: true
    tags?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hero to aggregate.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Heroes
    **/
    _count?: true | HeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroMaxAggregateInputType
  }

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
        [P in keyof T & keyof AggregateHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>
  }




  export type HeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroWhereInput
    orderBy?: HeroOrderByWithAggregationInput | HeroOrderByWithAggregationInput[]
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum
    having?: HeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroCountAggregateInputType | true
    _avg?: HeroAvgAggregateInputType
    _sum?: HeroSumAggregateInputType
    _min?: HeroMinAggregateInputType
    _max?: HeroMaxAggregateInputType
  }

  export type HeroGroupByOutputType = {
    id: number
    status: string
    badge: string
    title: string
    subtitle: string
    tags: JsonValue
    updatedAt: Date
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  type GetHeroGroupByPayload<T extends HeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroGroupByOutputType[P]>
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
        }
      >
    >


  export type HeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    badge?: boolean
    title?: boolean
    subtitle?: boolean
    tags?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    badge?: boolean
    title?: boolean
    subtitle?: boolean
    tags?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    badge?: boolean
    title?: boolean
    subtitle?: boolean
    tags?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectScalar = {
    id?: boolean
    status?: boolean
    badge?: boolean
    title?: boolean
    subtitle?: boolean
    tags?: boolean
    updatedAt?: boolean
  }

  export type HeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "badge" | "title" | "subtitle" | "tags" | "updatedAt", ExtArgs["result"]["hero"]>

  export type $HeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hero"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      badge: string
      title: string
      subtitle: string
      tags: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["hero"]>
    composites: {}
  }

  type HeroGetPayload<S extends boolean | null | undefined | HeroDefaultArgs> = $Result.GetResult<Prisma.$HeroPayload, S>

  type HeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroCountAggregateInputType | true
    }

  export interface HeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hero'], meta: { name: 'Hero' } }
    /**
     * Find zero or one Hero that matches the filter.
     * @param {HeroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroFindUniqueArgs>(args: SelectSubset<T, HeroFindUniqueArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroFindFirstArgs>(args?: SelectSubset<T, HeroFindFirstArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     * 
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroWithIdOnly = await prisma.hero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroFindManyArgs>(args?: SelectSubset<T, HeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero.
     * @param {HeroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     * 
     */
    create<T extends HeroCreateArgs>(args: SelectSubset<T, HeroCreateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Heroes.
     * @param {HeroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroCreateManyArgs>(args?: SelectSubset<T, HeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Heroes and returns the data saved in the database.
     * @param {HeroCreateManyAndReturnArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hero.
     * @param {HeroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     * 
     */
    delete<T extends HeroDeleteArgs>(args: SelectSubset<T, HeroDeleteArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero.
     * @param {HeroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroUpdateArgs>(args: SelectSubset<T, HeroUpdateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Heroes.
     * @param {HeroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroDeleteManyArgs>(args?: SelectSubset<T, HeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroUpdateManyArgs>(args: SelectSubset<T, HeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes and returns the data updated in the database.
     * @param {HeroUpdateManyAndReturnArgs} args - Arguments to update many Heroes.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeroUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hero.
     * @param {HeroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends HeroUpsertArgs>(args: SelectSubset<T, HeroUpsertArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
    **/
    count<T extends HeroCountArgs>(
      args?: Subset<T, HeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeroAggregateArgs>(args: Subset<T, HeroAggregateArgs>): Prisma.PrismaPromise<GetHeroAggregateType<T>>

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroGroupByArgs['orderBy'] }
        : { orderBy?: HeroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hero model
   */
  readonly fields: HeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hero model
   */
  interface HeroFieldRefs {
    readonly id: FieldRef<"Hero", 'Int'>
    readonly status: FieldRef<"Hero", 'String'>
    readonly badge: FieldRef<"Hero", 'String'>
    readonly title: FieldRef<"Hero", 'String'>
    readonly subtitle: FieldRef<"Hero", 'String'>
    readonly tags: FieldRef<"Hero", 'Json'>
    readonly updatedAt: FieldRef<"Hero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hero findUnique
   */
  export type HeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findUniqueOrThrow
   */
  export type HeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findFirst
   */
  export type HeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findFirstOrThrow
   */
  export type HeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findMany
   */
  export type HeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Heroes to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero create
   */
  export type HeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data needed to create a Hero.
     */
    data: XOR<HeroCreateInput, HeroUncheckedCreateInput>
  }

  /**
   * Hero createMany
   */
  export type HeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero createManyAndReturn
   */
  export type HeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero update
   */
  export type HeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data needed to update a Hero.
     */
    data: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
    /**
     * Choose, which Hero to update.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero updateMany
   */
  export type HeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero updateManyAndReturn
   */
  export type HeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero upsert
   */
  export type HeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The filter to search for the Hero to update in case it exists.
     */
    where: HeroWhereUniqueInput
    /**
     * In case the Hero found by the `where` argument doesn't exist, create a new Hero with this data.
     */
    create: XOR<HeroCreateInput, HeroUncheckedCreateInput>
    /**
     * In case the Hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
  }

  /**
   * Hero delete
   */
  export type HeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter which Hero to delete.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero deleteMany
   */
  export type HeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heroes to delete
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to delete.
     */
    limit?: number
  }

  /**
   * Hero without action
   */
  export type HeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
  }


  /**
   * Model Cta
   */

  export type AggregateCta = {
    _count: CtaCountAggregateOutputType | null
    _avg: CtaAvgAggregateOutputType | null
    _sum: CtaSumAggregateOutputType | null
    _min: CtaMinAggregateOutputType | null
    _max: CtaMaxAggregateOutputType | null
  }

  export type CtaAvgAggregateOutputType = {
    id: number | null
  }

  export type CtaSumAggregateOutputType = {
    id: number | null
  }

  export type CtaMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    engageHref: string | null
    cvHref: string | null
    updatedAt: Date | null
  }

  export type CtaMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    engageHref: string | null
    cvHref: string | null
    updatedAt: Date | null
  }

  export type CtaCountAggregateOutputType = {
    id: number
    title: number
    description: number
    engageHref: number
    cvHref: number
    updatedAt: number
    _all: number
  }


  export type CtaAvgAggregateInputType = {
    id?: true
  }

  export type CtaSumAggregateInputType = {
    id?: true
  }

  export type CtaMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    engageHref?: true
    cvHref?: true
    updatedAt?: true
  }

  export type CtaMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    engageHref?: true
    cvHref?: true
    updatedAt?: true
  }

  export type CtaCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    engageHref?: true
    cvHref?: true
    updatedAt?: true
    _all?: true
  }

  export type CtaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cta to aggregate.
     */
    where?: CtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ctas to fetch.
     */
    orderBy?: CtaOrderByWithRelationInput | CtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ctas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ctas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ctas
    **/
    _count?: true | CtaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CtaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CtaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CtaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CtaMaxAggregateInputType
  }

  export type GetCtaAggregateType<T extends CtaAggregateArgs> = {
        [P in keyof T & keyof AggregateCta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCta[P]>
      : GetScalarType<T[P], AggregateCta[P]>
  }




  export type CtaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CtaWhereInput
    orderBy?: CtaOrderByWithAggregationInput | CtaOrderByWithAggregationInput[]
    by: CtaScalarFieldEnum[] | CtaScalarFieldEnum
    having?: CtaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CtaCountAggregateInputType | true
    _avg?: CtaAvgAggregateInputType
    _sum?: CtaSumAggregateInputType
    _min?: CtaMinAggregateInputType
    _max?: CtaMaxAggregateInputType
  }

  export type CtaGroupByOutputType = {
    id: number
    title: string
    description: string
    engageHref: string
    cvHref: string
    updatedAt: Date
    _count: CtaCountAggregateOutputType | null
    _avg: CtaAvgAggregateOutputType | null
    _sum: CtaSumAggregateOutputType | null
    _min: CtaMinAggregateOutputType | null
    _max: CtaMaxAggregateOutputType | null
  }

  type GetCtaGroupByPayload<T extends CtaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CtaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CtaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CtaGroupByOutputType[P]>
            : GetScalarType<T[P], CtaGroupByOutputType[P]>
        }
      >
    >


  export type CtaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    engageHref?: boolean
    cvHref?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cta"]>

  export type CtaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    engageHref?: boolean
    cvHref?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cta"]>

  export type CtaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    engageHref?: boolean
    cvHref?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cta"]>

  export type CtaSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    engageHref?: boolean
    cvHref?: boolean
    updatedAt?: boolean
  }

  export type CtaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "engageHref" | "cvHref" | "updatedAt", ExtArgs["result"]["cta"]>

  export type $CtaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      engageHref: string
      cvHref: string
      updatedAt: Date
    }, ExtArgs["result"]["cta"]>
    composites: {}
  }

  type CtaGetPayload<S extends boolean | null | undefined | CtaDefaultArgs> = $Result.GetResult<Prisma.$CtaPayload, S>

  type CtaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CtaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CtaCountAggregateInputType | true
    }

  export interface CtaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cta'], meta: { name: 'Cta' } }
    /**
     * Find zero or one Cta that matches the filter.
     * @param {CtaFindUniqueArgs} args - Arguments to find a Cta
     * @example
     * // Get one Cta
     * const cta = await prisma.cta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CtaFindUniqueArgs>(args: SelectSubset<T, CtaFindUniqueArgs<ExtArgs>>): Prisma__CtaClient<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CtaFindUniqueOrThrowArgs} args - Arguments to find a Cta
     * @example
     * // Get one Cta
     * const cta = await prisma.cta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CtaFindUniqueOrThrowArgs>(args: SelectSubset<T, CtaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CtaClient<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtaFindFirstArgs} args - Arguments to find a Cta
     * @example
     * // Get one Cta
     * const cta = await prisma.cta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CtaFindFirstArgs>(args?: SelectSubset<T, CtaFindFirstArgs<ExtArgs>>): Prisma__CtaClient<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtaFindFirstOrThrowArgs} args - Arguments to find a Cta
     * @example
     * // Get one Cta
     * const cta = await prisma.cta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CtaFindFirstOrThrowArgs>(args?: SelectSubset<T, CtaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CtaClient<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ctas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ctas
     * const ctas = await prisma.cta.findMany()
     * 
     * // Get first 10 Ctas
     * const ctas = await prisma.cta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ctaWithIdOnly = await prisma.cta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CtaFindManyArgs>(args?: SelectSubset<T, CtaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cta.
     * @param {CtaCreateArgs} args - Arguments to create a Cta.
     * @example
     * // Create one Cta
     * const Cta = await prisma.cta.create({
     *   data: {
     *     // ... data to create a Cta
     *   }
     * })
     * 
     */
    create<T extends CtaCreateArgs>(args: SelectSubset<T, CtaCreateArgs<ExtArgs>>): Prisma__CtaClient<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ctas.
     * @param {CtaCreateManyArgs} args - Arguments to create many Ctas.
     * @example
     * // Create many Ctas
     * const cta = await prisma.cta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CtaCreateManyArgs>(args?: SelectSubset<T, CtaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ctas and returns the data saved in the database.
     * @param {CtaCreateManyAndReturnArgs} args - Arguments to create many Ctas.
     * @example
     * // Create many Ctas
     * const cta = await prisma.cta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ctas and only return the `id`
     * const ctaWithIdOnly = await prisma.cta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CtaCreateManyAndReturnArgs>(args?: SelectSubset<T, CtaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cta.
     * @param {CtaDeleteArgs} args - Arguments to delete one Cta.
     * @example
     * // Delete one Cta
     * const Cta = await prisma.cta.delete({
     *   where: {
     *     // ... filter to delete one Cta
     *   }
     * })
     * 
     */
    delete<T extends CtaDeleteArgs>(args: SelectSubset<T, CtaDeleteArgs<ExtArgs>>): Prisma__CtaClient<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cta.
     * @param {CtaUpdateArgs} args - Arguments to update one Cta.
     * @example
     * // Update one Cta
     * const cta = await prisma.cta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CtaUpdateArgs>(args: SelectSubset<T, CtaUpdateArgs<ExtArgs>>): Prisma__CtaClient<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ctas.
     * @param {CtaDeleteManyArgs} args - Arguments to filter Ctas to delete.
     * @example
     * // Delete a few Ctas
     * const { count } = await prisma.cta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CtaDeleteManyArgs>(args?: SelectSubset<T, CtaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ctas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ctas
     * const cta = await prisma.cta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CtaUpdateManyArgs>(args: SelectSubset<T, CtaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ctas and returns the data updated in the database.
     * @param {CtaUpdateManyAndReturnArgs} args - Arguments to update many Ctas.
     * @example
     * // Update many Ctas
     * const cta = await prisma.cta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ctas and only return the `id`
     * const ctaWithIdOnly = await prisma.cta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CtaUpdateManyAndReturnArgs>(args: SelectSubset<T, CtaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cta.
     * @param {CtaUpsertArgs} args - Arguments to update or create a Cta.
     * @example
     * // Update or create a Cta
     * const cta = await prisma.cta.upsert({
     *   create: {
     *     // ... data to create a Cta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cta we want to update
     *   }
     * })
     */
    upsert<T extends CtaUpsertArgs>(args: SelectSubset<T, CtaUpsertArgs<ExtArgs>>): Prisma__CtaClient<$Result.GetResult<Prisma.$CtaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ctas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtaCountArgs} args - Arguments to filter Ctas to count.
     * @example
     * // Count the number of Ctas
     * const count = await prisma.cta.count({
     *   where: {
     *     // ... the filter for the Ctas we want to count
     *   }
     * })
    **/
    count<T extends CtaCountArgs>(
      args?: Subset<T, CtaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CtaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CtaAggregateArgs>(args: Subset<T, CtaAggregateArgs>): Prisma.PrismaPromise<GetCtaAggregateType<T>>

    /**
     * Group by Cta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CtaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CtaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CtaGroupByArgs['orderBy'] }
        : { orderBy?: CtaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CtaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCtaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cta model
   */
  readonly fields: CtaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CtaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cta model
   */
  interface CtaFieldRefs {
    readonly id: FieldRef<"Cta", 'Int'>
    readonly title: FieldRef<"Cta", 'String'>
    readonly description: FieldRef<"Cta", 'String'>
    readonly engageHref: FieldRef<"Cta", 'String'>
    readonly cvHref: FieldRef<"Cta", 'String'>
    readonly updatedAt: FieldRef<"Cta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cta findUnique
   */
  export type CtaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * Filter, which Cta to fetch.
     */
    where: CtaWhereUniqueInput
  }

  /**
   * Cta findUniqueOrThrow
   */
  export type CtaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * Filter, which Cta to fetch.
     */
    where: CtaWhereUniqueInput
  }

  /**
   * Cta findFirst
   */
  export type CtaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * Filter, which Cta to fetch.
     */
    where?: CtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ctas to fetch.
     */
    orderBy?: CtaOrderByWithRelationInput | CtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ctas.
     */
    cursor?: CtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ctas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ctas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ctas.
     */
    distinct?: CtaScalarFieldEnum | CtaScalarFieldEnum[]
  }

  /**
   * Cta findFirstOrThrow
   */
  export type CtaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * Filter, which Cta to fetch.
     */
    where?: CtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ctas to fetch.
     */
    orderBy?: CtaOrderByWithRelationInput | CtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ctas.
     */
    cursor?: CtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ctas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ctas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ctas.
     */
    distinct?: CtaScalarFieldEnum | CtaScalarFieldEnum[]
  }

  /**
   * Cta findMany
   */
  export type CtaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * Filter, which Ctas to fetch.
     */
    where?: CtaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ctas to fetch.
     */
    orderBy?: CtaOrderByWithRelationInput | CtaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ctas.
     */
    cursor?: CtaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ctas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ctas.
     */
    skip?: number
    distinct?: CtaScalarFieldEnum | CtaScalarFieldEnum[]
  }

  /**
   * Cta create
   */
  export type CtaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * The data needed to create a Cta.
     */
    data: XOR<CtaCreateInput, CtaUncheckedCreateInput>
  }

  /**
   * Cta createMany
   */
  export type CtaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ctas.
     */
    data: CtaCreateManyInput | CtaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cta createManyAndReturn
   */
  export type CtaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * The data used to create many Ctas.
     */
    data: CtaCreateManyInput | CtaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cta update
   */
  export type CtaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * The data needed to update a Cta.
     */
    data: XOR<CtaUpdateInput, CtaUncheckedUpdateInput>
    /**
     * Choose, which Cta to update.
     */
    where: CtaWhereUniqueInput
  }

  /**
   * Cta updateMany
   */
  export type CtaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ctas.
     */
    data: XOR<CtaUpdateManyMutationInput, CtaUncheckedUpdateManyInput>
    /**
     * Filter which Ctas to update
     */
    where?: CtaWhereInput
    /**
     * Limit how many Ctas to update.
     */
    limit?: number
  }

  /**
   * Cta updateManyAndReturn
   */
  export type CtaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * The data used to update Ctas.
     */
    data: XOR<CtaUpdateManyMutationInput, CtaUncheckedUpdateManyInput>
    /**
     * Filter which Ctas to update
     */
    where?: CtaWhereInput
    /**
     * Limit how many Ctas to update.
     */
    limit?: number
  }

  /**
   * Cta upsert
   */
  export type CtaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * The filter to search for the Cta to update in case it exists.
     */
    where: CtaWhereUniqueInput
    /**
     * In case the Cta found by the `where` argument doesn't exist, create a new Cta with this data.
     */
    create: XOR<CtaCreateInput, CtaUncheckedCreateInput>
    /**
     * In case the Cta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CtaUpdateInput, CtaUncheckedUpdateInput>
  }

  /**
   * Cta delete
   */
  export type CtaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
    /**
     * Filter which Cta to delete.
     */
    where: CtaWhereUniqueInput
  }

  /**
   * Cta deleteMany
   */
  export type CtaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ctas to delete
     */
    where?: CtaWhereInput
    /**
     * Limit how many Ctas to delete.
     */
    limit?: number
  }

  /**
   * Cta without action
   */
  export type CtaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cta
     */
    select?: CtaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cta
     */
    omit?: CtaOmit<ExtArgs> | null
  }


  /**
   * Model Footer
   */

  export type AggregateFooter = {
    _count: FooterCountAggregateOutputType | null
    _avg: FooterAvgAggregateOutputType | null
    _sum: FooterSumAggregateOutputType | null
    _min: FooterMinAggregateOutputType | null
    _max: FooterMaxAggregateOutputType | null
  }

  export type FooterAvgAggregateOutputType = {
    id: number | null
  }

  export type FooterSumAggregateOutputType = {
    id: number | null
  }

  export type FooterMinAggregateOutputType = {
    id: number | null
    name: string | null
    copyright: string | null
    email: string | null
    phone: string | null
    vimeoUrl: string | null
    updatedAt: Date | null
  }

  export type FooterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    copyright: string | null
    email: string | null
    phone: string | null
    vimeoUrl: string | null
    updatedAt: Date | null
  }

  export type FooterCountAggregateOutputType = {
    id: number
    name: number
    copyright: number
    email: number
    phone: number
    vimeoUrl: number
    updatedAt: number
    _all: number
  }


  export type FooterAvgAggregateInputType = {
    id?: true
  }

  export type FooterSumAggregateInputType = {
    id?: true
  }

  export type FooterMinAggregateInputType = {
    id?: true
    name?: true
    copyright?: true
    email?: true
    phone?: true
    vimeoUrl?: true
    updatedAt?: true
  }

  export type FooterMaxAggregateInputType = {
    id?: true
    name?: true
    copyright?: true
    email?: true
    phone?: true
    vimeoUrl?: true
    updatedAt?: true
  }

  export type FooterCountAggregateInputType = {
    id?: true
    name?: true
    copyright?: true
    email?: true
    phone?: true
    vimeoUrl?: true
    updatedAt?: true
    _all?: true
  }

  export type FooterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Footer to aggregate.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Footers
    **/
    _count?: true | FooterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FooterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FooterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooterMaxAggregateInputType
  }

  export type GetFooterAggregateType<T extends FooterAggregateArgs> = {
        [P in keyof T & keyof AggregateFooter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFooter[P]>
      : GetScalarType<T[P], AggregateFooter[P]>
  }




  export type FooterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterWhereInput
    orderBy?: FooterOrderByWithAggregationInput | FooterOrderByWithAggregationInput[]
    by: FooterScalarFieldEnum[] | FooterScalarFieldEnum
    having?: FooterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooterCountAggregateInputType | true
    _avg?: FooterAvgAggregateInputType
    _sum?: FooterSumAggregateInputType
    _min?: FooterMinAggregateInputType
    _max?: FooterMaxAggregateInputType
  }

  export type FooterGroupByOutputType = {
    id: number
    name: string
    copyright: string
    email: string | null
    phone: string | null
    vimeoUrl: string | null
    updatedAt: Date
    _count: FooterCountAggregateOutputType | null
    _avg: FooterAvgAggregateOutputType | null
    _sum: FooterSumAggregateOutputType | null
    _min: FooterMinAggregateOutputType | null
    _max: FooterMaxAggregateOutputType | null
  }

  type GetFooterGroupByPayload<T extends FooterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooterGroupByOutputType[P]>
            : GetScalarType<T[P], FooterGroupByOutputType[P]>
        }
      >
    >


  export type FooterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    copyright?: boolean
    email?: boolean
    phone?: boolean
    vimeoUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    copyright?: boolean
    email?: boolean
    phone?: boolean
    vimeoUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    copyright?: boolean
    email?: boolean
    phone?: boolean
    vimeoUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footer"]>

  export type FooterSelectScalar = {
    id?: boolean
    name?: boolean
    copyright?: boolean
    email?: boolean
    phone?: boolean
    vimeoUrl?: boolean
    updatedAt?: boolean
  }

  export type FooterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "copyright" | "email" | "phone" | "vimeoUrl" | "updatedAt", ExtArgs["result"]["footer"]>

  export type $FooterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Footer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      copyright: string
      email: string | null
      phone: string | null
      vimeoUrl: string | null
      updatedAt: Date
    }, ExtArgs["result"]["footer"]>
    composites: {}
  }

  type FooterGetPayload<S extends boolean | null | undefined | FooterDefaultArgs> = $Result.GetResult<Prisma.$FooterPayload, S>

  type FooterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FooterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FooterCountAggregateInputType | true
    }

  export interface FooterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Footer'], meta: { name: 'Footer' } }
    /**
     * Find zero or one Footer that matches the filter.
     * @param {FooterFindUniqueArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FooterFindUniqueArgs>(args: SelectSubset<T, FooterFindUniqueArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Footer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FooterFindUniqueOrThrowArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FooterFindUniqueOrThrowArgs>(args: SelectSubset<T, FooterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Footer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindFirstArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FooterFindFirstArgs>(args?: SelectSubset<T, FooterFindFirstArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Footer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindFirstOrThrowArgs} args - Arguments to find a Footer
     * @example
     * // Get one Footer
     * const footer = await prisma.footer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FooterFindFirstOrThrowArgs>(args?: SelectSubset<T, FooterFindFirstOrThrowArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Footers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Footers
     * const footers = await prisma.footer.findMany()
     * 
     * // Get first 10 Footers
     * const footers = await prisma.footer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footerWithIdOnly = await prisma.footer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FooterFindManyArgs>(args?: SelectSubset<T, FooterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Footer.
     * @param {FooterCreateArgs} args - Arguments to create a Footer.
     * @example
     * // Create one Footer
     * const Footer = await prisma.footer.create({
     *   data: {
     *     // ... data to create a Footer
     *   }
     * })
     * 
     */
    create<T extends FooterCreateArgs>(args: SelectSubset<T, FooterCreateArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Footers.
     * @param {FooterCreateManyArgs} args - Arguments to create many Footers.
     * @example
     * // Create many Footers
     * const footer = await prisma.footer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FooterCreateManyArgs>(args?: SelectSubset<T, FooterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Footers and returns the data saved in the database.
     * @param {FooterCreateManyAndReturnArgs} args - Arguments to create many Footers.
     * @example
     * // Create many Footers
     * const footer = await prisma.footer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Footers and only return the `id`
     * const footerWithIdOnly = await prisma.footer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FooterCreateManyAndReturnArgs>(args?: SelectSubset<T, FooterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Footer.
     * @param {FooterDeleteArgs} args - Arguments to delete one Footer.
     * @example
     * // Delete one Footer
     * const Footer = await prisma.footer.delete({
     *   where: {
     *     // ... filter to delete one Footer
     *   }
     * })
     * 
     */
    delete<T extends FooterDeleteArgs>(args: SelectSubset<T, FooterDeleteArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Footer.
     * @param {FooterUpdateArgs} args - Arguments to update one Footer.
     * @example
     * // Update one Footer
     * const footer = await prisma.footer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FooterUpdateArgs>(args: SelectSubset<T, FooterUpdateArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Footers.
     * @param {FooterDeleteManyArgs} args - Arguments to filter Footers to delete.
     * @example
     * // Delete a few Footers
     * const { count } = await prisma.footer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FooterDeleteManyArgs>(args?: SelectSubset<T, FooterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Footers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Footers
     * const footer = await prisma.footer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FooterUpdateManyArgs>(args: SelectSubset<T, FooterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Footers and returns the data updated in the database.
     * @param {FooterUpdateManyAndReturnArgs} args - Arguments to update many Footers.
     * @example
     * // Update many Footers
     * const footer = await prisma.footer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Footers and only return the `id`
     * const footerWithIdOnly = await prisma.footer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FooterUpdateManyAndReturnArgs>(args: SelectSubset<T, FooterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Footer.
     * @param {FooterUpsertArgs} args - Arguments to update or create a Footer.
     * @example
     * // Update or create a Footer
     * const footer = await prisma.footer.upsert({
     *   create: {
     *     // ... data to create a Footer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Footer we want to update
     *   }
     * })
     */
    upsert<T extends FooterUpsertArgs>(args: SelectSubset<T, FooterUpsertArgs<ExtArgs>>): Prisma__FooterClient<$Result.GetResult<Prisma.$FooterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Footers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterCountArgs} args - Arguments to filter Footers to count.
     * @example
     * // Count the number of Footers
     * const count = await prisma.footer.count({
     *   where: {
     *     // ... the filter for the Footers we want to count
     *   }
     * })
    **/
    count<T extends FooterCountArgs>(
      args?: Subset<T, FooterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Footer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FooterAggregateArgs>(args: Subset<T, FooterAggregateArgs>): Prisma.PrismaPromise<GetFooterAggregateType<T>>

    /**
     * Group by Footer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FooterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FooterGroupByArgs['orderBy'] }
        : { orderBy?: FooterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FooterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Footer model
   */
  readonly fields: FooterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Footer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FooterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Footer model
   */
  interface FooterFieldRefs {
    readonly id: FieldRef<"Footer", 'Int'>
    readonly name: FieldRef<"Footer", 'String'>
    readonly copyright: FieldRef<"Footer", 'String'>
    readonly email: FieldRef<"Footer", 'String'>
    readonly phone: FieldRef<"Footer", 'String'>
    readonly vimeoUrl: FieldRef<"Footer", 'String'>
    readonly updatedAt: FieldRef<"Footer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Footer findUnique
   */
  export type FooterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer findUniqueOrThrow
   */
  export type FooterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer findFirst
   */
  export type FooterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Footers.
     */
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer findFirstOrThrow
   */
  export type FooterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footer to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Footers.
     */
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer findMany
   */
  export type FooterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter, which Footers to fetch.
     */
    where?: FooterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Footers to fetch.
     */
    orderBy?: FooterOrderByWithRelationInput | FooterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Footers.
     */
    cursor?: FooterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Footers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Footers.
     */
    skip?: number
    distinct?: FooterScalarFieldEnum | FooterScalarFieldEnum[]
  }

  /**
   * Footer create
   */
  export type FooterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data needed to create a Footer.
     */
    data: XOR<FooterCreateInput, FooterUncheckedCreateInput>
  }

  /**
   * Footer createMany
   */
  export type FooterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Footers.
     */
    data: FooterCreateManyInput | FooterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Footer createManyAndReturn
   */
  export type FooterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data used to create many Footers.
     */
    data: FooterCreateManyInput | FooterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Footer update
   */
  export type FooterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data needed to update a Footer.
     */
    data: XOR<FooterUpdateInput, FooterUncheckedUpdateInput>
    /**
     * Choose, which Footer to update.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer updateMany
   */
  export type FooterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Footers.
     */
    data: XOR<FooterUpdateManyMutationInput, FooterUncheckedUpdateManyInput>
    /**
     * Filter which Footers to update
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to update.
     */
    limit?: number
  }

  /**
   * Footer updateManyAndReturn
   */
  export type FooterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The data used to update Footers.
     */
    data: XOR<FooterUpdateManyMutationInput, FooterUncheckedUpdateManyInput>
    /**
     * Filter which Footers to update
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to update.
     */
    limit?: number
  }

  /**
   * Footer upsert
   */
  export type FooterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * The filter to search for the Footer to update in case it exists.
     */
    where: FooterWhereUniqueInput
    /**
     * In case the Footer found by the `where` argument doesn't exist, create a new Footer with this data.
     */
    create: XOR<FooterCreateInput, FooterUncheckedCreateInput>
    /**
     * In case the Footer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FooterUpdateInput, FooterUncheckedUpdateInput>
  }

  /**
   * Footer delete
   */
  export type FooterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
    /**
     * Filter which Footer to delete.
     */
    where: FooterWhereUniqueInput
  }

  /**
   * Footer deleteMany
   */
  export type FooterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Footers to delete
     */
    where?: FooterWhereInput
    /**
     * Limit how many Footers to delete.
     */
    limit?: number
  }

  /**
   * Footer without action
   */
  export type FooterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Footer
     */
    select?: FooterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Footer
     */
    omit?: FooterOmit<ExtArgs> | null
  }


  /**
   * Model Translation
   */

  export type AggregateTranslation = {
    _count: TranslationCountAggregateOutputType | null
    _avg: TranslationAvgAggregateOutputType | null
    _sum: TranslationSumAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  export type TranslationAvgAggregateOutputType = {
    id: number | null
  }

  export type TranslationSumAggregateOutputType = {
    id: number | null
  }

  export type TranslationMinAggregateOutputType = {
    id: number | null
    key: string | null
    language: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationMaxAggregateOutputType = {
    id: number | null
    key: string | null
    language: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationCountAggregateOutputType = {
    id: number
    key: number
    language: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TranslationAvgAggregateInputType = {
    id?: true
  }

  export type TranslationSumAggregateInputType = {
    id?: true
  }

  export type TranslationMinAggregateInputType = {
    id?: true
    key?: true
    language?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationMaxAggregateInputType = {
    id?: true
    key?: true
    language?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationCountAggregateInputType = {
    id?: true
    key?: true
    language?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translation to aggregate.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Translations
    **/
    _count?: true | TranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranslationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranslationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationMaxAggregateInputType
  }

  export type GetTranslationAggregateType<T extends TranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslation[P]>
      : GetScalarType<T[P], AggregateTranslation[P]>
  }




  export type TranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithAggregationInput | TranslationOrderByWithAggregationInput[]
    by: TranslationScalarFieldEnum[] | TranslationScalarFieldEnum
    having?: TranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationCountAggregateInputType | true
    _avg?: TranslationAvgAggregateInputType
    _sum?: TranslationSumAggregateInputType
    _min?: TranslationMinAggregateInputType
    _max?: TranslationMaxAggregateInputType
  }

  export type TranslationGroupByOutputType = {
    id: number
    key: string
    language: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: TranslationCountAggregateOutputType | null
    _avg: TranslationAvgAggregateOutputType | null
    _sum: TranslationSumAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  type GetTranslationGroupByPayload<T extends TranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationGroupByOutputType[P]>
        }
      >
    >


  export type TranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    language?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    language?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    language?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectScalar = {
    id?: boolean
    key?: boolean
    language?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "language" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["translation"]>

  export type $TranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Translation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      language: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["translation"]>
    composites: {}
  }

  type TranslationGetPayload<S extends boolean | null | undefined | TranslationDefaultArgs> = $Result.GetResult<Prisma.$TranslationPayload, S>

  type TranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranslationCountAggregateInputType | true
    }

  export interface TranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Translation'], meta: { name: 'Translation' } }
    /**
     * Find zero or one Translation that matches the filter.
     * @param {TranslationFindUniqueArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationFindUniqueArgs>(args: SelectSubset<T, TranslationFindUniqueArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Translation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranslationFindUniqueOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Translation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationFindFirstArgs>(args?: SelectSubset<T, TranslationFindFirstArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Translation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Translations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Translations
     * const translations = await prisma.translation.findMany()
     * 
     * // Get first 10 Translations
     * const translations = await prisma.translation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationWithIdOnly = await prisma.translation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationFindManyArgs>(args?: SelectSubset<T, TranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Translation.
     * @param {TranslationCreateArgs} args - Arguments to create a Translation.
     * @example
     * // Create one Translation
     * const Translation = await prisma.translation.create({
     *   data: {
     *     // ... data to create a Translation
     *   }
     * })
     * 
     */
    create<T extends TranslationCreateArgs>(args: SelectSubset<T, TranslationCreateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Translations.
     * @param {TranslationCreateManyArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationCreateManyArgs>(args?: SelectSubset<T, TranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Translations and returns the data saved in the database.
     * @param {TranslationCreateManyAndReturnArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Translations and only return the `id`
     * const translationWithIdOnly = await prisma.translation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Translation.
     * @param {TranslationDeleteArgs} args - Arguments to delete one Translation.
     * @example
     * // Delete one Translation
     * const Translation = await prisma.translation.delete({
     *   where: {
     *     // ... filter to delete one Translation
     *   }
     * })
     * 
     */
    delete<T extends TranslationDeleteArgs>(args: SelectSubset<T, TranslationDeleteArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Translation.
     * @param {TranslationUpdateArgs} args - Arguments to update one Translation.
     * @example
     * // Update one Translation
     * const translation = await prisma.translation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationUpdateArgs>(args: SelectSubset<T, TranslationUpdateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Translations.
     * @param {TranslationDeleteManyArgs} args - Arguments to filter Translations to delete.
     * @example
     * // Delete a few Translations
     * const { count } = await prisma.translation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationDeleteManyArgs>(args?: SelectSubset<T, TranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationUpdateManyArgs>(args: SelectSubset<T, TranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations and returns the data updated in the database.
     * @param {TranslationUpdateManyAndReturnArgs} args - Arguments to update many Translations.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Translations and only return the `id`
     * const translationWithIdOnly = await prisma.translation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, TranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Translation.
     * @param {TranslationUpsertArgs} args - Arguments to update or create a Translation.
     * @example
     * // Update or create a Translation
     * const translation = await prisma.translation.upsert({
     *   create: {
     *     // ... data to create a Translation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Translation we want to update
     *   }
     * })
     */
    upsert<T extends TranslationUpsertArgs>(args: SelectSubset<T, TranslationUpsertArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationCountArgs} args - Arguments to filter Translations to count.
     * @example
     * // Count the number of Translations
     * const count = await prisma.translation.count({
     *   where: {
     *     // ... the filter for the Translations we want to count
     *   }
     * })
    **/
    count<T extends TranslationCountArgs>(
      args?: Subset<T, TranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TranslationAggregateArgs>(args: Subset<T, TranslationAggregateArgs>): Prisma.PrismaPromise<GetTranslationAggregateType<T>>

    /**
     * Group by Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationGroupByArgs['orderBy'] }
        : { orderBy?: TranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Translation model
   */
  readonly fields: TranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Translation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Translation model
   */
  interface TranslationFieldRefs {
    readonly id: FieldRef<"Translation", 'Int'>
    readonly key: FieldRef<"Translation", 'String'>
    readonly language: FieldRef<"Translation", 'String'>
    readonly value: FieldRef<"Translation", 'String'>
    readonly createdAt: FieldRef<"Translation", 'DateTime'>
    readonly updatedAt: FieldRef<"Translation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Translation findUnique
   */
  export type TranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findUniqueOrThrow
   */
  export type TranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findFirst
   */
  export type TranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findFirstOrThrow
   */
  export type TranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findMany
   */
  export type TranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Filter, which Translations to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation create
   */
  export type TranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The data needed to create a Translation.
     */
    data: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
  }

  /**
   * Translation createMany
   */
  export type TranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Translation createManyAndReturn
   */
  export type TranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Translation update
   */
  export type TranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The data needed to update a Translation.
     */
    data: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
    /**
     * Choose, which Translation to update.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation updateMany
   */
  export type TranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to update.
     */
    limit?: number
  }

  /**
   * Translation updateManyAndReturn
   */
  export type TranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to update.
     */
    limit?: number
  }

  /**
   * Translation upsert
   */
  export type TranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The filter to search for the Translation to update in case it exists.
     */
    where: TranslationWhereUniqueInput
    /**
     * In case the Translation found by the `where` argument doesn't exist, create a new Translation with this data.
     */
    create: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
    /**
     * In case the Translation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
  }

  /**
   * Translation delete
   */
  export type TranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Filter which Translation to delete.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation deleteMany
   */
  export type TranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translations to delete
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to delete.
     */
    limit?: number
  }

  /**
   * Translation without action
   */
  export type TranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type LanguageSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type LanguageMinAggregateOutputType = {
    id: number | null
    code: string | null
    label: string | null
    flag: string | null
    langCode: string | null
    order: number | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: number | null
    code: string | null
    label: string | null
    flag: string | null
    langCode: string | null
    order: number | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    code: number
    label: number
    flag: number
    langCode: number
    order: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type LanguageSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    code?: true
    label?: true
    flag?: true
    langCode?: true
    order?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    code?: true
    label?: true
    flag?: true
    langCode?: true
    order?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    code?: true
    label?: true
    flag?: true
    langCode?: true
    order?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: number
    code: string
    label: string
    flag: string
    langCode: string | null
    order: number
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    label?: boolean
    flag?: boolean
    langCode?: boolean
    order?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    label?: boolean
    flag?: boolean
    langCode?: boolean
    order?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    label?: boolean
    flag?: boolean
    langCode?: boolean
    order?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    code?: boolean
    label?: boolean
    flag?: boolean
    langCode?: boolean
    order?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "label" | "flag" | "langCode" | "order", ExtArgs["result"]["language"]>

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      label: string
      flag: string
      langCode: string | null
      order: number
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'Int'>
    readonly code: FieldRef<"Language", 'String'>
    readonly label: FieldRef<"Language", 'String'>
    readonly flag: FieldRef<"Language", 'String'>
    readonly langCode: FieldRef<"Language", 'String'>
    readonly order: FieldRef<"Language", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShowreelProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    href: 'href',
    imageUrl: 'imageUrl',
    imagePublicId: 'imagePublicId',
    subKey: 'subKey',
    delay: 'delay',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowreelProjectScalarFieldEnum = (typeof ShowreelProjectScalarFieldEnum)[keyof typeof ShowreelProjectScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    role: 'role',
    meta: 'meta',
    category: 'category',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const GalleryShotScalarFieldEnum: {
    id: 'id',
    src: 'src',
    publicId: 'publicId',
    alt: 'alt',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryShotScalarFieldEnum = (typeof GalleryShotScalarFieldEnum)[keyof typeof GalleryShotScalarFieldEnum]


  export const SkillSectionScalarFieldEnum: {
    id: 'id',
    section: 'section',
    title: 'title',
    items: 'items',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillSectionScalarFieldEnum = (typeof SkillSectionScalarFieldEnum)[keyof typeof SkillSectionScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone1: 'phone1',
    phone2: 'phone2',
    availability: 'availability',
    location: 'location',
    updatedAt: 'updatedAt'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const HeroScalarFieldEnum: {
    id: 'id',
    status: 'status',
    badge: 'badge',
    title: 'title',
    subtitle: 'subtitle',
    tags: 'tags',
    updatedAt: 'updatedAt'
  };

  export type HeroScalarFieldEnum = (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum]


  export const CtaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    engageHref: 'engageHref',
    cvHref: 'cvHref',
    updatedAt: 'updatedAt'
  };

  export type CtaScalarFieldEnum = (typeof CtaScalarFieldEnum)[keyof typeof CtaScalarFieldEnum]


  export const FooterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    copyright: 'copyright',
    email: 'email',
    phone: 'phone',
    vimeoUrl: 'vimeoUrl',
    updatedAt: 'updatedAt'
  };

  export type FooterScalarFieldEnum = (typeof FooterScalarFieldEnum)[keyof typeof FooterScalarFieldEnum]


  export const TranslationScalarFieldEnum: {
    id: 'id',
    key: 'key',
    language: 'language',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TranslationScalarFieldEnum = (typeof TranslationScalarFieldEnum)[keyof typeof TranslationScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    code: 'code',
    label: 'label',
    flag: 'flag',
    langCode: 'langCode',
    order: 'order'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ShowreelProjectWhereInput = {
    AND?: ShowreelProjectWhereInput | ShowreelProjectWhereInput[]
    OR?: ShowreelProjectWhereInput[]
    NOT?: ShowreelProjectWhereInput | ShowreelProjectWhereInput[]
    id?: IntFilter<"ShowreelProject"> | number
    title?: StringFilter<"ShowreelProject"> | string
    href?: StringFilter<"ShowreelProject"> | string
    imageUrl?: StringFilter<"ShowreelProject"> | string
    imagePublicId?: StringFilter<"ShowreelProject"> | string
    subKey?: StringFilter<"ShowreelProject"> | string
    delay?: StringFilter<"ShowreelProject"> | string
    order?: IntFilter<"ShowreelProject"> | number
    active?: BoolFilter<"ShowreelProject"> | boolean
    createdAt?: DateTimeFilter<"ShowreelProject"> | Date | string
    updatedAt?: DateTimeFilter<"ShowreelProject"> | Date | string
  }

  export type ShowreelProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    subKey?: SortOrder
    delay?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowreelProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShowreelProjectWhereInput | ShowreelProjectWhereInput[]
    OR?: ShowreelProjectWhereInput[]
    NOT?: ShowreelProjectWhereInput | ShowreelProjectWhereInput[]
    title?: StringFilter<"ShowreelProject"> | string
    href?: StringFilter<"ShowreelProject"> | string
    imageUrl?: StringFilter<"ShowreelProject"> | string
    imagePublicId?: StringFilter<"ShowreelProject"> | string
    subKey?: StringFilter<"ShowreelProject"> | string
    delay?: StringFilter<"ShowreelProject"> | string
    order?: IntFilter<"ShowreelProject"> | number
    active?: BoolFilter<"ShowreelProject"> | boolean
    createdAt?: DateTimeFilter<"ShowreelProject"> | Date | string
    updatedAt?: DateTimeFilter<"ShowreelProject"> | Date | string
  }, "id">

  export type ShowreelProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    subKey?: SortOrder
    delay?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowreelProjectCountOrderByAggregateInput
    _avg?: ShowreelProjectAvgOrderByAggregateInput
    _max?: ShowreelProjectMaxOrderByAggregateInput
    _min?: ShowreelProjectMinOrderByAggregateInput
    _sum?: ShowreelProjectSumOrderByAggregateInput
  }

  export type ShowreelProjectScalarWhereWithAggregatesInput = {
    AND?: ShowreelProjectScalarWhereWithAggregatesInput | ShowreelProjectScalarWhereWithAggregatesInput[]
    OR?: ShowreelProjectScalarWhereWithAggregatesInput[]
    NOT?: ShowreelProjectScalarWhereWithAggregatesInput | ShowreelProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShowreelProject"> | number
    title?: StringWithAggregatesFilter<"ShowreelProject"> | string
    href?: StringWithAggregatesFilter<"ShowreelProject"> | string
    imageUrl?: StringWithAggregatesFilter<"ShowreelProject"> | string
    imagePublicId?: StringWithAggregatesFilter<"ShowreelProject"> | string
    subKey?: StringWithAggregatesFilter<"ShowreelProject"> | string
    delay?: StringWithAggregatesFilter<"ShowreelProject"> | string
    order?: IntWithAggregatesFilter<"ShowreelProject"> | number
    active?: BoolWithAggregatesFilter<"ShowreelProject"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShowreelProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShowreelProject"> | Date | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: IntFilter<"Experience"> | number
    title?: StringFilter<"Experience"> | string
    role?: StringFilter<"Experience"> | string
    meta?: StringFilter<"Experience"> | string
    category?: StringFilter<"Experience"> | string
    order?: IntFilter<"Experience"> | number
    active?: BoolFilter<"Experience"> | boolean
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    meta?: SortOrder
    category?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    title?: StringFilter<"Experience"> | string
    role?: StringFilter<"Experience"> | string
    meta?: StringFilter<"Experience"> | string
    category?: StringFilter<"Experience"> | string
    order?: IntFilter<"Experience"> | number
    active?: BoolFilter<"Experience"> | boolean
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    meta?: SortOrder
    category?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience"> | number
    title?: StringWithAggregatesFilter<"Experience"> | string
    role?: StringWithAggregatesFilter<"Experience"> | string
    meta?: StringWithAggregatesFilter<"Experience"> | string
    category?: StringWithAggregatesFilter<"Experience"> | string
    order?: IntWithAggregatesFilter<"Experience"> | number
    active?: BoolWithAggregatesFilter<"Experience"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
  }

  export type GalleryShotWhereInput = {
    AND?: GalleryShotWhereInput | GalleryShotWhereInput[]
    OR?: GalleryShotWhereInput[]
    NOT?: GalleryShotWhereInput | GalleryShotWhereInput[]
    id?: IntFilter<"GalleryShot"> | number
    src?: StringFilter<"GalleryShot"> | string
    publicId?: StringFilter<"GalleryShot"> | string
    alt?: StringFilter<"GalleryShot"> | string
    order?: IntFilter<"GalleryShot"> | number
    active?: BoolFilter<"GalleryShot"> | boolean
    createdAt?: DateTimeFilter<"GalleryShot"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryShot"> | Date | string
  }

  export type GalleryShotOrderByWithRelationInput = {
    id?: SortOrder
    src?: SortOrder
    publicId?: SortOrder
    alt?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryShotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalleryShotWhereInput | GalleryShotWhereInput[]
    OR?: GalleryShotWhereInput[]
    NOT?: GalleryShotWhereInput | GalleryShotWhereInput[]
    src?: StringFilter<"GalleryShot"> | string
    publicId?: StringFilter<"GalleryShot"> | string
    alt?: StringFilter<"GalleryShot"> | string
    order?: IntFilter<"GalleryShot"> | number
    active?: BoolFilter<"GalleryShot"> | boolean
    createdAt?: DateTimeFilter<"GalleryShot"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryShot"> | Date | string
  }, "id">

  export type GalleryShotOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    publicId?: SortOrder
    alt?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryShotCountOrderByAggregateInput
    _avg?: GalleryShotAvgOrderByAggregateInput
    _max?: GalleryShotMaxOrderByAggregateInput
    _min?: GalleryShotMinOrderByAggregateInput
    _sum?: GalleryShotSumOrderByAggregateInput
  }

  export type GalleryShotScalarWhereWithAggregatesInput = {
    AND?: GalleryShotScalarWhereWithAggregatesInput | GalleryShotScalarWhereWithAggregatesInput[]
    OR?: GalleryShotScalarWhereWithAggregatesInput[]
    NOT?: GalleryShotScalarWhereWithAggregatesInput | GalleryShotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GalleryShot"> | number
    src?: StringWithAggregatesFilter<"GalleryShot"> | string
    publicId?: StringWithAggregatesFilter<"GalleryShot"> | string
    alt?: StringWithAggregatesFilter<"GalleryShot"> | string
    order?: IntWithAggregatesFilter<"GalleryShot"> | number
    active?: BoolWithAggregatesFilter<"GalleryShot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GalleryShot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryShot"> | Date | string
  }

  export type SkillSectionWhereInput = {
    AND?: SkillSectionWhereInput | SkillSectionWhereInput[]
    OR?: SkillSectionWhereInput[]
    NOT?: SkillSectionWhereInput | SkillSectionWhereInput[]
    id?: IntFilter<"SkillSection"> | number
    section?: StringFilter<"SkillSection"> | string
    title?: StringFilter<"SkillSection"> | string
    items?: JsonFilter<"SkillSection">
    order?: IntFilter<"SkillSection"> | number
    active?: BoolFilter<"SkillSection"> | boolean
    createdAt?: DateTimeFilter<"SkillSection"> | Date | string
    updatedAt?: DateTimeFilter<"SkillSection"> | Date | string
  }

  export type SkillSectionOrderByWithRelationInput = {
    id?: SortOrder
    section?: SortOrder
    title?: SortOrder
    items?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillSectionWhereInput | SkillSectionWhereInput[]
    OR?: SkillSectionWhereInput[]
    NOT?: SkillSectionWhereInput | SkillSectionWhereInput[]
    section?: StringFilter<"SkillSection"> | string
    title?: StringFilter<"SkillSection"> | string
    items?: JsonFilter<"SkillSection">
    order?: IntFilter<"SkillSection"> | number
    active?: BoolFilter<"SkillSection"> | boolean
    createdAt?: DateTimeFilter<"SkillSection"> | Date | string
    updatedAt?: DateTimeFilter<"SkillSection"> | Date | string
  }, "id">

  export type SkillSectionOrderByWithAggregationInput = {
    id?: SortOrder
    section?: SortOrder
    title?: SortOrder
    items?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillSectionCountOrderByAggregateInput
    _avg?: SkillSectionAvgOrderByAggregateInput
    _max?: SkillSectionMaxOrderByAggregateInput
    _min?: SkillSectionMinOrderByAggregateInput
    _sum?: SkillSectionSumOrderByAggregateInput
  }

  export type SkillSectionScalarWhereWithAggregatesInput = {
    AND?: SkillSectionScalarWhereWithAggregatesInput | SkillSectionScalarWhereWithAggregatesInput[]
    OR?: SkillSectionScalarWhereWithAggregatesInput[]
    NOT?: SkillSectionScalarWhereWithAggregatesInput | SkillSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SkillSection"> | number
    section?: StringWithAggregatesFilter<"SkillSection"> | string
    title?: StringWithAggregatesFilter<"SkillSection"> | string
    items?: JsonWithAggregatesFilter<"SkillSection">
    order?: IntWithAggregatesFilter<"SkillSection"> | number
    active?: BoolWithAggregatesFilter<"SkillSection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SkillSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillSection"> | Date | string
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: IntFilter<"ContactInfo"> | number
    email?: StringFilter<"ContactInfo"> | string
    phone1?: StringNullableFilter<"ContactInfo"> | string | null
    phone2?: StringNullableFilter<"ContactInfo"> | string | null
    availability?: StringNullableFilter<"ContactInfo"> | string | null
    location?: StringNullableFilter<"ContactInfo"> | string | null
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone1?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    email?: StringFilter<"ContactInfo"> | string
    phone1?: StringNullableFilter<"ContactInfo"> | string | null
    phone2?: StringNullableFilter<"ContactInfo"> | string | null
    availability?: StringNullableFilter<"ContactInfo"> | string | null
    location?: StringNullableFilter<"ContactInfo"> | string | null
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }, "id">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone1?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _avg?: ContactInfoAvgOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
    _sum?: ContactInfoSumOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactInfo"> | number
    email?: StringWithAggregatesFilter<"ContactInfo"> | string
    phone1?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    phone2?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    availability?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    location?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
  }

  export type HeroWhereInput = {
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    id?: IntFilter<"Hero"> | number
    status?: StringFilter<"Hero"> | string
    badge?: StringFilter<"Hero"> | string
    title?: StringFilter<"Hero"> | string
    subtitle?: StringFilter<"Hero"> | string
    tags?: JsonFilter<"Hero">
    updatedAt?: DateTimeFilter<"Hero"> | Date | string
  }

  export type HeroOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    badge?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    tags?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    status?: StringFilter<"Hero"> | string
    badge?: StringFilter<"Hero"> | string
    title?: StringFilter<"Hero"> | string
    subtitle?: StringFilter<"Hero"> | string
    tags?: JsonFilter<"Hero">
    updatedAt?: DateTimeFilter<"Hero"> | Date | string
  }, "id">

  export type HeroOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    badge?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    tags?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroCountOrderByAggregateInput
    _avg?: HeroAvgOrderByAggregateInput
    _max?: HeroMaxOrderByAggregateInput
    _min?: HeroMinOrderByAggregateInput
    _sum?: HeroSumOrderByAggregateInput
  }

  export type HeroScalarWhereWithAggregatesInput = {
    AND?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    OR?: HeroScalarWhereWithAggregatesInput[]
    NOT?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hero"> | number
    status?: StringWithAggregatesFilter<"Hero"> | string
    badge?: StringWithAggregatesFilter<"Hero"> | string
    title?: StringWithAggregatesFilter<"Hero"> | string
    subtitle?: StringWithAggregatesFilter<"Hero"> | string
    tags?: JsonWithAggregatesFilter<"Hero">
    updatedAt?: DateTimeWithAggregatesFilter<"Hero"> | Date | string
  }

  export type CtaWhereInput = {
    AND?: CtaWhereInput | CtaWhereInput[]
    OR?: CtaWhereInput[]
    NOT?: CtaWhereInput | CtaWhereInput[]
    id?: IntFilter<"Cta"> | number
    title?: StringFilter<"Cta"> | string
    description?: StringFilter<"Cta"> | string
    engageHref?: StringFilter<"Cta"> | string
    cvHref?: StringFilter<"Cta"> | string
    updatedAt?: DateTimeFilter<"Cta"> | Date | string
  }

  export type CtaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    engageHref?: SortOrder
    cvHref?: SortOrder
    updatedAt?: SortOrder
  }

  export type CtaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CtaWhereInput | CtaWhereInput[]
    OR?: CtaWhereInput[]
    NOT?: CtaWhereInput | CtaWhereInput[]
    title?: StringFilter<"Cta"> | string
    description?: StringFilter<"Cta"> | string
    engageHref?: StringFilter<"Cta"> | string
    cvHref?: StringFilter<"Cta"> | string
    updatedAt?: DateTimeFilter<"Cta"> | Date | string
  }, "id">

  export type CtaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    engageHref?: SortOrder
    cvHref?: SortOrder
    updatedAt?: SortOrder
    _count?: CtaCountOrderByAggregateInput
    _avg?: CtaAvgOrderByAggregateInput
    _max?: CtaMaxOrderByAggregateInput
    _min?: CtaMinOrderByAggregateInput
    _sum?: CtaSumOrderByAggregateInput
  }

  export type CtaScalarWhereWithAggregatesInput = {
    AND?: CtaScalarWhereWithAggregatesInput | CtaScalarWhereWithAggregatesInput[]
    OR?: CtaScalarWhereWithAggregatesInput[]
    NOT?: CtaScalarWhereWithAggregatesInput | CtaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cta"> | number
    title?: StringWithAggregatesFilter<"Cta"> | string
    description?: StringWithAggregatesFilter<"Cta"> | string
    engageHref?: StringWithAggregatesFilter<"Cta"> | string
    cvHref?: StringWithAggregatesFilter<"Cta"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cta"> | Date | string
  }

  export type FooterWhereInput = {
    AND?: FooterWhereInput | FooterWhereInput[]
    OR?: FooterWhereInput[]
    NOT?: FooterWhereInput | FooterWhereInput[]
    id?: IntFilter<"Footer"> | number
    name?: StringFilter<"Footer"> | string
    copyright?: StringFilter<"Footer"> | string
    email?: StringNullableFilter<"Footer"> | string | null
    phone?: StringNullableFilter<"Footer"> | string | null
    vimeoUrl?: StringNullableFilter<"Footer"> | string | null
    updatedAt?: DateTimeFilter<"Footer"> | Date | string
  }

  export type FooterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    copyright?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    vimeoUrl?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type FooterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FooterWhereInput | FooterWhereInput[]
    OR?: FooterWhereInput[]
    NOT?: FooterWhereInput | FooterWhereInput[]
    name?: StringFilter<"Footer"> | string
    copyright?: StringFilter<"Footer"> | string
    email?: StringNullableFilter<"Footer"> | string | null
    phone?: StringNullableFilter<"Footer"> | string | null
    vimeoUrl?: StringNullableFilter<"Footer"> | string | null
    updatedAt?: DateTimeFilter<"Footer"> | Date | string
  }, "id">

  export type FooterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    copyright?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    vimeoUrl?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: FooterCountOrderByAggregateInput
    _avg?: FooterAvgOrderByAggregateInput
    _max?: FooterMaxOrderByAggregateInput
    _min?: FooterMinOrderByAggregateInput
    _sum?: FooterSumOrderByAggregateInput
  }

  export type FooterScalarWhereWithAggregatesInput = {
    AND?: FooterScalarWhereWithAggregatesInput | FooterScalarWhereWithAggregatesInput[]
    OR?: FooterScalarWhereWithAggregatesInput[]
    NOT?: FooterScalarWhereWithAggregatesInput | FooterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Footer"> | number
    name?: StringWithAggregatesFilter<"Footer"> | string
    copyright?: StringWithAggregatesFilter<"Footer"> | string
    email?: StringNullableWithAggregatesFilter<"Footer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Footer"> | string | null
    vimeoUrl?: StringNullableWithAggregatesFilter<"Footer"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Footer"> | Date | string
  }

  export type TranslationWhereInput = {
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    id?: IntFilter<"Translation"> | number
    key?: StringFilter<"Translation"> | string
    language?: StringFilter<"Translation"> | string
    value?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
  }

  export type TranslationOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    language?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key_language?: TranslationKeyLanguageCompoundUniqueInput
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    key?: StringFilter<"Translation"> | string
    language?: StringFilter<"Translation"> | string
    value?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
  }, "id" | "key_language">

  export type TranslationOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    language?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TranslationCountOrderByAggregateInput
    _avg?: TranslationAvgOrderByAggregateInput
    _max?: TranslationMaxOrderByAggregateInput
    _min?: TranslationMinOrderByAggregateInput
    _sum?: TranslationSumOrderByAggregateInput
  }

  export type TranslationScalarWhereWithAggregatesInput = {
    AND?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    OR?: TranslationScalarWhereWithAggregatesInput[]
    NOT?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Translation"> | number
    key?: StringWithAggregatesFilter<"Translation"> | string
    language?: StringWithAggregatesFilter<"Translation"> | string
    value?: StringWithAggregatesFilter<"Translation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: IntFilter<"Language"> | number
    code?: StringFilter<"Language"> | string
    label?: StringFilter<"Language"> | string
    flag?: StringFilter<"Language"> | string
    langCode?: StringNullableFilter<"Language"> | string | null
    order?: IntFilter<"Language"> | number
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrder
    flag?: SortOrder
    langCode?: SortOrderInput | SortOrder
    order?: SortOrder
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    code?: StringFilter<"Language"> | string
    label?: StringFilter<"Language"> | string
    flag?: StringFilter<"Language"> | string
    langCode?: StringNullableFilter<"Language"> | string | null
    order?: IntFilter<"Language"> | number
  }, "id">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrder
    flag?: SortOrder
    langCode?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Language"> | number
    code?: StringWithAggregatesFilter<"Language"> | string
    label?: StringWithAggregatesFilter<"Language"> | string
    flag?: StringWithAggregatesFilter<"Language"> | string
    langCode?: StringNullableWithAggregatesFilter<"Language"> | string | null
    order?: IntWithAggregatesFilter<"Language"> | number
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    email?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type ShowreelProjectCreateInput = {
    title: string
    href: string
    imageUrl: string
    imagePublicId: string
    subKey: string
    delay?: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowreelProjectUncheckedCreateInput = {
    id?: number
    title: string
    href: string
    imageUrl: string
    imagePublicId: string
    subKey: string
    delay?: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowreelProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imagePublicId?: StringFieldUpdateOperationsInput | string
    subKey?: StringFieldUpdateOperationsInput | string
    delay?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowreelProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imagePublicId?: StringFieldUpdateOperationsInput | string
    subKey?: StringFieldUpdateOperationsInput | string
    delay?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowreelProjectCreateManyInput = {
    id?: number
    title: string
    href: string
    imageUrl: string
    imagePublicId: string
    subKey: string
    delay?: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowreelProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imagePublicId?: StringFieldUpdateOperationsInput | string
    subKey?: StringFieldUpdateOperationsInput | string
    delay?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowreelProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imagePublicId?: StringFieldUpdateOperationsInput | string
    subKey?: StringFieldUpdateOperationsInput | string
    delay?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateInput = {
    title: string
    role: string
    meta: string
    category: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    title: string
    role: string
    meta: string
    category: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    meta?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    meta?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateManyInput = {
    id?: number
    title: string
    role: string
    meta: string
    category: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    meta?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    meta?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryShotCreateInput = {
    src: string
    publicId: string
    alt: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryShotUncheckedCreateInput = {
    id?: number
    src: string
    publicId: string
    alt: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryShotUpdateInput = {
    src?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryShotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryShotCreateManyInput = {
    id?: number
    src: string
    publicId: string
    alt: string
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryShotUpdateManyMutationInput = {
    src?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryShotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillSectionCreateInput = {
    section: string
    title: string
    items: JsonNullValueInput | InputJsonValue
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillSectionUncheckedCreateInput = {
    id?: number
    section: string
    title: string
    items: JsonNullValueInput | InputJsonValue
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillSectionUpdateInput = {
    section?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillSectionCreateManyInput = {
    id?: number
    section: string
    title: string
    items: JsonNullValueInput | InputJsonValue
    order?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillSectionUpdateManyMutationInput = {
    section?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    items?: JsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateInput = {
    email: string
    phone1?: string | null
    phone2?: string | null
    availability?: string | null
    location?: string | null
    updatedAt?: Date | string
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: number
    email: string
    phone1?: string | null
    phone2?: string | null
    availability?: string | null
    location?: string | null
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateManyInput = {
    id?: number
    email: string
    phone1?: string | null
    phone2?: string | null
    availability?: string | null
    location?: string | null
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroCreateInput = {
    status: string
    badge: string
    title: string
    subtitle: string
    tags: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type HeroUncheckedCreateInput = {
    id?: number
    status: string
    badge: string
    title: string
    subtitle: string
    tags: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type HeroUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroCreateManyInput = {
    id?: number
    status: string
    badge: string
    title: string
    subtitle: string
    tags: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type HeroUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtaCreateInput = {
    title: string
    description: string
    engageHref: string
    cvHref: string
    updatedAt?: Date | string
  }

  export type CtaUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    engageHref: string
    cvHref: string
    updatedAt?: Date | string
  }

  export type CtaUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    engageHref?: StringFieldUpdateOperationsInput | string
    cvHref?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    engageHref?: StringFieldUpdateOperationsInput | string
    cvHref?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtaCreateManyInput = {
    id?: number
    title: string
    description: string
    engageHref: string
    cvHref: string
    updatedAt?: Date | string
  }

  export type CtaUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    engageHref?: StringFieldUpdateOperationsInput | string
    cvHref?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CtaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    engageHref?: StringFieldUpdateOperationsInput | string
    cvHref?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterCreateInput = {
    name: string
    copyright: string
    email?: string | null
    phone?: string | null
    vimeoUrl?: string | null
    updatedAt?: Date | string
  }

  export type FooterUncheckedCreateInput = {
    id?: number
    name: string
    copyright: string
    email?: string | null
    phone?: string | null
    vimeoUrl?: string | null
    updatedAt?: Date | string
  }

  export type FooterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    copyright?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    vimeoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    copyright?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    vimeoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterCreateManyInput = {
    id?: number
    name: string
    copyright: string
    email?: string | null
    phone?: string | null
    vimeoUrl?: string | null
    updatedAt?: Date | string
  }

  export type FooterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    copyright?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    vimeoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    copyright?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    vimeoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateInput = {
    key: string
    language: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUncheckedCreateInput = {
    id?: number
    key: string
    language: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateManyInput = {
    id?: number
    key: string
    language: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageCreateInput = {
    code: string
    label: string
    flag: string
    langCode?: string | null
    order?: number
  }

  export type LanguageUncheckedCreateInput = {
    id?: number
    code: string
    label: string
    flag: string
    langCode?: string | null
    order?: number
  }

  export type LanguageUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    langCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    langCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageCreateManyInput = {
    id?: number
    code: string
    label: string
    flag: string
    langCode?: string | null
    order?: number
  }

  export type LanguageUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    langCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    langCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUserCreateInput = {
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShowreelProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    subKey?: SortOrder
    delay?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowreelProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ShowreelProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    subKey?: SortOrder
    delay?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowreelProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    imageUrl?: SortOrder
    imagePublicId?: SortOrder
    subKey?: SortOrder
    delay?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowreelProjectSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    meta?: SortOrder
    category?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    meta?: SortOrder
    category?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    meta?: SortOrder
    category?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type GalleryShotCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    publicId?: SortOrder
    alt?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryShotAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type GalleryShotMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    publicId?: SortOrder
    alt?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryShotMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    publicId?: SortOrder
    alt?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryShotSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SkillSectionCountOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    title?: SortOrder
    items?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type SkillSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    title?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSectionMinOrderByAggregateInput = {
    id?: SortOrder
    section?: SortOrder
    title?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSectionSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    availability?: SortOrder
    location?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    availability?: SortOrder
    location?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    availability?: SortOrder
    location?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type HeroCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    badge?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    tags?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HeroMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    badge?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    badge?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CtaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    engageHref?: SortOrder
    cvHref?: SortOrder
    updatedAt?: SortOrder
  }

  export type CtaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CtaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    engageHref?: SortOrder
    cvHref?: SortOrder
    updatedAt?: SortOrder
  }

  export type CtaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    engageHref?: SortOrder
    cvHref?: SortOrder
    updatedAt?: SortOrder
  }

  export type CtaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FooterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    copyright?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    vimeoUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FooterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    copyright?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    vimeoUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    copyright?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    vimeoUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TranslationKeyLanguageCompoundUniqueInput = {
    key: string
    language: string
  }

  export type TranslationCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    language?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    language?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    language?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrder
    flag?: SortOrder
    langCode?: SortOrder
    order?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrder
    flag?: SortOrder
    langCode?: SortOrder
    order?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    label?: SortOrder
    flag?: SortOrder
    langCode?: SortOrder
    order?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}