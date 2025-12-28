
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Treinamento
 * 
 */
export type Treinamento = $Result.DefaultSelection<Prisma.$TreinamentoPayload>
/**
 * Model Certificacao
 * 
 */
export type Certificacao = $Result.DefaultSelection<Prisma.$CertificacaoPayload>
/**
 * Model Epi
 * 
 */
export type Epi = $Result.DefaultSelection<Prisma.$EpiPayload>
/**
 * Model Acidente
 * 
 */
export type Acidente = $Result.DefaultSelection<Prisma.$AcidentePayload>
/**
 * Model Atestado
 * 
 */
export type Atestado = $Result.DefaultSelection<Prisma.$AtestadoPayload>
/**
 * Model Ferias
 * 
 */
export type Ferias = $Result.DefaultSelection<Prisma.$FeriasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN_SYSTEM: 'ADMIN_SYSTEM',
  GENERAL_ADMIN: 'GENERAL_ADMIN',
  OP: 'OP',
  SESMT_ADMIN: 'SESMT_ADMIN',
  SESMT_USER: 'SESMT_USER',
  RH_ADMIN: 'RH_ADMIN',
  RH_USER: 'RH_USER',
  CONTROLER: 'CONTROLER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treinamento`: Exposes CRUD operations for the **Treinamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treinamentos
    * const treinamentos = await prisma.treinamento.findMany()
    * ```
    */
  get treinamento(): Prisma.TreinamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificacao`: Exposes CRUD operations for the **Certificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificacaos
    * const certificacaos = await prisma.certificacao.findMany()
    * ```
    */
  get certificacao(): Prisma.CertificacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.epi`: Exposes CRUD operations for the **Epi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Epis
    * const epis = await prisma.epi.findMany()
    * ```
    */
  get epi(): Prisma.EpiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acidente`: Exposes CRUD operations for the **Acidente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acidentes
    * const acidentes = await prisma.acidente.findMany()
    * ```
    */
  get acidente(): Prisma.AcidenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atestado`: Exposes CRUD operations for the **Atestado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atestados
    * const atestados = await prisma.atestado.findMany()
    * ```
    */
  get atestado(): Prisma.AtestadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ferias`: Exposes CRUD operations for the **Ferias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ferias
    * const ferias = await prisma.ferias.findMany()
    * ```
    */
  get ferias(): Prisma.FeriasDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Treinamento: 'Treinamento',
    Certificacao: 'Certificacao',
    Epi: 'Epi',
    Acidente: 'Acidente',
    Atestado: 'Atestado',
    Ferias: 'Ferias'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "treinamento" | "certificacao" | "epi" | "acidente" | "atestado" | "ferias"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Treinamento: {
        payload: Prisma.$TreinamentoPayload<ExtArgs>
        fields: Prisma.TreinamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreinamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreinamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>
          }
          findFirst: {
            args: Prisma.TreinamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreinamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>
          }
          findMany: {
            args: Prisma.TreinamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>[]
          }
          create: {
            args: Prisma.TreinamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>
          }
          createMany: {
            args: Prisma.TreinamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreinamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>[]
          }
          delete: {
            args: Prisma.TreinamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>
          }
          update: {
            args: Prisma.TreinamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>
          }
          deleteMany: {
            args: Prisma.TreinamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreinamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreinamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>[]
          }
          upsert: {
            args: Prisma.TreinamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinamentoPayload>
          }
          aggregate: {
            args: Prisma.TreinamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreinamento>
          }
          groupBy: {
            args: Prisma.TreinamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreinamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreinamentoCountArgs<ExtArgs>
            result: $Utils.Optional<TreinamentoCountAggregateOutputType> | number
          }
        }
      }
      Certificacao: {
        payload: Prisma.$CertificacaoPayload<ExtArgs>
        fields: Prisma.CertificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>
          }
          findFirst: {
            args: Prisma.CertificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>
          }
          findMany: {
            args: Prisma.CertificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>[]
          }
          create: {
            args: Prisma.CertificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>
          }
          createMany: {
            args: Prisma.CertificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>[]
          }
          delete: {
            args: Prisma.CertificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>
          }
          update: {
            args: Prisma.CertificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>
          }
          deleteMany: {
            args: Prisma.CertificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>[]
          }
          upsert: {
            args: Prisma.CertificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificacaoPayload>
          }
          aggregate: {
            args: Prisma.CertificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificacao>
          }
          groupBy: {
            args: Prisma.CertificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<CertificacaoCountAggregateOutputType> | number
          }
        }
      }
      Epi: {
        payload: Prisma.$EpiPayload<ExtArgs>
        fields: Prisma.EpiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          findFirst: {
            args: Prisma.EpiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          findMany: {
            args: Prisma.EpiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>[]
          }
          create: {
            args: Prisma.EpiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          createMany: {
            args: Prisma.EpiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>[]
          }
          delete: {
            args: Prisma.EpiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          update: {
            args: Prisma.EpiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          deleteMany: {
            args: Prisma.EpiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>[]
          }
          upsert: {
            args: Prisma.EpiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          aggregate: {
            args: Prisma.EpiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpi>
          }
          groupBy: {
            args: Prisma.EpiGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpiGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpiCountArgs<ExtArgs>
            result: $Utils.Optional<EpiCountAggregateOutputType> | number
          }
        }
      }
      Acidente: {
        payload: Prisma.$AcidentePayload<ExtArgs>
        fields: Prisma.AcidenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcidenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcidenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>
          }
          findFirst: {
            args: Prisma.AcidenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcidenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>
          }
          findMany: {
            args: Prisma.AcidenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>[]
          }
          create: {
            args: Prisma.AcidenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>
          }
          createMany: {
            args: Prisma.AcidenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcidenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>[]
          }
          delete: {
            args: Prisma.AcidenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>
          }
          update: {
            args: Prisma.AcidenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>
          }
          deleteMany: {
            args: Prisma.AcidenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcidenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcidenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>[]
          }
          upsert: {
            args: Prisma.AcidenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcidentePayload>
          }
          aggregate: {
            args: Prisma.AcidenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcidente>
          }
          groupBy: {
            args: Prisma.AcidenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcidenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcidenteCountArgs<ExtArgs>
            result: $Utils.Optional<AcidenteCountAggregateOutputType> | number
          }
        }
      }
      Atestado: {
        payload: Prisma.$AtestadoPayload<ExtArgs>
        fields: Prisma.AtestadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtestadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtestadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>
          }
          findFirst: {
            args: Prisma.AtestadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtestadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>
          }
          findMany: {
            args: Prisma.AtestadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>[]
          }
          create: {
            args: Prisma.AtestadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>
          }
          createMany: {
            args: Prisma.AtestadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtestadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>[]
          }
          delete: {
            args: Prisma.AtestadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>
          }
          update: {
            args: Prisma.AtestadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>
          }
          deleteMany: {
            args: Prisma.AtestadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtestadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtestadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>[]
          }
          upsert: {
            args: Prisma.AtestadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtestadoPayload>
          }
          aggregate: {
            args: Prisma.AtestadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtestado>
          }
          groupBy: {
            args: Prisma.AtestadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtestadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtestadoCountArgs<ExtArgs>
            result: $Utils.Optional<AtestadoCountAggregateOutputType> | number
          }
        }
      }
      Ferias: {
        payload: Prisma.$FeriasPayload<ExtArgs>
        fields: Prisma.FeriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>
          }
          findFirst: {
            args: Prisma.FeriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>
          }
          findMany: {
            args: Prisma.FeriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>[]
          }
          create: {
            args: Prisma.FeriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>
          }
          createMany: {
            args: Prisma.FeriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>[]
          }
          delete: {
            args: Prisma.FeriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>
          }
          update: {
            args: Prisma.FeriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>
          }
          deleteMany: {
            args: Prisma.FeriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>[]
          }
          upsert: {
            args: Prisma.FeriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriasPayload>
          }
          aggregate: {
            args: Prisma.FeriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFerias>
          }
          groupBy: {
            args: Prisma.FeriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeriasCountArgs<ExtArgs>
            result: $Utils.Optional<FeriasCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    treinamento?: TreinamentoOmit
    certificacao?: CertificacaoOmit
    epi?: EpiOmit
    acidente?: AcidenteOmit
    atestado?: AtestadoOmit
    ferias?: FeriasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    treinamentos: number
    certificacoes: number
    epis: number
    acidentes: number
    atestados: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treinamentos?: boolean | UserCountOutputTypeCountTreinamentosArgs
    certificacoes?: boolean | UserCountOutputTypeCountCertificacoesArgs
    epis?: boolean | UserCountOutputTypeCountEpisArgs
    acidentes?: boolean | UserCountOutputTypeCountAcidentesArgs
    atestados?: boolean | UserCountOutputTypeCountAtestadosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTreinamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinamentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificacaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEpisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAcidentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcidenteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAtestadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtestadoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    urlPhoto: string | null
    cpf: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    pais: string | null
    complemento: string | null
    nome: string | null
    matricula: string | null
    cargo: string | null
    setor: string | null
    foto: string | null
    turno: string | null
    role: $Enums.Role | null
    asoStatus: string | null
    asoUltimo: Date | null
    asoVencimento: Date | null
    asoRestricoes: string | null
    situacaoGeral: string | null
    motivoDesligamento: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    urlPhoto: string | null
    cpf: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    pais: string | null
    complemento: string | null
    nome: string | null
    matricula: string | null
    cargo: string | null
    setor: string | null
    foto: string | null
    turno: string | null
    role: $Enums.Role | null
    asoStatus: string | null
    asoUltimo: Date | null
    asoVencimento: Date | null
    asoRestricoes: string | null
    situacaoGeral: string | null
    motivoDesligamento: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    urlPhoto: number
    cpf: number
    email: number
    senha: number
    telefone: number
    endereco: number
    cidade: number
    estado: number
    cep: number
    pais: number
    complemento: number
    nome: number
    matricula: number
    cargo: number
    setor: number
    foto: number
    turno: number
    role: number
    areasPermitidas: number
    niveisAcesso: number
    bloqueios: number
    asoStatus: number
    asoUltimo: number
    asoVencimento: number
    asoRestricoes: number
    situacaoGeral: number
    motivoDesligamento: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    urlPhoto?: true
    cpf?: true
    email?: true
    senha?: true
    telefone?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    pais?: true
    complemento?: true
    nome?: true
    matricula?: true
    cargo?: true
    setor?: true
    foto?: true
    turno?: true
    role?: true
    asoStatus?: true
    asoUltimo?: true
    asoVencimento?: true
    asoRestricoes?: true
    situacaoGeral?: true
    motivoDesligamento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    urlPhoto?: true
    cpf?: true
    email?: true
    senha?: true
    telefone?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    pais?: true
    complemento?: true
    nome?: true
    matricula?: true
    cargo?: true
    setor?: true
    foto?: true
    turno?: true
    role?: true
    asoStatus?: true
    asoUltimo?: true
    asoVencimento?: true
    asoRestricoes?: true
    situacaoGeral?: true
    motivoDesligamento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    urlPhoto?: true
    cpf?: true
    email?: true
    senha?: true
    telefone?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    pais?: true
    complemento?: true
    nome?: true
    matricula?: true
    cargo?: true
    setor?: true
    foto?: true
    turno?: true
    role?: true
    areasPermitidas?: true
    niveisAcesso?: true
    bloqueios?: true
    asoStatus?: true
    asoUltimo?: true
    asoVencimento?: true
    asoRestricoes?: true
    situacaoGeral?: true
    motivoDesligamento?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    urlPhoto: string | null
    cpf: string
    email: string
    senha: string
    telefone: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    pais: string | null
    complemento: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto: string | null
    turno: string | null
    role: $Enums.Role
    areasPermitidas: string[]
    niveisAcesso: string[]
    bloqueios: string[]
    asoStatus: string
    asoUltimo: Date | null
    asoVencimento: Date | null
    asoRestricoes: string | null
    situacaoGeral: string
    motivoDesligamento: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPhoto?: boolean
    cpf?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    pais?: boolean
    complemento?: boolean
    nome?: boolean
    matricula?: boolean
    cargo?: boolean
    setor?: boolean
    foto?: boolean
    turno?: boolean
    role?: boolean
    areasPermitidas?: boolean
    niveisAcesso?: boolean
    bloqueios?: boolean
    asoStatus?: boolean
    asoUltimo?: boolean
    asoVencimento?: boolean
    asoRestricoes?: boolean
    situacaoGeral?: boolean
    motivoDesligamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    treinamentos?: boolean | User$treinamentosArgs<ExtArgs>
    certificacoes?: boolean | User$certificacoesArgs<ExtArgs>
    epis?: boolean | User$episArgs<ExtArgs>
    acidentes?: boolean | User$acidentesArgs<ExtArgs>
    atestados?: boolean | User$atestadosArgs<ExtArgs>
    ferias?: boolean | User$feriasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPhoto?: boolean
    cpf?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    pais?: boolean
    complemento?: boolean
    nome?: boolean
    matricula?: boolean
    cargo?: boolean
    setor?: boolean
    foto?: boolean
    turno?: boolean
    role?: boolean
    areasPermitidas?: boolean
    niveisAcesso?: boolean
    bloqueios?: boolean
    asoStatus?: boolean
    asoUltimo?: boolean
    asoVencimento?: boolean
    asoRestricoes?: boolean
    situacaoGeral?: boolean
    motivoDesligamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urlPhoto?: boolean
    cpf?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    pais?: boolean
    complemento?: boolean
    nome?: boolean
    matricula?: boolean
    cargo?: boolean
    setor?: boolean
    foto?: boolean
    turno?: boolean
    role?: boolean
    areasPermitidas?: boolean
    niveisAcesso?: boolean
    bloqueios?: boolean
    asoStatus?: boolean
    asoUltimo?: boolean
    asoVencimento?: boolean
    asoRestricoes?: boolean
    situacaoGeral?: boolean
    motivoDesligamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    urlPhoto?: boolean
    cpf?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    pais?: boolean
    complemento?: boolean
    nome?: boolean
    matricula?: boolean
    cargo?: boolean
    setor?: boolean
    foto?: boolean
    turno?: boolean
    role?: boolean
    areasPermitidas?: boolean
    niveisAcesso?: boolean
    bloqueios?: boolean
    asoStatus?: boolean
    asoUltimo?: boolean
    asoVencimento?: boolean
    asoRestricoes?: boolean
    situacaoGeral?: boolean
    motivoDesligamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "urlPhoto" | "cpf" | "email" | "senha" | "telefone" | "endereco" | "cidade" | "estado" | "cep" | "pais" | "complemento" | "nome" | "matricula" | "cargo" | "setor" | "foto" | "turno" | "role" | "areasPermitidas" | "niveisAcesso" | "bloqueios" | "asoStatus" | "asoUltimo" | "asoVencimento" | "asoRestricoes" | "situacaoGeral" | "motivoDesligamento" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treinamentos?: boolean | User$treinamentosArgs<ExtArgs>
    certificacoes?: boolean | User$certificacoesArgs<ExtArgs>
    epis?: boolean | User$episArgs<ExtArgs>
    acidentes?: boolean | User$acidentesArgs<ExtArgs>
    atestados?: boolean | User$atestadosArgs<ExtArgs>
    ferias?: boolean | User$feriasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      treinamentos: Prisma.$TreinamentoPayload<ExtArgs>[]
      certificacoes: Prisma.$CertificacaoPayload<ExtArgs>[]
      epis: Prisma.$EpiPayload<ExtArgs>[]
      acidentes: Prisma.$AcidentePayload<ExtArgs>[]
      atestados: Prisma.$AtestadoPayload<ExtArgs>[]
      ferias: Prisma.$FeriasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      urlPhoto: string | null
      cpf: string
      email: string
      senha: string
      telefone: string | null
      endereco: string | null
      cidade: string | null
      estado: string | null
      cep: string | null
      pais: string | null
      complemento: string | null
      nome: string
      matricula: string
      cargo: string
      setor: string
      foto: string | null
      turno: string | null
      role: $Enums.Role
      areasPermitidas: string[]
      niveisAcesso: string[]
      bloqueios: string[]
      asoStatus: string
      asoUltimo: Date | null
      asoVencimento: Date | null
      asoRestricoes: string | null
      situacaoGeral: string
      motivoDesligamento: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treinamentos<T extends User$treinamentosArgs<ExtArgs> = {}>(args?: Subset<T, User$treinamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificacoes<T extends User$certificacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    epis<T extends User$episArgs<ExtArgs> = {}>(args?: Subset<T, User$episArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acidentes<T extends User$acidentesArgs<ExtArgs> = {}>(args?: Subset<T, User$acidentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atestados<T extends User$atestadosArgs<ExtArgs> = {}>(args?: Subset<T, User$atestadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ferias<T extends User$feriasArgs<ExtArgs> = {}>(args?: Subset<T, User$feriasArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly urlPhoto: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly telefone: FieldRef<"User", 'String'>
    readonly endereco: FieldRef<"User", 'String'>
    readonly cidade: FieldRef<"User", 'String'>
    readonly estado: FieldRef<"User", 'String'>
    readonly cep: FieldRef<"User", 'String'>
    readonly pais: FieldRef<"User", 'String'>
    readonly complemento: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly matricula: FieldRef<"User", 'String'>
    readonly cargo: FieldRef<"User", 'String'>
    readonly setor: FieldRef<"User", 'String'>
    readonly foto: FieldRef<"User", 'String'>
    readonly turno: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly areasPermitidas: FieldRef<"User", 'String[]'>
    readonly niveisAcesso: FieldRef<"User", 'String[]'>
    readonly bloqueios: FieldRef<"User", 'String[]'>
    readonly asoStatus: FieldRef<"User", 'String'>
    readonly asoUltimo: FieldRef<"User", 'DateTime'>
    readonly asoVencimento: FieldRef<"User", 'DateTime'>
    readonly asoRestricoes: FieldRef<"User", 'String'>
    readonly situacaoGeral: FieldRef<"User", 'String'>
    readonly motivoDesligamento: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.treinamentos
   */
  export type User$treinamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    where?: TreinamentoWhereInput
    orderBy?: TreinamentoOrderByWithRelationInput | TreinamentoOrderByWithRelationInput[]
    cursor?: TreinamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreinamentoScalarFieldEnum | TreinamentoScalarFieldEnum[]
  }

  /**
   * User.certificacoes
   */
  export type User$certificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    where?: CertificacaoWhereInput
    orderBy?: CertificacaoOrderByWithRelationInput | CertificacaoOrderByWithRelationInput[]
    cursor?: CertificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificacaoScalarFieldEnum | CertificacaoScalarFieldEnum[]
  }

  /**
   * User.epis
   */
  export type User$episArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    where?: EpiWhereInput
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    cursor?: EpiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpiScalarFieldEnum | EpiScalarFieldEnum[]
  }

  /**
   * User.acidentes
   */
  export type User$acidentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    where?: AcidenteWhereInput
    orderBy?: AcidenteOrderByWithRelationInput | AcidenteOrderByWithRelationInput[]
    cursor?: AcidenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcidenteScalarFieldEnum | AcidenteScalarFieldEnum[]
  }

  /**
   * User.atestados
   */
  export type User$atestadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    where?: AtestadoWhereInput
    orderBy?: AtestadoOrderByWithRelationInput | AtestadoOrderByWithRelationInput[]
    cursor?: AtestadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtestadoScalarFieldEnum | AtestadoScalarFieldEnum[]
  }

  /**
   * User.ferias
   */
  export type User$feriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    where?: FeriasWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Treinamento
   */

  export type AggregateTreinamento = {
    _count: TreinamentoCountAggregateOutputType | null
    _min: TreinamentoMinAggregateOutputType | null
    _max: TreinamentoMaxAggregateOutputType | null
  }

  export type TreinamentoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    concluidoEm: Date | null
    venceEm: Date | null
    status: string | null
    userId: string | null
  }

  export type TreinamentoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    concluidoEm: Date | null
    venceEm: Date | null
    status: string | null
    userId: string | null
  }

  export type TreinamentoCountAggregateOutputType = {
    id: number
    nome: number
    concluidoEm: number
    venceEm: number
    status: number
    userId: number
    _all: number
  }


  export type TreinamentoMinAggregateInputType = {
    id?: true
    nome?: true
    concluidoEm?: true
    venceEm?: true
    status?: true
    userId?: true
  }

  export type TreinamentoMaxAggregateInputType = {
    id?: true
    nome?: true
    concluidoEm?: true
    venceEm?: true
    status?: true
    userId?: true
  }

  export type TreinamentoCountAggregateInputType = {
    id?: true
    nome?: true
    concluidoEm?: true
    venceEm?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type TreinamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treinamento to aggregate.
     */
    where?: TreinamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinamentos to fetch.
     */
    orderBy?: TreinamentoOrderByWithRelationInput | TreinamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreinamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Treinamentos
    **/
    _count?: true | TreinamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreinamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreinamentoMaxAggregateInputType
  }

  export type GetTreinamentoAggregateType<T extends TreinamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTreinamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreinamento[P]>
      : GetScalarType<T[P], AggregateTreinamento[P]>
  }




  export type TreinamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinamentoWhereInput
    orderBy?: TreinamentoOrderByWithAggregationInput | TreinamentoOrderByWithAggregationInput[]
    by: TreinamentoScalarFieldEnum[] | TreinamentoScalarFieldEnum
    having?: TreinamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreinamentoCountAggregateInputType | true
    _min?: TreinamentoMinAggregateInputType
    _max?: TreinamentoMaxAggregateInputType
  }

  export type TreinamentoGroupByOutputType = {
    id: string
    nome: string
    concluidoEm: Date | null
    venceEm: Date | null
    status: string
    userId: string
    _count: TreinamentoCountAggregateOutputType | null
    _min: TreinamentoMinAggregateOutputType | null
    _max: TreinamentoMaxAggregateOutputType | null
  }

  type GetTreinamentoGroupByPayload<T extends TreinamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreinamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreinamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreinamentoGroupByOutputType[P]>
            : GetScalarType<T[P], TreinamentoGroupByOutputType[P]>
        }
      >
    >


  export type TreinamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    concluidoEm?: boolean
    venceEm?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treinamento"]>

  export type TreinamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    concluidoEm?: boolean
    venceEm?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treinamento"]>

  export type TreinamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    concluidoEm?: boolean
    venceEm?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treinamento"]>

  export type TreinamentoSelectScalar = {
    id?: boolean
    nome?: boolean
    concluidoEm?: boolean
    venceEm?: boolean
    status?: boolean
    userId?: boolean
  }

  export type TreinamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "concluidoEm" | "venceEm" | "status" | "userId", ExtArgs["result"]["treinamento"]>
  export type TreinamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TreinamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TreinamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TreinamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Treinamento"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      concluidoEm: Date | null
      venceEm: Date | null
      status: string
      userId: string
    }, ExtArgs["result"]["treinamento"]>
    composites: {}
  }

  type TreinamentoGetPayload<S extends boolean | null | undefined | TreinamentoDefaultArgs> = $Result.GetResult<Prisma.$TreinamentoPayload, S>

  type TreinamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreinamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreinamentoCountAggregateInputType | true
    }

  export interface TreinamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Treinamento'], meta: { name: 'Treinamento' } }
    /**
     * Find zero or one Treinamento that matches the filter.
     * @param {TreinamentoFindUniqueArgs} args - Arguments to find a Treinamento
     * @example
     * // Get one Treinamento
     * const treinamento = await prisma.treinamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreinamentoFindUniqueArgs>(args: SelectSubset<T, TreinamentoFindUniqueArgs<ExtArgs>>): Prisma__TreinamentoClient<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treinamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreinamentoFindUniqueOrThrowArgs} args - Arguments to find a Treinamento
     * @example
     * // Get one Treinamento
     * const treinamento = await prisma.treinamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreinamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, TreinamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreinamentoClient<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treinamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinamentoFindFirstArgs} args - Arguments to find a Treinamento
     * @example
     * // Get one Treinamento
     * const treinamento = await prisma.treinamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreinamentoFindFirstArgs>(args?: SelectSubset<T, TreinamentoFindFirstArgs<ExtArgs>>): Prisma__TreinamentoClient<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treinamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinamentoFindFirstOrThrowArgs} args - Arguments to find a Treinamento
     * @example
     * // Get one Treinamento
     * const treinamento = await prisma.treinamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreinamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, TreinamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreinamentoClient<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treinamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treinamentos
     * const treinamentos = await prisma.treinamento.findMany()
     * 
     * // Get first 10 Treinamentos
     * const treinamentos = await prisma.treinamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treinamentoWithIdOnly = await prisma.treinamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreinamentoFindManyArgs>(args?: SelectSubset<T, TreinamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treinamento.
     * @param {TreinamentoCreateArgs} args - Arguments to create a Treinamento.
     * @example
     * // Create one Treinamento
     * const Treinamento = await prisma.treinamento.create({
     *   data: {
     *     // ... data to create a Treinamento
     *   }
     * })
     * 
     */
    create<T extends TreinamentoCreateArgs>(args: SelectSubset<T, TreinamentoCreateArgs<ExtArgs>>): Prisma__TreinamentoClient<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treinamentos.
     * @param {TreinamentoCreateManyArgs} args - Arguments to create many Treinamentos.
     * @example
     * // Create many Treinamentos
     * const treinamento = await prisma.treinamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreinamentoCreateManyArgs>(args?: SelectSubset<T, TreinamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Treinamentos and returns the data saved in the database.
     * @param {TreinamentoCreateManyAndReturnArgs} args - Arguments to create many Treinamentos.
     * @example
     * // Create many Treinamentos
     * const treinamento = await prisma.treinamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Treinamentos and only return the `id`
     * const treinamentoWithIdOnly = await prisma.treinamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreinamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, TreinamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Treinamento.
     * @param {TreinamentoDeleteArgs} args - Arguments to delete one Treinamento.
     * @example
     * // Delete one Treinamento
     * const Treinamento = await prisma.treinamento.delete({
     *   where: {
     *     // ... filter to delete one Treinamento
     *   }
     * })
     * 
     */
    delete<T extends TreinamentoDeleteArgs>(args: SelectSubset<T, TreinamentoDeleteArgs<ExtArgs>>): Prisma__TreinamentoClient<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treinamento.
     * @param {TreinamentoUpdateArgs} args - Arguments to update one Treinamento.
     * @example
     * // Update one Treinamento
     * const treinamento = await prisma.treinamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreinamentoUpdateArgs>(args: SelectSubset<T, TreinamentoUpdateArgs<ExtArgs>>): Prisma__TreinamentoClient<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treinamentos.
     * @param {TreinamentoDeleteManyArgs} args - Arguments to filter Treinamentos to delete.
     * @example
     * // Delete a few Treinamentos
     * const { count } = await prisma.treinamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreinamentoDeleteManyArgs>(args?: SelectSubset<T, TreinamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treinamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treinamentos
     * const treinamento = await prisma.treinamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreinamentoUpdateManyArgs>(args: SelectSubset<T, TreinamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treinamentos and returns the data updated in the database.
     * @param {TreinamentoUpdateManyAndReturnArgs} args - Arguments to update many Treinamentos.
     * @example
     * // Update many Treinamentos
     * const treinamento = await prisma.treinamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Treinamentos and only return the `id`
     * const treinamentoWithIdOnly = await prisma.treinamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends TreinamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, TreinamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Treinamento.
     * @param {TreinamentoUpsertArgs} args - Arguments to update or create a Treinamento.
     * @example
     * // Update or create a Treinamento
     * const treinamento = await prisma.treinamento.upsert({
     *   create: {
     *     // ... data to create a Treinamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treinamento we want to update
     *   }
     * })
     */
    upsert<T extends TreinamentoUpsertArgs>(args: SelectSubset<T, TreinamentoUpsertArgs<ExtArgs>>): Prisma__TreinamentoClient<$Result.GetResult<Prisma.$TreinamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Treinamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinamentoCountArgs} args - Arguments to filter Treinamentos to count.
     * @example
     * // Count the number of Treinamentos
     * const count = await prisma.treinamento.count({
     *   where: {
     *     // ... the filter for the Treinamentos we want to count
     *   }
     * })
    **/
    count<T extends TreinamentoCountArgs>(
      args?: Subset<T, TreinamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreinamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treinamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreinamentoAggregateArgs>(args: Subset<T, TreinamentoAggregateArgs>): Prisma.PrismaPromise<GetTreinamentoAggregateType<T>>

    /**
     * Group by Treinamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinamentoGroupByArgs} args - Group by arguments.
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
      T extends TreinamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreinamentoGroupByArgs['orderBy'] }
        : { orderBy?: TreinamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreinamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreinamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Treinamento model
   */
  readonly fields: TreinamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Treinamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreinamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Treinamento model
   */
  interface TreinamentoFieldRefs {
    readonly id: FieldRef<"Treinamento", 'String'>
    readonly nome: FieldRef<"Treinamento", 'String'>
    readonly concluidoEm: FieldRef<"Treinamento", 'DateTime'>
    readonly venceEm: FieldRef<"Treinamento", 'DateTime'>
    readonly status: FieldRef<"Treinamento", 'String'>
    readonly userId: FieldRef<"Treinamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Treinamento findUnique
   */
  export type TreinamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * Filter, which Treinamento to fetch.
     */
    where: TreinamentoWhereUniqueInput
  }

  /**
   * Treinamento findUniqueOrThrow
   */
  export type TreinamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * Filter, which Treinamento to fetch.
     */
    where: TreinamentoWhereUniqueInput
  }

  /**
   * Treinamento findFirst
   */
  export type TreinamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * Filter, which Treinamento to fetch.
     */
    where?: TreinamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinamentos to fetch.
     */
    orderBy?: TreinamentoOrderByWithRelationInput | TreinamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treinamentos.
     */
    cursor?: TreinamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treinamentos.
     */
    distinct?: TreinamentoScalarFieldEnum | TreinamentoScalarFieldEnum[]
  }

  /**
   * Treinamento findFirstOrThrow
   */
  export type TreinamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * Filter, which Treinamento to fetch.
     */
    where?: TreinamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinamentos to fetch.
     */
    orderBy?: TreinamentoOrderByWithRelationInput | TreinamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treinamentos.
     */
    cursor?: TreinamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treinamentos.
     */
    distinct?: TreinamentoScalarFieldEnum | TreinamentoScalarFieldEnum[]
  }

  /**
   * Treinamento findMany
   */
  export type TreinamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * Filter, which Treinamentos to fetch.
     */
    where?: TreinamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinamentos to fetch.
     */
    orderBy?: TreinamentoOrderByWithRelationInput | TreinamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Treinamentos.
     */
    cursor?: TreinamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinamentos.
     */
    skip?: number
    distinct?: TreinamentoScalarFieldEnum | TreinamentoScalarFieldEnum[]
  }

  /**
   * Treinamento create
   */
  export type TreinamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Treinamento.
     */
    data: XOR<TreinamentoCreateInput, TreinamentoUncheckedCreateInput>
  }

  /**
   * Treinamento createMany
   */
  export type TreinamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Treinamentos.
     */
    data: TreinamentoCreateManyInput | TreinamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Treinamento createManyAndReturn
   */
  export type TreinamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Treinamentos.
     */
    data: TreinamentoCreateManyInput | TreinamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Treinamento update
   */
  export type TreinamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Treinamento.
     */
    data: XOR<TreinamentoUpdateInput, TreinamentoUncheckedUpdateInput>
    /**
     * Choose, which Treinamento to update.
     */
    where: TreinamentoWhereUniqueInput
  }

  /**
   * Treinamento updateMany
   */
  export type TreinamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Treinamentos.
     */
    data: XOR<TreinamentoUpdateManyMutationInput, TreinamentoUncheckedUpdateManyInput>
    /**
     * Filter which Treinamentos to update
     */
    where?: TreinamentoWhereInput
    /**
     * Limit how many Treinamentos to update.
     */
    limit?: number
  }

  /**
   * Treinamento updateManyAndReturn
   */
  export type TreinamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * The data used to update Treinamentos.
     */
    data: XOR<TreinamentoUpdateManyMutationInput, TreinamentoUncheckedUpdateManyInput>
    /**
     * Filter which Treinamentos to update
     */
    where?: TreinamentoWhereInput
    /**
     * Limit how many Treinamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Treinamento upsert
   */
  export type TreinamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Treinamento to update in case it exists.
     */
    where: TreinamentoWhereUniqueInput
    /**
     * In case the Treinamento found by the `where` argument doesn't exist, create a new Treinamento with this data.
     */
    create: XOR<TreinamentoCreateInput, TreinamentoUncheckedCreateInput>
    /**
     * In case the Treinamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreinamentoUpdateInput, TreinamentoUncheckedUpdateInput>
  }

  /**
   * Treinamento delete
   */
  export type TreinamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
    /**
     * Filter which Treinamento to delete.
     */
    where: TreinamentoWhereUniqueInput
  }

  /**
   * Treinamento deleteMany
   */
  export type TreinamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treinamentos to delete
     */
    where?: TreinamentoWhereInput
    /**
     * Limit how many Treinamentos to delete.
     */
    limit?: number
  }

  /**
   * Treinamento without action
   */
  export type TreinamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinamento
     */
    select?: TreinamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinamento
     */
    omit?: TreinamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinamentoInclude<ExtArgs> | null
  }


  /**
   * Model Certificacao
   */

  export type AggregateCertificacao = {
    _count: CertificacaoCountAggregateOutputType | null
    _min: CertificacaoMinAggregateOutputType | null
    _max: CertificacaoMaxAggregateOutputType | null
  }

  export type CertificacaoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    emitidaEm: Date | null
    venceEm: Date | null
    status: string | null
    userId: string | null
  }

  export type CertificacaoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    emitidaEm: Date | null
    venceEm: Date | null
    status: string | null
    userId: string | null
  }

  export type CertificacaoCountAggregateOutputType = {
    id: number
    nome: number
    emitidaEm: number
    venceEm: number
    status: number
    userId: number
    _all: number
  }


  export type CertificacaoMinAggregateInputType = {
    id?: true
    nome?: true
    emitidaEm?: true
    venceEm?: true
    status?: true
    userId?: true
  }

  export type CertificacaoMaxAggregateInputType = {
    id?: true
    nome?: true
    emitidaEm?: true
    venceEm?: true
    status?: true
    userId?: true
  }

  export type CertificacaoCountAggregateInputType = {
    id?: true
    nome?: true
    emitidaEm?: true
    venceEm?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type CertificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificacao to aggregate.
     */
    where?: CertificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificacaos to fetch.
     */
    orderBy?: CertificacaoOrderByWithRelationInput | CertificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificacaos
    **/
    _count?: true | CertificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificacaoMaxAggregateInputType
  }

  export type GetCertificacaoAggregateType<T extends CertificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificacao[P]>
      : GetScalarType<T[P], AggregateCertificacao[P]>
  }




  export type CertificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificacaoWhereInput
    orderBy?: CertificacaoOrderByWithAggregationInput | CertificacaoOrderByWithAggregationInput[]
    by: CertificacaoScalarFieldEnum[] | CertificacaoScalarFieldEnum
    having?: CertificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificacaoCountAggregateInputType | true
    _min?: CertificacaoMinAggregateInputType
    _max?: CertificacaoMaxAggregateInputType
  }

  export type CertificacaoGroupByOutputType = {
    id: string
    nome: string
    emitidaEm: Date | null
    venceEm: Date | null
    status: string
    userId: string
    _count: CertificacaoCountAggregateOutputType | null
    _min: CertificacaoMinAggregateOutputType | null
    _max: CertificacaoMaxAggregateOutputType | null
  }

  type GetCertificacaoGroupByPayload<T extends CertificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], CertificacaoGroupByOutputType[P]>
        }
      >
    >


  export type CertificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    emitidaEm?: boolean
    venceEm?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificacao"]>

  export type CertificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    emitidaEm?: boolean
    venceEm?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificacao"]>

  export type CertificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    emitidaEm?: boolean
    venceEm?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificacao"]>

  export type CertificacaoSelectScalar = {
    id?: boolean
    nome?: boolean
    emitidaEm?: boolean
    venceEm?: boolean
    status?: boolean
    userId?: boolean
  }

  export type CertificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "emitidaEm" | "venceEm" | "status" | "userId", ExtArgs["result"]["certificacao"]>
  export type CertificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CertificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CertificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CertificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificacao"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      emitidaEm: Date | null
      venceEm: Date | null
      status: string
      userId: string
    }, ExtArgs["result"]["certificacao"]>
    composites: {}
  }

  type CertificacaoGetPayload<S extends boolean | null | undefined | CertificacaoDefaultArgs> = $Result.GetResult<Prisma.$CertificacaoPayload, S>

  type CertificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificacaoCountAggregateInputType | true
    }

  export interface CertificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificacao'], meta: { name: 'Certificacao' } }
    /**
     * Find zero or one Certificacao that matches the filter.
     * @param {CertificacaoFindUniqueArgs} args - Arguments to find a Certificacao
     * @example
     * // Get one Certificacao
     * const certificacao = await prisma.certificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificacaoFindUniqueArgs>(args: SelectSubset<T, CertificacaoFindUniqueArgs<ExtArgs>>): Prisma__CertificacaoClient<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificacaoFindUniqueOrThrowArgs} args - Arguments to find a Certificacao
     * @example
     * // Get one Certificacao
     * const certificacao = await prisma.certificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificacaoClient<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificacaoFindFirstArgs} args - Arguments to find a Certificacao
     * @example
     * // Get one Certificacao
     * const certificacao = await prisma.certificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificacaoFindFirstArgs>(args?: SelectSubset<T, CertificacaoFindFirstArgs<ExtArgs>>): Prisma__CertificacaoClient<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificacaoFindFirstOrThrowArgs} args - Arguments to find a Certificacao
     * @example
     * // Get one Certificacao
     * const certificacao = await prisma.certificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificacaoClient<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificacaos
     * const certificacaos = await prisma.certificacao.findMany()
     * 
     * // Get first 10 Certificacaos
     * const certificacaos = await prisma.certificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificacaoWithIdOnly = await prisma.certificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificacaoFindManyArgs>(args?: SelectSubset<T, CertificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificacao.
     * @param {CertificacaoCreateArgs} args - Arguments to create a Certificacao.
     * @example
     * // Create one Certificacao
     * const Certificacao = await prisma.certificacao.create({
     *   data: {
     *     // ... data to create a Certificacao
     *   }
     * })
     * 
     */
    create<T extends CertificacaoCreateArgs>(args: SelectSubset<T, CertificacaoCreateArgs<ExtArgs>>): Prisma__CertificacaoClient<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificacaos.
     * @param {CertificacaoCreateManyArgs} args - Arguments to create many Certificacaos.
     * @example
     * // Create many Certificacaos
     * const certificacao = await prisma.certificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificacaoCreateManyArgs>(args?: SelectSubset<T, CertificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificacaos and returns the data saved in the database.
     * @param {CertificacaoCreateManyAndReturnArgs} args - Arguments to create many Certificacaos.
     * @example
     * // Create many Certificacaos
     * const certificacao = await prisma.certificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificacaos and only return the `id`
     * const certificacaoWithIdOnly = await prisma.certificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificacao.
     * @param {CertificacaoDeleteArgs} args - Arguments to delete one Certificacao.
     * @example
     * // Delete one Certificacao
     * const Certificacao = await prisma.certificacao.delete({
     *   where: {
     *     // ... filter to delete one Certificacao
     *   }
     * })
     * 
     */
    delete<T extends CertificacaoDeleteArgs>(args: SelectSubset<T, CertificacaoDeleteArgs<ExtArgs>>): Prisma__CertificacaoClient<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificacao.
     * @param {CertificacaoUpdateArgs} args - Arguments to update one Certificacao.
     * @example
     * // Update one Certificacao
     * const certificacao = await prisma.certificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificacaoUpdateArgs>(args: SelectSubset<T, CertificacaoUpdateArgs<ExtArgs>>): Prisma__CertificacaoClient<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificacaos.
     * @param {CertificacaoDeleteManyArgs} args - Arguments to filter Certificacaos to delete.
     * @example
     * // Delete a few Certificacaos
     * const { count } = await prisma.certificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificacaoDeleteManyArgs>(args?: SelectSubset<T, CertificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificacaos
     * const certificacao = await prisma.certificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificacaoUpdateManyArgs>(args: SelectSubset<T, CertificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificacaos and returns the data updated in the database.
     * @param {CertificacaoUpdateManyAndReturnArgs} args - Arguments to update many Certificacaos.
     * @example
     * // Update many Certificacaos
     * const certificacao = await prisma.certificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificacaos and only return the `id`
     * const certificacaoWithIdOnly = await prisma.certificacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends CertificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificacao.
     * @param {CertificacaoUpsertArgs} args - Arguments to update or create a Certificacao.
     * @example
     * // Update or create a Certificacao
     * const certificacao = await prisma.certificacao.upsert({
     *   create: {
     *     // ... data to create a Certificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificacao we want to update
     *   }
     * })
     */
    upsert<T extends CertificacaoUpsertArgs>(args: SelectSubset<T, CertificacaoUpsertArgs<ExtArgs>>): Prisma__CertificacaoClient<$Result.GetResult<Prisma.$CertificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificacaoCountArgs} args - Arguments to filter Certificacaos to count.
     * @example
     * // Count the number of Certificacaos
     * const count = await prisma.certificacao.count({
     *   where: {
     *     // ... the filter for the Certificacaos we want to count
     *   }
     * })
    **/
    count<T extends CertificacaoCountArgs>(
      args?: Subset<T, CertificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificacaoAggregateArgs>(args: Subset<T, CertificacaoAggregateArgs>): Prisma.PrismaPromise<GetCertificacaoAggregateType<T>>

    /**
     * Group by Certificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificacaoGroupByArgs} args - Group by arguments.
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
      T extends CertificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificacaoGroupByArgs['orderBy'] }
        : { orderBy?: CertificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificacao model
   */
  readonly fields: CertificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Certificacao model
   */
  interface CertificacaoFieldRefs {
    readonly id: FieldRef<"Certificacao", 'String'>
    readonly nome: FieldRef<"Certificacao", 'String'>
    readonly emitidaEm: FieldRef<"Certificacao", 'DateTime'>
    readonly venceEm: FieldRef<"Certificacao", 'DateTime'>
    readonly status: FieldRef<"Certificacao", 'String'>
    readonly userId: FieldRef<"Certificacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certificacao findUnique
   */
  export type CertificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Certificacao to fetch.
     */
    where: CertificacaoWhereUniqueInput
  }

  /**
   * Certificacao findUniqueOrThrow
   */
  export type CertificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Certificacao to fetch.
     */
    where: CertificacaoWhereUniqueInput
  }

  /**
   * Certificacao findFirst
   */
  export type CertificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Certificacao to fetch.
     */
    where?: CertificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificacaos to fetch.
     */
    orderBy?: CertificacaoOrderByWithRelationInput | CertificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificacaos.
     */
    cursor?: CertificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificacaos.
     */
    distinct?: CertificacaoScalarFieldEnum | CertificacaoScalarFieldEnum[]
  }

  /**
   * Certificacao findFirstOrThrow
   */
  export type CertificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Certificacao to fetch.
     */
    where?: CertificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificacaos to fetch.
     */
    orderBy?: CertificacaoOrderByWithRelationInput | CertificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificacaos.
     */
    cursor?: CertificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificacaos.
     */
    distinct?: CertificacaoScalarFieldEnum | CertificacaoScalarFieldEnum[]
  }

  /**
   * Certificacao findMany
   */
  export type CertificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Certificacaos to fetch.
     */
    where?: CertificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificacaos to fetch.
     */
    orderBy?: CertificacaoOrderByWithRelationInput | CertificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificacaos.
     */
    cursor?: CertificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificacaos.
     */
    skip?: number
    distinct?: CertificacaoScalarFieldEnum | CertificacaoScalarFieldEnum[]
  }

  /**
   * Certificacao create
   */
  export type CertificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificacao.
     */
    data: XOR<CertificacaoCreateInput, CertificacaoUncheckedCreateInput>
  }

  /**
   * Certificacao createMany
   */
  export type CertificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificacaos.
     */
    data: CertificacaoCreateManyInput | CertificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificacao createManyAndReturn
   */
  export type CertificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Certificacaos.
     */
    data: CertificacaoCreateManyInput | CertificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificacao update
   */
  export type CertificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificacao.
     */
    data: XOR<CertificacaoUpdateInput, CertificacaoUncheckedUpdateInput>
    /**
     * Choose, which Certificacao to update.
     */
    where: CertificacaoWhereUniqueInput
  }

  /**
   * Certificacao updateMany
   */
  export type CertificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificacaos.
     */
    data: XOR<CertificacaoUpdateManyMutationInput, CertificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Certificacaos to update
     */
    where?: CertificacaoWhereInput
    /**
     * Limit how many Certificacaos to update.
     */
    limit?: number
  }

  /**
   * Certificacao updateManyAndReturn
   */
  export type CertificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Certificacaos.
     */
    data: XOR<CertificacaoUpdateManyMutationInput, CertificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Certificacaos to update
     */
    where?: CertificacaoWhereInput
    /**
     * Limit how many Certificacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificacao upsert
   */
  export type CertificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificacao to update in case it exists.
     */
    where: CertificacaoWhereUniqueInput
    /**
     * In case the Certificacao found by the `where` argument doesn't exist, create a new Certificacao with this data.
     */
    create: XOR<CertificacaoCreateInput, CertificacaoUncheckedCreateInput>
    /**
     * In case the Certificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificacaoUpdateInput, CertificacaoUncheckedUpdateInput>
  }

  /**
   * Certificacao delete
   */
  export type CertificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
    /**
     * Filter which Certificacao to delete.
     */
    where: CertificacaoWhereUniqueInput
  }

  /**
   * Certificacao deleteMany
   */
  export type CertificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificacaos to delete
     */
    where?: CertificacaoWhereInput
    /**
     * Limit how many Certificacaos to delete.
     */
    limit?: number
  }

  /**
   * Certificacao without action
   */
  export type CertificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificacao
     */
    select?: CertificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificacao
     */
    omit?: CertificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificacaoInclude<ExtArgs> | null
  }


  /**
   * Model Epi
   */

  export type AggregateEpi = {
    _count: EpiCountAggregateOutputType | null
    _avg: EpiAvgAggregateOutputType | null
    _sum: EpiSumAggregateOutputType | null
    _min: EpiMinAggregateOutputType | null
    _max: EpiMaxAggregateOutputType | null
  }

  export type EpiAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type EpiSumAggregateOutputType = {
    quantidade: number | null
  }

  export type EpiMinAggregateOutputType = {
    id: string | null
    item: string | null
    retiradoEm: Date | null
    devolvido: boolean | null
    quantidade: number | null
    userId: string | null
  }

  export type EpiMaxAggregateOutputType = {
    id: string | null
    item: string | null
    retiradoEm: Date | null
    devolvido: boolean | null
    quantidade: number | null
    userId: string | null
  }

  export type EpiCountAggregateOutputType = {
    id: number
    item: number
    retiradoEm: number
    devolvido: number
    quantidade: number
    userId: number
    _all: number
  }


  export type EpiAvgAggregateInputType = {
    quantidade?: true
  }

  export type EpiSumAggregateInputType = {
    quantidade?: true
  }

  export type EpiMinAggregateInputType = {
    id?: true
    item?: true
    retiradoEm?: true
    devolvido?: true
    quantidade?: true
    userId?: true
  }

  export type EpiMaxAggregateInputType = {
    id?: true
    item?: true
    retiradoEm?: true
    devolvido?: true
    quantidade?: true
    userId?: true
  }

  export type EpiCountAggregateInputType = {
    id?: true
    item?: true
    retiradoEm?: true
    devolvido?: true
    quantidade?: true
    userId?: true
    _all?: true
  }

  export type EpiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Epi to aggregate.
     */
    where?: EpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epis to fetch.
     */
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Epis
    **/
    _count?: true | EpiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpiMaxAggregateInputType
  }

  export type GetEpiAggregateType<T extends EpiAggregateArgs> = {
        [P in keyof T & keyof AggregateEpi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpi[P]>
      : GetScalarType<T[P], AggregateEpi[P]>
  }




  export type EpiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiWhereInput
    orderBy?: EpiOrderByWithAggregationInput | EpiOrderByWithAggregationInput[]
    by: EpiScalarFieldEnum[] | EpiScalarFieldEnum
    having?: EpiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpiCountAggregateInputType | true
    _avg?: EpiAvgAggregateInputType
    _sum?: EpiSumAggregateInputType
    _min?: EpiMinAggregateInputType
    _max?: EpiMaxAggregateInputType
  }

  export type EpiGroupByOutputType = {
    id: string
    item: string
    retiradoEm: Date | null
    devolvido: boolean
    quantidade: number
    userId: string
    _count: EpiCountAggregateOutputType | null
    _avg: EpiAvgAggregateOutputType | null
    _sum: EpiSumAggregateOutputType | null
    _min: EpiMinAggregateOutputType | null
    _max: EpiMaxAggregateOutputType | null
  }

  type GetEpiGroupByPayload<T extends EpiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpiGroupByOutputType[P]>
            : GetScalarType<T[P], EpiGroupByOutputType[P]>
        }
      >
    >


  export type EpiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    retiradoEm?: boolean
    devolvido?: boolean
    quantidade?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    retiradoEm?: boolean
    devolvido?: boolean
    quantidade?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    retiradoEm?: boolean
    devolvido?: boolean
    quantidade?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectScalar = {
    id?: boolean
    item?: boolean
    retiradoEm?: boolean
    devolvido?: boolean
    quantidade?: boolean
    userId?: boolean
  }

  export type EpiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "retiradoEm" | "devolvido" | "quantidade" | "userId", ExtArgs["result"]["epi"]>
  export type EpiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EpiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EpiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EpiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Epi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item: string
      retiradoEm: Date | null
      devolvido: boolean
      quantidade: number
      userId: string
    }, ExtArgs["result"]["epi"]>
    composites: {}
  }

  type EpiGetPayload<S extends boolean | null | undefined | EpiDefaultArgs> = $Result.GetResult<Prisma.$EpiPayload, S>

  type EpiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpiCountAggregateInputType | true
    }

  export interface EpiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Epi'], meta: { name: 'Epi' } }
    /**
     * Find zero or one Epi that matches the filter.
     * @param {EpiFindUniqueArgs} args - Arguments to find a Epi
     * @example
     * // Get one Epi
     * const epi = await prisma.epi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpiFindUniqueArgs>(args: SelectSubset<T, EpiFindUniqueArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Epi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpiFindUniqueOrThrowArgs} args - Arguments to find a Epi
     * @example
     * // Get one Epi
     * const epi = await prisma.epi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpiFindUniqueOrThrowArgs>(args: SelectSubset<T, EpiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Epi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiFindFirstArgs} args - Arguments to find a Epi
     * @example
     * // Get one Epi
     * const epi = await prisma.epi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpiFindFirstArgs>(args?: SelectSubset<T, EpiFindFirstArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Epi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiFindFirstOrThrowArgs} args - Arguments to find a Epi
     * @example
     * // Get one Epi
     * const epi = await prisma.epi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpiFindFirstOrThrowArgs>(args?: SelectSubset<T, EpiFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Epis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Epis
     * const epis = await prisma.epi.findMany()
     * 
     * // Get first 10 Epis
     * const epis = await prisma.epi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const epiWithIdOnly = await prisma.epi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpiFindManyArgs>(args?: SelectSubset<T, EpiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Epi.
     * @param {EpiCreateArgs} args - Arguments to create a Epi.
     * @example
     * // Create one Epi
     * const Epi = await prisma.epi.create({
     *   data: {
     *     // ... data to create a Epi
     *   }
     * })
     * 
     */
    create<T extends EpiCreateArgs>(args: SelectSubset<T, EpiCreateArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Epis.
     * @param {EpiCreateManyArgs} args - Arguments to create many Epis.
     * @example
     * // Create many Epis
     * const epi = await prisma.epi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpiCreateManyArgs>(args?: SelectSubset<T, EpiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Epis and returns the data saved in the database.
     * @param {EpiCreateManyAndReturnArgs} args - Arguments to create many Epis.
     * @example
     * // Create many Epis
     * const epi = await prisma.epi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Epis and only return the `id`
     * const epiWithIdOnly = await prisma.epi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpiCreateManyAndReturnArgs>(args?: SelectSubset<T, EpiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Epi.
     * @param {EpiDeleteArgs} args - Arguments to delete one Epi.
     * @example
     * // Delete one Epi
     * const Epi = await prisma.epi.delete({
     *   where: {
     *     // ... filter to delete one Epi
     *   }
     * })
     * 
     */
    delete<T extends EpiDeleteArgs>(args: SelectSubset<T, EpiDeleteArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Epi.
     * @param {EpiUpdateArgs} args - Arguments to update one Epi.
     * @example
     * // Update one Epi
     * const epi = await prisma.epi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpiUpdateArgs>(args: SelectSubset<T, EpiUpdateArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Epis.
     * @param {EpiDeleteManyArgs} args - Arguments to filter Epis to delete.
     * @example
     * // Delete a few Epis
     * const { count } = await prisma.epi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpiDeleteManyArgs>(args?: SelectSubset<T, EpiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Epis
     * const epi = await prisma.epi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpiUpdateManyArgs>(args: SelectSubset<T, EpiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epis and returns the data updated in the database.
     * @param {EpiUpdateManyAndReturnArgs} args - Arguments to update many Epis.
     * @example
     * // Update many Epis
     * const epi = await prisma.epi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Epis and only return the `id`
     * const epiWithIdOnly = await prisma.epi.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpiUpdateManyAndReturnArgs>(args: SelectSubset<T, EpiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Epi.
     * @param {EpiUpsertArgs} args - Arguments to update or create a Epi.
     * @example
     * // Update or create a Epi
     * const epi = await prisma.epi.upsert({
     *   create: {
     *     // ... data to create a Epi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Epi we want to update
     *   }
     * })
     */
    upsert<T extends EpiUpsertArgs>(args: SelectSubset<T, EpiUpsertArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Epis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiCountArgs} args - Arguments to filter Epis to count.
     * @example
     * // Count the number of Epis
     * const count = await prisma.epi.count({
     *   where: {
     *     // ... the filter for the Epis we want to count
     *   }
     * })
    **/
    count<T extends EpiCountArgs>(
      args?: Subset<T, EpiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Epi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpiAggregateArgs>(args: Subset<T, EpiAggregateArgs>): Prisma.PrismaPromise<GetEpiAggregateType<T>>

    /**
     * Group by Epi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiGroupByArgs} args - Group by arguments.
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
      T extends EpiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpiGroupByArgs['orderBy'] }
        : { orderBy?: EpiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Epi model
   */
  readonly fields: EpiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Epi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Epi model
   */
  interface EpiFieldRefs {
    readonly id: FieldRef<"Epi", 'String'>
    readonly item: FieldRef<"Epi", 'String'>
    readonly retiradoEm: FieldRef<"Epi", 'DateTime'>
    readonly devolvido: FieldRef<"Epi", 'Boolean'>
    readonly quantidade: FieldRef<"Epi", 'Int'>
    readonly userId: FieldRef<"Epi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Epi findUnique
   */
  export type EpiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epi to fetch.
     */
    where: EpiWhereUniqueInput
  }

  /**
   * Epi findUniqueOrThrow
   */
  export type EpiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epi to fetch.
     */
    where: EpiWhereUniqueInput
  }

  /**
   * Epi findFirst
   */
  export type EpiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epi to fetch.
     */
    where?: EpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epis to fetch.
     */
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Epis.
     */
    cursor?: EpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Epis.
     */
    distinct?: EpiScalarFieldEnum | EpiScalarFieldEnum[]
  }

  /**
   * Epi findFirstOrThrow
   */
  export type EpiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epi to fetch.
     */
    where?: EpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epis to fetch.
     */
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Epis.
     */
    cursor?: EpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Epis.
     */
    distinct?: EpiScalarFieldEnum | EpiScalarFieldEnum[]
  }

  /**
   * Epi findMany
   */
  export type EpiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epis to fetch.
     */
    where?: EpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epis to fetch.
     */
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Epis.
     */
    cursor?: EpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epis.
     */
    skip?: number
    distinct?: EpiScalarFieldEnum | EpiScalarFieldEnum[]
  }

  /**
   * Epi create
   */
  export type EpiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * The data needed to create a Epi.
     */
    data: XOR<EpiCreateInput, EpiUncheckedCreateInput>
  }

  /**
   * Epi createMany
   */
  export type EpiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Epis.
     */
    data: EpiCreateManyInput | EpiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Epi createManyAndReturn
   */
  export type EpiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * The data used to create many Epis.
     */
    data: EpiCreateManyInput | EpiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Epi update
   */
  export type EpiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * The data needed to update a Epi.
     */
    data: XOR<EpiUpdateInput, EpiUncheckedUpdateInput>
    /**
     * Choose, which Epi to update.
     */
    where: EpiWhereUniqueInput
  }

  /**
   * Epi updateMany
   */
  export type EpiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Epis.
     */
    data: XOR<EpiUpdateManyMutationInput, EpiUncheckedUpdateManyInput>
    /**
     * Filter which Epis to update
     */
    where?: EpiWhereInput
    /**
     * Limit how many Epis to update.
     */
    limit?: number
  }

  /**
   * Epi updateManyAndReturn
   */
  export type EpiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * The data used to update Epis.
     */
    data: XOR<EpiUpdateManyMutationInput, EpiUncheckedUpdateManyInput>
    /**
     * Filter which Epis to update
     */
    where?: EpiWhereInput
    /**
     * Limit how many Epis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Epi upsert
   */
  export type EpiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * The filter to search for the Epi to update in case it exists.
     */
    where: EpiWhereUniqueInput
    /**
     * In case the Epi found by the `where` argument doesn't exist, create a new Epi with this data.
     */
    create: XOR<EpiCreateInput, EpiUncheckedCreateInput>
    /**
     * In case the Epi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpiUpdateInput, EpiUncheckedUpdateInput>
  }

  /**
   * Epi delete
   */
  export type EpiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter which Epi to delete.
     */
    where: EpiWhereUniqueInput
  }

  /**
   * Epi deleteMany
   */
  export type EpiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Epis to delete
     */
    where?: EpiWhereInput
    /**
     * Limit how many Epis to delete.
     */
    limit?: number
  }

  /**
   * Epi without action
   */
  export type EpiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
  }


  /**
   * Model Acidente
   */

  export type AggregateAcidente = {
    _count: AcidenteCountAggregateOutputType | null
    _min: AcidenteMinAggregateOutputType | null
    _max: AcidenteMaxAggregateOutputType | null
  }

  export type AcidenteMinAggregateOutputType = {
    id: string | null
    data: Date | null
    descricao: string | null
    afastamento: boolean | null
    userId: string | null
  }

  export type AcidenteMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    descricao: string | null
    afastamento: boolean | null
    userId: string | null
  }

  export type AcidenteCountAggregateOutputType = {
    id: number
    data: number
    descricao: number
    afastamento: number
    userId: number
    _all: number
  }


  export type AcidenteMinAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    afastamento?: true
    userId?: true
  }

  export type AcidenteMaxAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    afastamento?: true
    userId?: true
  }

  export type AcidenteCountAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    afastamento?: true
    userId?: true
    _all?: true
  }

  export type AcidenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acidente to aggregate.
     */
    where?: AcidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acidentes to fetch.
     */
    orderBy?: AcidenteOrderByWithRelationInput | AcidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Acidentes
    **/
    _count?: true | AcidenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcidenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcidenteMaxAggregateInputType
  }

  export type GetAcidenteAggregateType<T extends AcidenteAggregateArgs> = {
        [P in keyof T & keyof AggregateAcidente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcidente[P]>
      : GetScalarType<T[P], AggregateAcidente[P]>
  }




  export type AcidenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcidenteWhereInput
    orderBy?: AcidenteOrderByWithAggregationInput | AcidenteOrderByWithAggregationInput[]
    by: AcidenteScalarFieldEnum[] | AcidenteScalarFieldEnum
    having?: AcidenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcidenteCountAggregateInputType | true
    _min?: AcidenteMinAggregateInputType
    _max?: AcidenteMaxAggregateInputType
  }

  export type AcidenteGroupByOutputType = {
    id: string
    data: Date
    descricao: string | null
    afastamento: boolean
    userId: string
    _count: AcidenteCountAggregateOutputType | null
    _min: AcidenteMinAggregateOutputType | null
    _max: AcidenteMaxAggregateOutputType | null
  }

  type GetAcidenteGroupByPayload<T extends AcidenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcidenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcidenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcidenteGroupByOutputType[P]>
            : GetScalarType<T[P], AcidenteGroupByOutputType[P]>
        }
      >
    >


  export type AcidenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    afastamento?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acidente"]>

  export type AcidenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    afastamento?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acidente"]>

  export type AcidenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    afastamento?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acidente"]>

  export type AcidenteSelectScalar = {
    id?: boolean
    data?: boolean
    descricao?: boolean
    afastamento?: boolean
    userId?: boolean
  }

  export type AcidenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "descricao" | "afastamento" | "userId", ExtArgs["result"]["acidente"]>
  export type AcidenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AcidenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AcidenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AcidentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Acidente"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      descricao: string | null
      afastamento: boolean
      userId: string
    }, ExtArgs["result"]["acidente"]>
    composites: {}
  }

  type AcidenteGetPayload<S extends boolean | null | undefined | AcidenteDefaultArgs> = $Result.GetResult<Prisma.$AcidentePayload, S>

  type AcidenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcidenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcidenteCountAggregateInputType | true
    }

  export interface AcidenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acidente'], meta: { name: 'Acidente' } }
    /**
     * Find zero or one Acidente that matches the filter.
     * @param {AcidenteFindUniqueArgs} args - Arguments to find a Acidente
     * @example
     * // Get one Acidente
     * const acidente = await prisma.acidente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcidenteFindUniqueArgs>(args: SelectSubset<T, AcidenteFindUniqueArgs<ExtArgs>>): Prisma__AcidenteClient<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acidente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcidenteFindUniqueOrThrowArgs} args - Arguments to find a Acidente
     * @example
     * // Get one Acidente
     * const acidente = await prisma.acidente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcidenteFindUniqueOrThrowArgs>(args: SelectSubset<T, AcidenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcidenteClient<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acidente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcidenteFindFirstArgs} args - Arguments to find a Acidente
     * @example
     * // Get one Acidente
     * const acidente = await prisma.acidente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcidenteFindFirstArgs>(args?: SelectSubset<T, AcidenteFindFirstArgs<ExtArgs>>): Prisma__AcidenteClient<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acidente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcidenteFindFirstOrThrowArgs} args - Arguments to find a Acidente
     * @example
     * // Get one Acidente
     * const acidente = await prisma.acidente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcidenteFindFirstOrThrowArgs>(args?: SelectSubset<T, AcidenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcidenteClient<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Acidentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcidenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acidentes
     * const acidentes = await prisma.acidente.findMany()
     * 
     * // Get first 10 Acidentes
     * const acidentes = await prisma.acidente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acidenteWithIdOnly = await prisma.acidente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcidenteFindManyArgs>(args?: SelectSubset<T, AcidenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acidente.
     * @param {AcidenteCreateArgs} args - Arguments to create a Acidente.
     * @example
     * // Create one Acidente
     * const Acidente = await prisma.acidente.create({
     *   data: {
     *     // ... data to create a Acidente
     *   }
     * })
     * 
     */
    create<T extends AcidenteCreateArgs>(args: SelectSubset<T, AcidenteCreateArgs<ExtArgs>>): Prisma__AcidenteClient<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Acidentes.
     * @param {AcidenteCreateManyArgs} args - Arguments to create many Acidentes.
     * @example
     * // Create many Acidentes
     * const acidente = await prisma.acidente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcidenteCreateManyArgs>(args?: SelectSubset<T, AcidenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Acidentes and returns the data saved in the database.
     * @param {AcidenteCreateManyAndReturnArgs} args - Arguments to create many Acidentes.
     * @example
     * // Create many Acidentes
     * const acidente = await prisma.acidente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Acidentes and only return the `id`
     * const acidenteWithIdOnly = await prisma.acidente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcidenteCreateManyAndReturnArgs>(args?: SelectSubset<T, AcidenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Acidente.
     * @param {AcidenteDeleteArgs} args - Arguments to delete one Acidente.
     * @example
     * // Delete one Acidente
     * const Acidente = await prisma.acidente.delete({
     *   where: {
     *     // ... filter to delete one Acidente
     *   }
     * })
     * 
     */
    delete<T extends AcidenteDeleteArgs>(args: SelectSubset<T, AcidenteDeleteArgs<ExtArgs>>): Prisma__AcidenteClient<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acidente.
     * @param {AcidenteUpdateArgs} args - Arguments to update one Acidente.
     * @example
     * // Update one Acidente
     * const acidente = await prisma.acidente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcidenteUpdateArgs>(args: SelectSubset<T, AcidenteUpdateArgs<ExtArgs>>): Prisma__AcidenteClient<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Acidentes.
     * @param {AcidenteDeleteManyArgs} args - Arguments to filter Acidentes to delete.
     * @example
     * // Delete a few Acidentes
     * const { count } = await prisma.acidente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcidenteDeleteManyArgs>(args?: SelectSubset<T, AcidenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acidentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcidenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acidentes
     * const acidente = await prisma.acidente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcidenteUpdateManyArgs>(args: SelectSubset<T, AcidenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acidentes and returns the data updated in the database.
     * @param {AcidenteUpdateManyAndReturnArgs} args - Arguments to update many Acidentes.
     * @example
     * // Update many Acidentes
     * const acidente = await prisma.acidente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Acidentes and only return the `id`
     * const acidenteWithIdOnly = await prisma.acidente.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcidenteUpdateManyAndReturnArgs>(args: SelectSubset<T, AcidenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Acidente.
     * @param {AcidenteUpsertArgs} args - Arguments to update or create a Acidente.
     * @example
     * // Update or create a Acidente
     * const acidente = await prisma.acidente.upsert({
     *   create: {
     *     // ... data to create a Acidente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acidente we want to update
     *   }
     * })
     */
    upsert<T extends AcidenteUpsertArgs>(args: SelectSubset<T, AcidenteUpsertArgs<ExtArgs>>): Prisma__AcidenteClient<$Result.GetResult<Prisma.$AcidentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Acidentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcidenteCountArgs} args - Arguments to filter Acidentes to count.
     * @example
     * // Count the number of Acidentes
     * const count = await prisma.acidente.count({
     *   where: {
     *     // ... the filter for the Acidentes we want to count
     *   }
     * })
    **/
    count<T extends AcidenteCountArgs>(
      args?: Subset<T, AcidenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcidenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acidente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcidenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcidenteAggregateArgs>(args: Subset<T, AcidenteAggregateArgs>): Prisma.PrismaPromise<GetAcidenteAggregateType<T>>

    /**
     * Group by Acidente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcidenteGroupByArgs} args - Group by arguments.
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
      T extends AcidenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcidenteGroupByArgs['orderBy'] }
        : { orderBy?: AcidenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcidenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcidenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acidente model
   */
  readonly fields: AcidenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acidente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcidenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Acidente model
   */
  interface AcidenteFieldRefs {
    readonly id: FieldRef<"Acidente", 'String'>
    readonly data: FieldRef<"Acidente", 'DateTime'>
    readonly descricao: FieldRef<"Acidente", 'String'>
    readonly afastamento: FieldRef<"Acidente", 'Boolean'>
    readonly userId: FieldRef<"Acidente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Acidente findUnique
   */
  export type AcidenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * Filter, which Acidente to fetch.
     */
    where: AcidenteWhereUniqueInput
  }

  /**
   * Acidente findUniqueOrThrow
   */
  export type AcidenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * Filter, which Acidente to fetch.
     */
    where: AcidenteWhereUniqueInput
  }

  /**
   * Acidente findFirst
   */
  export type AcidenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * Filter, which Acidente to fetch.
     */
    where?: AcidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acidentes to fetch.
     */
    orderBy?: AcidenteOrderByWithRelationInput | AcidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acidentes.
     */
    cursor?: AcidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acidentes.
     */
    distinct?: AcidenteScalarFieldEnum | AcidenteScalarFieldEnum[]
  }

  /**
   * Acidente findFirstOrThrow
   */
  export type AcidenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * Filter, which Acidente to fetch.
     */
    where?: AcidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acidentes to fetch.
     */
    orderBy?: AcidenteOrderByWithRelationInput | AcidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acidentes.
     */
    cursor?: AcidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acidentes.
     */
    distinct?: AcidenteScalarFieldEnum | AcidenteScalarFieldEnum[]
  }

  /**
   * Acidente findMany
   */
  export type AcidenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * Filter, which Acidentes to fetch.
     */
    where?: AcidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acidentes to fetch.
     */
    orderBy?: AcidenteOrderByWithRelationInput | AcidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Acidentes.
     */
    cursor?: AcidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acidentes.
     */
    skip?: number
    distinct?: AcidenteScalarFieldEnum | AcidenteScalarFieldEnum[]
  }

  /**
   * Acidente create
   */
  export type AcidenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Acidente.
     */
    data: XOR<AcidenteCreateInput, AcidenteUncheckedCreateInput>
  }

  /**
   * Acidente createMany
   */
  export type AcidenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acidentes.
     */
    data: AcidenteCreateManyInput | AcidenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acidente createManyAndReturn
   */
  export type AcidenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * The data used to create many Acidentes.
     */
    data: AcidenteCreateManyInput | AcidenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Acidente update
   */
  export type AcidenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Acidente.
     */
    data: XOR<AcidenteUpdateInput, AcidenteUncheckedUpdateInput>
    /**
     * Choose, which Acidente to update.
     */
    where: AcidenteWhereUniqueInput
  }

  /**
   * Acidente updateMany
   */
  export type AcidenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Acidentes.
     */
    data: XOR<AcidenteUpdateManyMutationInput, AcidenteUncheckedUpdateManyInput>
    /**
     * Filter which Acidentes to update
     */
    where?: AcidenteWhereInput
    /**
     * Limit how many Acidentes to update.
     */
    limit?: number
  }

  /**
   * Acidente updateManyAndReturn
   */
  export type AcidenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * The data used to update Acidentes.
     */
    data: XOR<AcidenteUpdateManyMutationInput, AcidenteUncheckedUpdateManyInput>
    /**
     * Filter which Acidentes to update
     */
    where?: AcidenteWhereInput
    /**
     * Limit how many Acidentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Acidente upsert
   */
  export type AcidenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Acidente to update in case it exists.
     */
    where: AcidenteWhereUniqueInput
    /**
     * In case the Acidente found by the `where` argument doesn't exist, create a new Acidente with this data.
     */
    create: XOR<AcidenteCreateInput, AcidenteUncheckedCreateInput>
    /**
     * In case the Acidente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcidenteUpdateInput, AcidenteUncheckedUpdateInput>
  }

  /**
   * Acidente delete
   */
  export type AcidenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
    /**
     * Filter which Acidente to delete.
     */
    where: AcidenteWhereUniqueInput
  }

  /**
   * Acidente deleteMany
   */
  export type AcidenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acidentes to delete
     */
    where?: AcidenteWhereInput
    /**
     * Limit how many Acidentes to delete.
     */
    limit?: number
  }

  /**
   * Acidente without action
   */
  export type AcidenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acidente
     */
    select?: AcidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acidente
     */
    omit?: AcidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcidenteInclude<ExtArgs> | null
  }


  /**
   * Model Atestado
   */

  export type AggregateAtestado = {
    _count: AtestadoCountAggregateOutputType | null
    _min: AtestadoMinAggregateOutputType | null
    _max: AtestadoMaxAggregateOutputType | null
  }

  export type AtestadoMinAggregateOutputType = {
    id: string | null
    inicio: Date | null
    fim: Date | null
    motivo: string | null
    userId: string | null
  }

  export type AtestadoMaxAggregateOutputType = {
    id: string | null
    inicio: Date | null
    fim: Date | null
    motivo: string | null
    userId: string | null
  }

  export type AtestadoCountAggregateOutputType = {
    id: number
    inicio: number
    fim: number
    motivo: number
    userId: number
    _all: number
  }


  export type AtestadoMinAggregateInputType = {
    id?: true
    inicio?: true
    fim?: true
    motivo?: true
    userId?: true
  }

  export type AtestadoMaxAggregateInputType = {
    id?: true
    inicio?: true
    fim?: true
    motivo?: true
    userId?: true
  }

  export type AtestadoCountAggregateInputType = {
    id?: true
    inicio?: true
    fim?: true
    motivo?: true
    userId?: true
    _all?: true
  }

  export type AtestadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atestado to aggregate.
     */
    where?: AtestadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atestados to fetch.
     */
    orderBy?: AtestadoOrderByWithRelationInput | AtestadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtestadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atestados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atestados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atestados
    **/
    _count?: true | AtestadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtestadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtestadoMaxAggregateInputType
  }

  export type GetAtestadoAggregateType<T extends AtestadoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtestado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtestado[P]>
      : GetScalarType<T[P], AggregateAtestado[P]>
  }




  export type AtestadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtestadoWhereInput
    orderBy?: AtestadoOrderByWithAggregationInput | AtestadoOrderByWithAggregationInput[]
    by: AtestadoScalarFieldEnum[] | AtestadoScalarFieldEnum
    having?: AtestadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtestadoCountAggregateInputType | true
    _min?: AtestadoMinAggregateInputType
    _max?: AtestadoMaxAggregateInputType
  }

  export type AtestadoGroupByOutputType = {
    id: string
    inicio: Date
    fim: Date
    motivo: string | null
    userId: string
    _count: AtestadoCountAggregateOutputType | null
    _min: AtestadoMinAggregateOutputType | null
    _max: AtestadoMaxAggregateOutputType | null
  }

  type GetAtestadoGroupByPayload<T extends AtestadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtestadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtestadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtestadoGroupByOutputType[P]>
            : GetScalarType<T[P], AtestadoGroupByOutputType[P]>
        }
      >
    >


  export type AtestadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inicio?: boolean
    fim?: boolean
    motivo?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atestado"]>

  export type AtestadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inicio?: boolean
    fim?: boolean
    motivo?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atestado"]>

  export type AtestadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inicio?: boolean
    fim?: boolean
    motivo?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atestado"]>

  export type AtestadoSelectScalar = {
    id?: boolean
    inicio?: boolean
    fim?: boolean
    motivo?: boolean
    userId?: boolean
  }

  export type AtestadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inicio" | "fim" | "motivo" | "userId", ExtArgs["result"]["atestado"]>
  export type AtestadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AtestadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AtestadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AtestadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atestado"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inicio: Date
      fim: Date
      motivo: string | null
      userId: string
    }, ExtArgs["result"]["atestado"]>
    composites: {}
  }

  type AtestadoGetPayload<S extends boolean | null | undefined | AtestadoDefaultArgs> = $Result.GetResult<Prisma.$AtestadoPayload, S>

  type AtestadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtestadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtestadoCountAggregateInputType | true
    }

  export interface AtestadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atestado'], meta: { name: 'Atestado' } }
    /**
     * Find zero or one Atestado that matches the filter.
     * @param {AtestadoFindUniqueArgs} args - Arguments to find a Atestado
     * @example
     * // Get one Atestado
     * const atestado = await prisma.atestado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtestadoFindUniqueArgs>(args: SelectSubset<T, AtestadoFindUniqueArgs<ExtArgs>>): Prisma__AtestadoClient<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atestado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtestadoFindUniqueOrThrowArgs} args - Arguments to find a Atestado
     * @example
     * // Get one Atestado
     * const atestado = await prisma.atestado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtestadoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtestadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtestadoClient<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atestado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtestadoFindFirstArgs} args - Arguments to find a Atestado
     * @example
     * // Get one Atestado
     * const atestado = await prisma.atestado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtestadoFindFirstArgs>(args?: SelectSubset<T, AtestadoFindFirstArgs<ExtArgs>>): Prisma__AtestadoClient<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atestado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtestadoFindFirstOrThrowArgs} args - Arguments to find a Atestado
     * @example
     * // Get one Atestado
     * const atestado = await prisma.atestado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtestadoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtestadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtestadoClient<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atestados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtestadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atestados
     * const atestados = await prisma.atestado.findMany()
     * 
     * // Get first 10 Atestados
     * const atestados = await prisma.atestado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atestadoWithIdOnly = await prisma.atestado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtestadoFindManyArgs>(args?: SelectSubset<T, AtestadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atestado.
     * @param {AtestadoCreateArgs} args - Arguments to create a Atestado.
     * @example
     * // Create one Atestado
     * const Atestado = await prisma.atestado.create({
     *   data: {
     *     // ... data to create a Atestado
     *   }
     * })
     * 
     */
    create<T extends AtestadoCreateArgs>(args: SelectSubset<T, AtestadoCreateArgs<ExtArgs>>): Prisma__AtestadoClient<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atestados.
     * @param {AtestadoCreateManyArgs} args - Arguments to create many Atestados.
     * @example
     * // Create many Atestados
     * const atestado = await prisma.atestado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtestadoCreateManyArgs>(args?: SelectSubset<T, AtestadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atestados and returns the data saved in the database.
     * @param {AtestadoCreateManyAndReturnArgs} args - Arguments to create many Atestados.
     * @example
     * // Create many Atestados
     * const atestado = await prisma.atestado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atestados and only return the `id`
     * const atestadoWithIdOnly = await prisma.atestado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtestadoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtestadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atestado.
     * @param {AtestadoDeleteArgs} args - Arguments to delete one Atestado.
     * @example
     * // Delete one Atestado
     * const Atestado = await prisma.atestado.delete({
     *   where: {
     *     // ... filter to delete one Atestado
     *   }
     * })
     * 
     */
    delete<T extends AtestadoDeleteArgs>(args: SelectSubset<T, AtestadoDeleteArgs<ExtArgs>>): Prisma__AtestadoClient<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atestado.
     * @param {AtestadoUpdateArgs} args - Arguments to update one Atestado.
     * @example
     * // Update one Atestado
     * const atestado = await prisma.atestado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtestadoUpdateArgs>(args: SelectSubset<T, AtestadoUpdateArgs<ExtArgs>>): Prisma__AtestadoClient<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atestados.
     * @param {AtestadoDeleteManyArgs} args - Arguments to filter Atestados to delete.
     * @example
     * // Delete a few Atestados
     * const { count } = await prisma.atestado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtestadoDeleteManyArgs>(args?: SelectSubset<T, AtestadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atestados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtestadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atestados
     * const atestado = await prisma.atestado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtestadoUpdateManyArgs>(args: SelectSubset<T, AtestadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atestados and returns the data updated in the database.
     * @param {AtestadoUpdateManyAndReturnArgs} args - Arguments to update many Atestados.
     * @example
     * // Update many Atestados
     * const atestado = await prisma.atestado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atestados and only return the `id`
     * const atestadoWithIdOnly = await prisma.atestado.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtestadoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtestadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atestado.
     * @param {AtestadoUpsertArgs} args - Arguments to update or create a Atestado.
     * @example
     * // Update or create a Atestado
     * const atestado = await prisma.atestado.upsert({
     *   create: {
     *     // ... data to create a Atestado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atestado we want to update
     *   }
     * })
     */
    upsert<T extends AtestadoUpsertArgs>(args: SelectSubset<T, AtestadoUpsertArgs<ExtArgs>>): Prisma__AtestadoClient<$Result.GetResult<Prisma.$AtestadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atestados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtestadoCountArgs} args - Arguments to filter Atestados to count.
     * @example
     * // Count the number of Atestados
     * const count = await prisma.atestado.count({
     *   where: {
     *     // ... the filter for the Atestados we want to count
     *   }
     * })
    **/
    count<T extends AtestadoCountArgs>(
      args?: Subset<T, AtestadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtestadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atestado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtestadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtestadoAggregateArgs>(args: Subset<T, AtestadoAggregateArgs>): Prisma.PrismaPromise<GetAtestadoAggregateType<T>>

    /**
     * Group by Atestado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtestadoGroupByArgs} args - Group by arguments.
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
      T extends AtestadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtestadoGroupByArgs['orderBy'] }
        : { orderBy?: AtestadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtestadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtestadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atestado model
   */
  readonly fields: AtestadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atestado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtestadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atestado model
   */
  interface AtestadoFieldRefs {
    readonly id: FieldRef<"Atestado", 'String'>
    readonly inicio: FieldRef<"Atestado", 'DateTime'>
    readonly fim: FieldRef<"Atestado", 'DateTime'>
    readonly motivo: FieldRef<"Atestado", 'String'>
    readonly userId: FieldRef<"Atestado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Atestado findUnique
   */
  export type AtestadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * Filter, which Atestado to fetch.
     */
    where: AtestadoWhereUniqueInput
  }

  /**
   * Atestado findUniqueOrThrow
   */
  export type AtestadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * Filter, which Atestado to fetch.
     */
    where: AtestadoWhereUniqueInput
  }

  /**
   * Atestado findFirst
   */
  export type AtestadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * Filter, which Atestado to fetch.
     */
    where?: AtestadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atestados to fetch.
     */
    orderBy?: AtestadoOrderByWithRelationInput | AtestadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atestados.
     */
    cursor?: AtestadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atestados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atestados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atestados.
     */
    distinct?: AtestadoScalarFieldEnum | AtestadoScalarFieldEnum[]
  }

  /**
   * Atestado findFirstOrThrow
   */
  export type AtestadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * Filter, which Atestado to fetch.
     */
    where?: AtestadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atestados to fetch.
     */
    orderBy?: AtestadoOrderByWithRelationInput | AtestadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atestados.
     */
    cursor?: AtestadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atestados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atestados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atestados.
     */
    distinct?: AtestadoScalarFieldEnum | AtestadoScalarFieldEnum[]
  }

  /**
   * Atestado findMany
   */
  export type AtestadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * Filter, which Atestados to fetch.
     */
    where?: AtestadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atestados to fetch.
     */
    orderBy?: AtestadoOrderByWithRelationInput | AtestadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atestados.
     */
    cursor?: AtestadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atestados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atestados.
     */
    skip?: number
    distinct?: AtestadoScalarFieldEnum | AtestadoScalarFieldEnum[]
  }

  /**
   * Atestado create
   */
  export type AtestadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Atestado.
     */
    data: XOR<AtestadoCreateInput, AtestadoUncheckedCreateInput>
  }

  /**
   * Atestado createMany
   */
  export type AtestadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atestados.
     */
    data: AtestadoCreateManyInput | AtestadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atestado createManyAndReturn
   */
  export type AtestadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * The data used to create many Atestados.
     */
    data: AtestadoCreateManyInput | AtestadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atestado update
   */
  export type AtestadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Atestado.
     */
    data: XOR<AtestadoUpdateInput, AtestadoUncheckedUpdateInput>
    /**
     * Choose, which Atestado to update.
     */
    where: AtestadoWhereUniqueInput
  }

  /**
   * Atestado updateMany
   */
  export type AtestadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atestados.
     */
    data: XOR<AtestadoUpdateManyMutationInput, AtestadoUncheckedUpdateManyInput>
    /**
     * Filter which Atestados to update
     */
    where?: AtestadoWhereInput
    /**
     * Limit how many Atestados to update.
     */
    limit?: number
  }

  /**
   * Atestado updateManyAndReturn
   */
  export type AtestadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * The data used to update Atestados.
     */
    data: XOR<AtestadoUpdateManyMutationInput, AtestadoUncheckedUpdateManyInput>
    /**
     * Filter which Atestados to update
     */
    where?: AtestadoWhereInput
    /**
     * Limit how many Atestados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atestado upsert
   */
  export type AtestadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Atestado to update in case it exists.
     */
    where: AtestadoWhereUniqueInput
    /**
     * In case the Atestado found by the `where` argument doesn't exist, create a new Atestado with this data.
     */
    create: XOR<AtestadoCreateInput, AtestadoUncheckedCreateInput>
    /**
     * In case the Atestado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtestadoUpdateInput, AtestadoUncheckedUpdateInput>
  }

  /**
   * Atestado delete
   */
  export type AtestadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
    /**
     * Filter which Atestado to delete.
     */
    where: AtestadoWhereUniqueInput
  }

  /**
   * Atestado deleteMany
   */
  export type AtestadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atestados to delete
     */
    where?: AtestadoWhereInput
    /**
     * Limit how many Atestados to delete.
     */
    limit?: number
  }

  /**
   * Atestado without action
   */
  export type AtestadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atestado
     */
    select?: AtestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atestado
     */
    omit?: AtestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtestadoInclude<ExtArgs> | null
  }


  /**
   * Model Ferias
   */

  export type AggregateFerias = {
    _count: FeriasCountAggregateOutputType | null
    _min: FeriasMinAggregateOutputType | null
    _max: FeriasMaxAggregateOutputType | null
  }

  export type FeriasMinAggregateOutputType = {
    id: string | null
    periodoAquisitivo: string | null
    proximoPeriodo: string | null
    status: string | null
    userId: string | null
  }

  export type FeriasMaxAggregateOutputType = {
    id: string | null
    periodoAquisitivo: string | null
    proximoPeriodo: string | null
    status: string | null
    userId: string | null
  }

  export type FeriasCountAggregateOutputType = {
    id: number
    periodoAquisitivo: number
    proximoPeriodo: number
    status: number
    userId: number
    _all: number
  }


  export type FeriasMinAggregateInputType = {
    id?: true
    periodoAquisitivo?: true
    proximoPeriodo?: true
    status?: true
    userId?: true
  }

  export type FeriasMaxAggregateInputType = {
    id?: true
    periodoAquisitivo?: true
    proximoPeriodo?: true
    status?: true
    userId?: true
  }

  export type FeriasCountAggregateInputType = {
    id?: true
    periodoAquisitivo?: true
    proximoPeriodo?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type FeriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ferias to aggregate.
     */
    where?: FeriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ferias to fetch.
     */
    orderBy?: FeriasOrderByWithRelationInput | FeriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ferias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ferias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ferias
    **/
    _count?: true | FeriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeriasMaxAggregateInputType
  }

  export type GetFeriasAggregateType<T extends FeriasAggregateArgs> = {
        [P in keyof T & keyof AggregateFerias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFerias[P]>
      : GetScalarType<T[P], AggregateFerias[P]>
  }




  export type FeriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeriasWhereInput
    orderBy?: FeriasOrderByWithAggregationInput | FeriasOrderByWithAggregationInput[]
    by: FeriasScalarFieldEnum[] | FeriasScalarFieldEnum
    having?: FeriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeriasCountAggregateInputType | true
    _min?: FeriasMinAggregateInputType
    _max?: FeriasMaxAggregateInputType
  }

  export type FeriasGroupByOutputType = {
    id: string
    periodoAquisitivo: string
    proximoPeriodo: string | null
    status: string
    userId: string
    _count: FeriasCountAggregateOutputType | null
    _min: FeriasMinAggregateOutputType | null
    _max: FeriasMaxAggregateOutputType | null
  }

  type GetFeriasGroupByPayload<T extends FeriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeriasGroupByOutputType[P]>
            : GetScalarType<T[P], FeriasGroupByOutputType[P]>
        }
      >
    >


  export type FeriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodoAquisitivo?: boolean
    proximoPeriodo?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ferias"]>

  export type FeriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodoAquisitivo?: boolean
    proximoPeriodo?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ferias"]>

  export type FeriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodoAquisitivo?: boolean
    proximoPeriodo?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ferias"]>

  export type FeriasSelectScalar = {
    id?: boolean
    periodoAquisitivo?: boolean
    proximoPeriodo?: boolean
    status?: boolean
    userId?: boolean
  }

  export type FeriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "periodoAquisitivo" | "proximoPeriodo" | "status" | "userId", ExtArgs["result"]["ferias"]>
  export type FeriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ferias"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      periodoAquisitivo: string
      proximoPeriodo: string | null
      status: string
      userId: string
    }, ExtArgs["result"]["ferias"]>
    composites: {}
  }

  type FeriasGetPayload<S extends boolean | null | undefined | FeriasDefaultArgs> = $Result.GetResult<Prisma.$FeriasPayload, S>

  type FeriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeriasCountAggregateInputType | true
    }

  export interface FeriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ferias'], meta: { name: 'Ferias' } }
    /**
     * Find zero or one Ferias that matches the filter.
     * @param {FeriasFindUniqueArgs} args - Arguments to find a Ferias
     * @example
     * // Get one Ferias
     * const ferias = await prisma.ferias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeriasFindUniqueArgs>(args: SelectSubset<T, FeriasFindUniqueArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ferias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeriasFindUniqueOrThrowArgs} args - Arguments to find a Ferias
     * @example
     * // Get one Ferias
     * const ferias = await prisma.ferias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeriasFindUniqueOrThrowArgs>(args: SelectSubset<T, FeriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ferias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriasFindFirstArgs} args - Arguments to find a Ferias
     * @example
     * // Get one Ferias
     * const ferias = await prisma.ferias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeriasFindFirstArgs>(args?: SelectSubset<T, FeriasFindFirstArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ferias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriasFindFirstOrThrowArgs} args - Arguments to find a Ferias
     * @example
     * // Get one Ferias
     * const ferias = await prisma.ferias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeriasFindFirstOrThrowArgs>(args?: SelectSubset<T, FeriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ferias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ferias
     * const ferias = await prisma.ferias.findMany()
     * 
     * // Get first 10 Ferias
     * const ferias = await prisma.ferias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feriasWithIdOnly = await prisma.ferias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeriasFindManyArgs>(args?: SelectSubset<T, FeriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ferias.
     * @param {FeriasCreateArgs} args - Arguments to create a Ferias.
     * @example
     * // Create one Ferias
     * const Ferias = await prisma.ferias.create({
     *   data: {
     *     // ... data to create a Ferias
     *   }
     * })
     * 
     */
    create<T extends FeriasCreateArgs>(args: SelectSubset<T, FeriasCreateArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ferias.
     * @param {FeriasCreateManyArgs} args - Arguments to create many Ferias.
     * @example
     * // Create many Ferias
     * const ferias = await prisma.ferias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeriasCreateManyArgs>(args?: SelectSubset<T, FeriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ferias and returns the data saved in the database.
     * @param {FeriasCreateManyAndReturnArgs} args - Arguments to create many Ferias.
     * @example
     * // Create many Ferias
     * const ferias = await prisma.ferias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ferias and only return the `id`
     * const feriasWithIdOnly = await prisma.ferias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeriasCreateManyAndReturnArgs>(args?: SelectSubset<T, FeriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ferias.
     * @param {FeriasDeleteArgs} args - Arguments to delete one Ferias.
     * @example
     * // Delete one Ferias
     * const Ferias = await prisma.ferias.delete({
     *   where: {
     *     // ... filter to delete one Ferias
     *   }
     * })
     * 
     */
    delete<T extends FeriasDeleteArgs>(args: SelectSubset<T, FeriasDeleteArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ferias.
     * @param {FeriasUpdateArgs} args - Arguments to update one Ferias.
     * @example
     * // Update one Ferias
     * const ferias = await prisma.ferias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeriasUpdateArgs>(args: SelectSubset<T, FeriasUpdateArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ferias.
     * @param {FeriasDeleteManyArgs} args - Arguments to filter Ferias to delete.
     * @example
     * // Delete a few Ferias
     * const { count } = await prisma.ferias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeriasDeleteManyArgs>(args?: SelectSubset<T, FeriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ferias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ferias
     * const ferias = await prisma.ferias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeriasUpdateManyArgs>(args: SelectSubset<T, FeriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ferias and returns the data updated in the database.
     * @param {FeriasUpdateManyAndReturnArgs} args - Arguments to update many Ferias.
     * @example
     * // Update many Ferias
     * const ferias = await prisma.ferias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ferias and only return the `id`
     * const feriasWithIdOnly = await prisma.ferias.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeriasUpdateManyAndReturnArgs>(args: SelectSubset<T, FeriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ferias.
     * @param {FeriasUpsertArgs} args - Arguments to update or create a Ferias.
     * @example
     * // Update or create a Ferias
     * const ferias = await prisma.ferias.upsert({
     *   create: {
     *     // ... data to create a Ferias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ferias we want to update
     *   }
     * })
     */
    upsert<T extends FeriasUpsertArgs>(args: SelectSubset<T, FeriasUpsertArgs<ExtArgs>>): Prisma__FeriasClient<$Result.GetResult<Prisma.$FeriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ferias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriasCountArgs} args - Arguments to filter Ferias to count.
     * @example
     * // Count the number of Ferias
     * const count = await prisma.ferias.count({
     *   where: {
     *     // ... the filter for the Ferias we want to count
     *   }
     * })
    **/
    count<T extends FeriasCountArgs>(
      args?: Subset<T, FeriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ferias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeriasAggregateArgs>(args: Subset<T, FeriasAggregateArgs>): Prisma.PrismaPromise<GetFeriasAggregateType<T>>

    /**
     * Group by Ferias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriasGroupByArgs} args - Group by arguments.
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
      T extends FeriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeriasGroupByArgs['orderBy'] }
        : { orderBy?: FeriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ferias model
   */
  readonly fields: FeriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ferias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ferias model
   */
  interface FeriasFieldRefs {
    readonly id: FieldRef<"Ferias", 'String'>
    readonly periodoAquisitivo: FieldRef<"Ferias", 'String'>
    readonly proximoPeriodo: FieldRef<"Ferias", 'String'>
    readonly status: FieldRef<"Ferias", 'String'>
    readonly userId: FieldRef<"Ferias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ferias findUnique
   */
  export type FeriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * Filter, which Ferias to fetch.
     */
    where: FeriasWhereUniqueInput
  }

  /**
   * Ferias findUniqueOrThrow
   */
  export type FeriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * Filter, which Ferias to fetch.
     */
    where: FeriasWhereUniqueInput
  }

  /**
   * Ferias findFirst
   */
  export type FeriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * Filter, which Ferias to fetch.
     */
    where?: FeriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ferias to fetch.
     */
    orderBy?: FeriasOrderByWithRelationInput | FeriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ferias.
     */
    cursor?: FeriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ferias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ferias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ferias.
     */
    distinct?: FeriasScalarFieldEnum | FeriasScalarFieldEnum[]
  }

  /**
   * Ferias findFirstOrThrow
   */
  export type FeriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * Filter, which Ferias to fetch.
     */
    where?: FeriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ferias to fetch.
     */
    orderBy?: FeriasOrderByWithRelationInput | FeriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ferias.
     */
    cursor?: FeriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ferias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ferias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ferias.
     */
    distinct?: FeriasScalarFieldEnum | FeriasScalarFieldEnum[]
  }

  /**
   * Ferias findMany
   */
  export type FeriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * Filter, which Ferias to fetch.
     */
    where?: FeriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ferias to fetch.
     */
    orderBy?: FeriasOrderByWithRelationInput | FeriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ferias.
     */
    cursor?: FeriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ferias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ferias.
     */
    skip?: number
    distinct?: FeriasScalarFieldEnum | FeriasScalarFieldEnum[]
  }

  /**
   * Ferias create
   */
  export type FeriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * The data needed to create a Ferias.
     */
    data: XOR<FeriasCreateInput, FeriasUncheckedCreateInput>
  }

  /**
   * Ferias createMany
   */
  export type FeriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ferias.
     */
    data: FeriasCreateManyInput | FeriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ferias createManyAndReturn
   */
  export type FeriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * The data used to create many Ferias.
     */
    data: FeriasCreateManyInput | FeriasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ferias update
   */
  export type FeriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * The data needed to update a Ferias.
     */
    data: XOR<FeriasUpdateInput, FeriasUncheckedUpdateInput>
    /**
     * Choose, which Ferias to update.
     */
    where: FeriasWhereUniqueInput
  }

  /**
   * Ferias updateMany
   */
  export type FeriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ferias.
     */
    data: XOR<FeriasUpdateManyMutationInput, FeriasUncheckedUpdateManyInput>
    /**
     * Filter which Ferias to update
     */
    where?: FeriasWhereInput
    /**
     * Limit how many Ferias to update.
     */
    limit?: number
  }

  /**
   * Ferias updateManyAndReturn
   */
  export type FeriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * The data used to update Ferias.
     */
    data: XOR<FeriasUpdateManyMutationInput, FeriasUncheckedUpdateManyInput>
    /**
     * Filter which Ferias to update
     */
    where?: FeriasWhereInput
    /**
     * Limit how many Ferias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ferias upsert
   */
  export type FeriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * The filter to search for the Ferias to update in case it exists.
     */
    where: FeriasWhereUniqueInput
    /**
     * In case the Ferias found by the `where` argument doesn't exist, create a new Ferias with this data.
     */
    create: XOR<FeriasCreateInput, FeriasUncheckedCreateInput>
    /**
     * In case the Ferias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeriasUpdateInput, FeriasUncheckedUpdateInput>
  }

  /**
   * Ferias delete
   */
  export type FeriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
    /**
     * Filter which Ferias to delete.
     */
    where: FeriasWhereUniqueInput
  }

  /**
   * Ferias deleteMany
   */
  export type FeriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ferias to delete
     */
    where?: FeriasWhereInput
    /**
     * Limit how many Ferias to delete.
     */
    limit?: number
  }

  /**
   * Ferias without action
   */
  export type FeriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ferias
     */
    select?: FeriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ferias
     */
    omit?: FeriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriasInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    urlPhoto: 'urlPhoto',
    cpf: 'cpf',
    email: 'email',
    senha: 'senha',
    telefone: 'telefone',
    endereco: 'endereco',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep',
    pais: 'pais',
    complemento: 'complemento',
    nome: 'nome',
    matricula: 'matricula',
    cargo: 'cargo',
    setor: 'setor',
    foto: 'foto',
    turno: 'turno',
    role: 'role',
    areasPermitidas: 'areasPermitidas',
    niveisAcesso: 'niveisAcesso',
    bloqueios: 'bloqueios',
    asoStatus: 'asoStatus',
    asoUltimo: 'asoUltimo',
    asoVencimento: 'asoVencimento',
    asoRestricoes: 'asoRestricoes',
    situacaoGeral: 'situacaoGeral',
    motivoDesligamento: 'motivoDesligamento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TreinamentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    concluidoEm: 'concluidoEm',
    venceEm: 'venceEm',
    status: 'status',
    userId: 'userId'
  };

  export type TreinamentoScalarFieldEnum = (typeof TreinamentoScalarFieldEnum)[keyof typeof TreinamentoScalarFieldEnum]


  export const CertificacaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    emitidaEm: 'emitidaEm',
    venceEm: 'venceEm',
    status: 'status',
    userId: 'userId'
  };

  export type CertificacaoScalarFieldEnum = (typeof CertificacaoScalarFieldEnum)[keyof typeof CertificacaoScalarFieldEnum]


  export const EpiScalarFieldEnum: {
    id: 'id',
    item: 'item',
    retiradoEm: 'retiradoEm',
    devolvido: 'devolvido',
    quantidade: 'quantidade',
    userId: 'userId'
  };

  export type EpiScalarFieldEnum = (typeof EpiScalarFieldEnum)[keyof typeof EpiScalarFieldEnum]


  export const AcidenteScalarFieldEnum: {
    id: 'id',
    data: 'data',
    descricao: 'descricao',
    afastamento: 'afastamento',
    userId: 'userId'
  };

  export type AcidenteScalarFieldEnum = (typeof AcidenteScalarFieldEnum)[keyof typeof AcidenteScalarFieldEnum]


  export const AtestadoScalarFieldEnum: {
    id: 'id',
    inicio: 'inicio',
    fim: 'fim',
    motivo: 'motivo',
    userId: 'userId'
  };

  export type AtestadoScalarFieldEnum = (typeof AtestadoScalarFieldEnum)[keyof typeof AtestadoScalarFieldEnum]


  export const FeriasScalarFieldEnum: {
    id: 'id',
    periodoAquisitivo: 'periodoAquisitivo',
    proximoPeriodo: 'proximoPeriodo',
    status: 'status',
    userId: 'userId'
  };

  export type FeriasScalarFieldEnum = (typeof FeriasScalarFieldEnum)[keyof typeof FeriasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    urlPhoto?: StringNullableFilter<"User"> | string | null
    cpf?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    telefone?: StringNullableFilter<"User"> | string | null
    endereco?: StringNullableFilter<"User"> | string | null
    cidade?: StringNullableFilter<"User"> | string | null
    estado?: StringNullableFilter<"User"> | string | null
    cep?: StringNullableFilter<"User"> | string | null
    pais?: StringNullableFilter<"User"> | string | null
    complemento?: StringNullableFilter<"User"> | string | null
    nome?: StringFilter<"User"> | string
    matricula?: StringFilter<"User"> | string
    cargo?: StringFilter<"User"> | string
    setor?: StringFilter<"User"> | string
    foto?: StringNullableFilter<"User"> | string | null
    turno?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    areasPermitidas?: StringNullableListFilter<"User">
    niveisAcesso?: StringNullableListFilter<"User">
    bloqueios?: StringNullableListFilter<"User">
    asoStatus?: StringFilter<"User"> | string
    asoUltimo?: DateTimeNullableFilter<"User"> | Date | string | null
    asoVencimento?: DateTimeNullableFilter<"User"> | Date | string | null
    asoRestricoes?: StringNullableFilter<"User"> | string | null
    situacaoGeral?: StringFilter<"User"> | string
    motivoDesligamento?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    treinamentos?: TreinamentoListRelationFilter
    certificacoes?: CertificacaoListRelationFilter
    epis?: EpiListRelationFilter
    acidentes?: AcidenteListRelationFilter
    atestados?: AtestadoListRelationFilter
    ferias?: XOR<FeriasNullableScalarRelationFilter, FeriasWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    urlPhoto?: SortOrderInput | SortOrder
    cpf?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    pais?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    cargo?: SortOrder
    setor?: SortOrder
    foto?: SortOrderInput | SortOrder
    turno?: SortOrderInput | SortOrder
    role?: SortOrder
    areasPermitidas?: SortOrder
    niveisAcesso?: SortOrder
    bloqueios?: SortOrder
    asoStatus?: SortOrder
    asoUltimo?: SortOrderInput | SortOrder
    asoVencimento?: SortOrderInput | SortOrder
    asoRestricoes?: SortOrderInput | SortOrder
    situacaoGeral?: SortOrder
    motivoDesligamento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    treinamentos?: TreinamentoOrderByRelationAggregateInput
    certificacoes?: CertificacaoOrderByRelationAggregateInput
    epis?: EpiOrderByRelationAggregateInput
    acidentes?: AcidenteOrderByRelationAggregateInput
    atestados?: AtestadoOrderByRelationAggregateInput
    ferias?: FeriasOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    email?: string
    matricula?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    urlPhoto?: StringNullableFilter<"User"> | string | null
    senha?: StringFilter<"User"> | string
    telefone?: StringNullableFilter<"User"> | string | null
    endereco?: StringNullableFilter<"User"> | string | null
    cidade?: StringNullableFilter<"User"> | string | null
    estado?: StringNullableFilter<"User"> | string | null
    cep?: StringNullableFilter<"User"> | string | null
    pais?: StringNullableFilter<"User"> | string | null
    complemento?: StringNullableFilter<"User"> | string | null
    nome?: StringFilter<"User"> | string
    cargo?: StringFilter<"User"> | string
    setor?: StringFilter<"User"> | string
    foto?: StringNullableFilter<"User"> | string | null
    turno?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    areasPermitidas?: StringNullableListFilter<"User">
    niveisAcesso?: StringNullableListFilter<"User">
    bloqueios?: StringNullableListFilter<"User">
    asoStatus?: StringFilter<"User"> | string
    asoUltimo?: DateTimeNullableFilter<"User"> | Date | string | null
    asoVencimento?: DateTimeNullableFilter<"User"> | Date | string | null
    asoRestricoes?: StringNullableFilter<"User"> | string | null
    situacaoGeral?: StringFilter<"User"> | string
    motivoDesligamento?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    treinamentos?: TreinamentoListRelationFilter
    certificacoes?: CertificacaoListRelationFilter
    epis?: EpiListRelationFilter
    acidentes?: AcidenteListRelationFilter
    atestados?: AtestadoListRelationFilter
    ferias?: XOR<FeriasNullableScalarRelationFilter, FeriasWhereInput> | null
  }, "id" | "cpf" | "email" | "matricula">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    urlPhoto?: SortOrderInput | SortOrder
    cpf?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    pais?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    cargo?: SortOrder
    setor?: SortOrder
    foto?: SortOrderInput | SortOrder
    turno?: SortOrderInput | SortOrder
    role?: SortOrder
    areasPermitidas?: SortOrder
    niveisAcesso?: SortOrder
    bloqueios?: SortOrder
    asoStatus?: SortOrder
    asoUltimo?: SortOrderInput | SortOrder
    asoVencimento?: SortOrderInput | SortOrder
    asoRestricoes?: SortOrderInput | SortOrder
    situacaoGeral?: SortOrder
    motivoDesligamento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    urlPhoto?: StringNullableWithAggregatesFilter<"User"> | string | null
    cpf?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
    telefone?: StringNullableWithAggregatesFilter<"User"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"User"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"User"> | string | null
    estado?: StringNullableWithAggregatesFilter<"User"> | string | null
    cep?: StringNullableWithAggregatesFilter<"User"> | string | null
    pais?: StringNullableWithAggregatesFilter<"User"> | string | null
    complemento?: StringNullableWithAggregatesFilter<"User"> | string | null
    nome?: StringWithAggregatesFilter<"User"> | string
    matricula?: StringWithAggregatesFilter<"User"> | string
    cargo?: StringWithAggregatesFilter<"User"> | string
    setor?: StringWithAggregatesFilter<"User"> | string
    foto?: StringNullableWithAggregatesFilter<"User"> | string | null
    turno?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    areasPermitidas?: StringNullableListFilter<"User">
    niveisAcesso?: StringNullableListFilter<"User">
    bloqueios?: StringNullableListFilter<"User">
    asoStatus?: StringWithAggregatesFilter<"User"> | string
    asoUltimo?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    asoVencimento?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    asoRestricoes?: StringNullableWithAggregatesFilter<"User"> | string | null
    situacaoGeral?: StringWithAggregatesFilter<"User"> | string
    motivoDesligamento?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TreinamentoWhereInput = {
    AND?: TreinamentoWhereInput | TreinamentoWhereInput[]
    OR?: TreinamentoWhereInput[]
    NOT?: TreinamentoWhereInput | TreinamentoWhereInput[]
    id?: StringFilter<"Treinamento"> | string
    nome?: StringFilter<"Treinamento"> | string
    concluidoEm?: DateTimeNullableFilter<"Treinamento"> | Date | string | null
    venceEm?: DateTimeNullableFilter<"Treinamento"> | Date | string | null
    status?: StringFilter<"Treinamento"> | string
    userId?: StringFilter<"Treinamento"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TreinamentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    concluidoEm?: SortOrderInput | SortOrder
    venceEm?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TreinamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreinamentoWhereInput | TreinamentoWhereInput[]
    OR?: TreinamentoWhereInput[]
    NOT?: TreinamentoWhereInput | TreinamentoWhereInput[]
    nome?: StringFilter<"Treinamento"> | string
    concluidoEm?: DateTimeNullableFilter<"Treinamento"> | Date | string | null
    venceEm?: DateTimeNullableFilter<"Treinamento"> | Date | string | null
    status?: StringFilter<"Treinamento"> | string
    userId?: StringFilter<"Treinamento"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TreinamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    concluidoEm?: SortOrderInput | SortOrder
    venceEm?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    _count?: TreinamentoCountOrderByAggregateInput
    _max?: TreinamentoMaxOrderByAggregateInput
    _min?: TreinamentoMinOrderByAggregateInput
  }

  export type TreinamentoScalarWhereWithAggregatesInput = {
    AND?: TreinamentoScalarWhereWithAggregatesInput | TreinamentoScalarWhereWithAggregatesInput[]
    OR?: TreinamentoScalarWhereWithAggregatesInput[]
    NOT?: TreinamentoScalarWhereWithAggregatesInput | TreinamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Treinamento"> | string
    nome?: StringWithAggregatesFilter<"Treinamento"> | string
    concluidoEm?: DateTimeNullableWithAggregatesFilter<"Treinamento"> | Date | string | null
    venceEm?: DateTimeNullableWithAggregatesFilter<"Treinamento"> | Date | string | null
    status?: StringWithAggregatesFilter<"Treinamento"> | string
    userId?: StringWithAggregatesFilter<"Treinamento"> | string
  }

  export type CertificacaoWhereInput = {
    AND?: CertificacaoWhereInput | CertificacaoWhereInput[]
    OR?: CertificacaoWhereInput[]
    NOT?: CertificacaoWhereInput | CertificacaoWhereInput[]
    id?: StringFilter<"Certificacao"> | string
    nome?: StringFilter<"Certificacao"> | string
    emitidaEm?: DateTimeNullableFilter<"Certificacao"> | Date | string | null
    venceEm?: DateTimeNullableFilter<"Certificacao"> | Date | string | null
    status?: StringFilter<"Certificacao"> | string
    userId?: StringFilter<"Certificacao"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CertificacaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    emitidaEm?: SortOrderInput | SortOrder
    venceEm?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CertificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificacaoWhereInput | CertificacaoWhereInput[]
    OR?: CertificacaoWhereInput[]
    NOT?: CertificacaoWhereInput | CertificacaoWhereInput[]
    nome?: StringFilter<"Certificacao"> | string
    emitidaEm?: DateTimeNullableFilter<"Certificacao"> | Date | string | null
    venceEm?: DateTimeNullableFilter<"Certificacao"> | Date | string | null
    status?: StringFilter<"Certificacao"> | string
    userId?: StringFilter<"Certificacao"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CertificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    emitidaEm?: SortOrderInput | SortOrder
    venceEm?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    _count?: CertificacaoCountOrderByAggregateInput
    _max?: CertificacaoMaxOrderByAggregateInput
    _min?: CertificacaoMinOrderByAggregateInput
  }

  export type CertificacaoScalarWhereWithAggregatesInput = {
    AND?: CertificacaoScalarWhereWithAggregatesInput | CertificacaoScalarWhereWithAggregatesInput[]
    OR?: CertificacaoScalarWhereWithAggregatesInput[]
    NOT?: CertificacaoScalarWhereWithAggregatesInput | CertificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificacao"> | string
    nome?: StringWithAggregatesFilter<"Certificacao"> | string
    emitidaEm?: DateTimeNullableWithAggregatesFilter<"Certificacao"> | Date | string | null
    venceEm?: DateTimeNullableWithAggregatesFilter<"Certificacao"> | Date | string | null
    status?: StringWithAggregatesFilter<"Certificacao"> | string
    userId?: StringWithAggregatesFilter<"Certificacao"> | string
  }

  export type EpiWhereInput = {
    AND?: EpiWhereInput | EpiWhereInput[]
    OR?: EpiWhereInput[]
    NOT?: EpiWhereInput | EpiWhereInput[]
    id?: StringFilter<"Epi"> | string
    item?: StringFilter<"Epi"> | string
    retiradoEm?: DateTimeNullableFilter<"Epi"> | Date | string | null
    devolvido?: BoolFilter<"Epi"> | boolean
    quantidade?: IntFilter<"Epi"> | number
    userId?: StringFilter<"Epi"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EpiOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrder
    retiradoEm?: SortOrderInput | SortOrder
    devolvido?: SortOrder
    quantidade?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EpiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EpiWhereInput | EpiWhereInput[]
    OR?: EpiWhereInput[]
    NOT?: EpiWhereInput | EpiWhereInput[]
    item?: StringFilter<"Epi"> | string
    retiradoEm?: DateTimeNullableFilter<"Epi"> | Date | string | null
    devolvido?: BoolFilter<"Epi"> | boolean
    quantidade?: IntFilter<"Epi"> | number
    userId?: StringFilter<"Epi"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EpiOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrder
    retiradoEm?: SortOrderInput | SortOrder
    devolvido?: SortOrder
    quantidade?: SortOrder
    userId?: SortOrder
    _count?: EpiCountOrderByAggregateInput
    _avg?: EpiAvgOrderByAggregateInput
    _max?: EpiMaxOrderByAggregateInput
    _min?: EpiMinOrderByAggregateInput
    _sum?: EpiSumOrderByAggregateInput
  }

  export type EpiScalarWhereWithAggregatesInput = {
    AND?: EpiScalarWhereWithAggregatesInput | EpiScalarWhereWithAggregatesInput[]
    OR?: EpiScalarWhereWithAggregatesInput[]
    NOT?: EpiScalarWhereWithAggregatesInput | EpiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Epi"> | string
    item?: StringWithAggregatesFilter<"Epi"> | string
    retiradoEm?: DateTimeNullableWithAggregatesFilter<"Epi"> | Date | string | null
    devolvido?: BoolWithAggregatesFilter<"Epi"> | boolean
    quantidade?: IntWithAggregatesFilter<"Epi"> | number
    userId?: StringWithAggregatesFilter<"Epi"> | string
  }

  export type AcidenteWhereInput = {
    AND?: AcidenteWhereInput | AcidenteWhereInput[]
    OR?: AcidenteWhereInput[]
    NOT?: AcidenteWhereInput | AcidenteWhereInput[]
    id?: StringFilter<"Acidente"> | string
    data?: DateTimeFilter<"Acidente"> | Date | string
    descricao?: StringNullableFilter<"Acidente"> | string | null
    afastamento?: BoolFilter<"Acidente"> | boolean
    userId?: StringFilter<"Acidente"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AcidenteOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrderInput | SortOrder
    afastamento?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AcidenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcidenteWhereInput | AcidenteWhereInput[]
    OR?: AcidenteWhereInput[]
    NOT?: AcidenteWhereInput | AcidenteWhereInput[]
    data?: DateTimeFilter<"Acidente"> | Date | string
    descricao?: StringNullableFilter<"Acidente"> | string | null
    afastamento?: BoolFilter<"Acidente"> | boolean
    userId?: StringFilter<"Acidente"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AcidenteOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrderInput | SortOrder
    afastamento?: SortOrder
    userId?: SortOrder
    _count?: AcidenteCountOrderByAggregateInput
    _max?: AcidenteMaxOrderByAggregateInput
    _min?: AcidenteMinOrderByAggregateInput
  }

  export type AcidenteScalarWhereWithAggregatesInput = {
    AND?: AcidenteScalarWhereWithAggregatesInput | AcidenteScalarWhereWithAggregatesInput[]
    OR?: AcidenteScalarWhereWithAggregatesInput[]
    NOT?: AcidenteScalarWhereWithAggregatesInput | AcidenteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Acidente"> | string
    data?: DateTimeWithAggregatesFilter<"Acidente"> | Date | string
    descricao?: StringNullableWithAggregatesFilter<"Acidente"> | string | null
    afastamento?: BoolWithAggregatesFilter<"Acidente"> | boolean
    userId?: StringWithAggregatesFilter<"Acidente"> | string
  }

  export type AtestadoWhereInput = {
    AND?: AtestadoWhereInput | AtestadoWhereInput[]
    OR?: AtestadoWhereInput[]
    NOT?: AtestadoWhereInput | AtestadoWhereInput[]
    id?: StringFilter<"Atestado"> | string
    inicio?: DateTimeFilter<"Atestado"> | Date | string
    fim?: DateTimeFilter<"Atestado"> | Date | string
    motivo?: StringNullableFilter<"Atestado"> | string | null
    userId?: StringFilter<"Atestado"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AtestadoOrderByWithRelationInput = {
    id?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    motivo?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AtestadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtestadoWhereInput | AtestadoWhereInput[]
    OR?: AtestadoWhereInput[]
    NOT?: AtestadoWhereInput | AtestadoWhereInput[]
    inicio?: DateTimeFilter<"Atestado"> | Date | string
    fim?: DateTimeFilter<"Atestado"> | Date | string
    motivo?: StringNullableFilter<"Atestado"> | string | null
    userId?: StringFilter<"Atestado"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AtestadoOrderByWithAggregationInput = {
    id?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    motivo?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AtestadoCountOrderByAggregateInput
    _max?: AtestadoMaxOrderByAggregateInput
    _min?: AtestadoMinOrderByAggregateInput
  }

  export type AtestadoScalarWhereWithAggregatesInput = {
    AND?: AtestadoScalarWhereWithAggregatesInput | AtestadoScalarWhereWithAggregatesInput[]
    OR?: AtestadoScalarWhereWithAggregatesInput[]
    NOT?: AtestadoScalarWhereWithAggregatesInput | AtestadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atestado"> | string
    inicio?: DateTimeWithAggregatesFilter<"Atestado"> | Date | string
    fim?: DateTimeWithAggregatesFilter<"Atestado"> | Date | string
    motivo?: StringNullableWithAggregatesFilter<"Atestado"> | string | null
    userId?: StringWithAggregatesFilter<"Atestado"> | string
  }

  export type FeriasWhereInput = {
    AND?: FeriasWhereInput | FeriasWhereInput[]
    OR?: FeriasWhereInput[]
    NOT?: FeriasWhereInput | FeriasWhereInput[]
    id?: StringFilter<"Ferias"> | string
    periodoAquisitivo?: StringFilter<"Ferias"> | string
    proximoPeriodo?: StringNullableFilter<"Ferias"> | string | null
    status?: StringFilter<"Ferias"> | string
    userId?: StringFilter<"Ferias"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeriasOrderByWithRelationInput = {
    id?: SortOrder
    periodoAquisitivo?: SortOrder
    proximoPeriodo?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FeriasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FeriasWhereInput | FeriasWhereInput[]
    OR?: FeriasWhereInput[]
    NOT?: FeriasWhereInput | FeriasWhereInput[]
    periodoAquisitivo?: StringFilter<"Ferias"> | string
    proximoPeriodo?: StringNullableFilter<"Ferias"> | string | null
    status?: StringFilter<"Ferias"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type FeriasOrderByWithAggregationInput = {
    id?: SortOrder
    periodoAquisitivo?: SortOrder
    proximoPeriodo?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    _count?: FeriasCountOrderByAggregateInput
    _max?: FeriasMaxOrderByAggregateInput
    _min?: FeriasMinOrderByAggregateInput
  }

  export type FeriasScalarWhereWithAggregatesInput = {
    AND?: FeriasScalarWhereWithAggregatesInput | FeriasScalarWhereWithAggregatesInput[]
    OR?: FeriasScalarWhereWithAggregatesInput[]
    NOT?: FeriasScalarWhereWithAggregatesInput | FeriasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ferias"> | string
    periodoAquisitivo?: StringWithAggregatesFilter<"Ferias"> | string
    proximoPeriodo?: StringNullableWithAggregatesFilter<"Ferias"> | string | null
    status?: StringWithAggregatesFilter<"Ferias"> | string
    userId?: StringWithAggregatesFilter<"Ferias"> | string
  }

  export type UserCreateInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoCreateNestedManyWithoutUserInput
    epis?: EpiCreateNestedManyWithoutUserInput
    acidentes?: AcidenteCreateNestedManyWithoutUserInput
    atestados?: AtestadoCreateNestedManyWithoutUserInput
    ferias?: FeriasCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoUncheckedCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoUncheckedCreateNestedManyWithoutUserInput
    epis?: EpiUncheckedCreateNestedManyWithoutUserInput
    acidentes?: AcidenteUncheckedCreateNestedManyWithoutUserInput
    atestados?: AtestadoUncheckedCreateNestedManyWithoutUserInput
    ferias?: FeriasUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUpdateManyWithoutUserNestedInput
    epis?: EpiUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUpdateManyWithoutUserNestedInput
    ferias?: FeriasUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUncheckedUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUncheckedUpdateManyWithoutUserNestedInput
    epis?: EpiUncheckedUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUncheckedUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUncheckedUpdateManyWithoutUserNestedInput
    ferias?: FeriasUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreinamentoCreateInput = {
    id?: string
    nome: string
    concluidoEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
    user: UserCreateNestedOneWithoutTreinamentosInput
  }

  export type TreinamentoUncheckedCreateInput = {
    id?: string
    nome: string
    concluidoEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
    userId: string
  }

  export type TreinamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    concluidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTreinamentosNestedInput
  }

  export type TreinamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    concluidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TreinamentoCreateManyInput = {
    id?: string
    nome: string
    concluidoEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
    userId: string
  }

  export type TreinamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    concluidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TreinamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    concluidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificacaoCreateInput = {
    id?: string
    nome: string
    emitidaEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
    user: UserCreateNestedOneWithoutCertificacoesInput
  }

  export type CertificacaoUncheckedCreateInput = {
    id?: string
    nome: string
    emitidaEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
    userId: string
  }

  export type CertificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    emitidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCertificacoesNestedInput
  }

  export type CertificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    emitidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificacaoCreateManyInput = {
    id?: string
    nome: string
    emitidaEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
    userId: string
  }

  export type CertificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    emitidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CertificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    emitidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EpiCreateInput = {
    id?: string
    item: string
    retiradoEm?: Date | string | null
    devolvido?: boolean
    quantidade?: number
    user: UserCreateNestedOneWithoutEpisInput
  }

  export type EpiUncheckedCreateInput = {
    id?: string
    item: string
    retiradoEm?: Date | string | null
    devolvido?: boolean
    quantidade?: number
    userId: string
  }

  export type EpiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    retiradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutEpisNestedInput
  }

  export type EpiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    retiradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EpiCreateManyInput = {
    id?: string
    item: string
    retiradoEm?: Date | string | null
    devolvido?: boolean
    quantidade?: number
    userId: string
  }

  export type EpiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    retiradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type EpiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    retiradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AcidenteCreateInput = {
    id?: string
    data: Date | string
    descricao?: string | null
    afastamento?: boolean
    user: UserCreateNestedOneWithoutAcidentesInput
  }

  export type AcidenteUncheckedCreateInput = {
    id?: string
    data: Date | string
    descricao?: string | null
    afastamento?: boolean
    userId: string
  }

  export type AcidenteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    afastamento?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAcidentesNestedInput
  }

  export type AcidenteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    afastamento?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AcidenteCreateManyInput = {
    id?: string
    data: Date | string
    descricao?: string | null
    afastamento?: boolean
    userId: string
  }

  export type AcidenteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    afastamento?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AcidenteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    afastamento?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AtestadoCreateInput = {
    id?: string
    inicio: Date | string
    fim: Date | string
    motivo?: string | null
    user: UserCreateNestedOneWithoutAtestadosInput
  }

  export type AtestadoUncheckedCreateInput = {
    id?: string
    inicio: Date | string
    fim: Date | string
    motivo?: string | null
    userId: string
  }

  export type AtestadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAtestadosNestedInput
  }

  export type AtestadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AtestadoCreateManyInput = {
    id?: string
    inicio: Date | string
    fim: Date | string
    motivo?: string | null
    userId: string
  }

  export type AtestadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtestadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FeriasCreateInput = {
    id?: string
    periodoAquisitivo: string
    proximoPeriodo?: string | null
    status: string
    user: UserCreateNestedOneWithoutFeriasInput
  }

  export type FeriasUncheckedCreateInput = {
    id?: string
    periodoAquisitivo: string
    proximoPeriodo?: string | null
    status: string
    userId: string
  }

  export type FeriasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodoAquisitivo?: StringFieldUpdateOperationsInput | string
    proximoPeriodo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFeriasNestedInput
  }

  export type FeriasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodoAquisitivo?: StringFieldUpdateOperationsInput | string
    proximoPeriodo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FeriasCreateManyInput = {
    id?: string
    periodoAquisitivo: string
    proximoPeriodo?: string | null
    status: string
    userId: string
  }

  export type FeriasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodoAquisitivo?: StringFieldUpdateOperationsInput | string
    proximoPeriodo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FeriasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodoAquisitivo?: StringFieldUpdateOperationsInput | string
    proximoPeriodo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type TreinamentoListRelationFilter = {
    every?: TreinamentoWhereInput
    some?: TreinamentoWhereInput
    none?: TreinamentoWhereInput
  }

  export type CertificacaoListRelationFilter = {
    every?: CertificacaoWhereInput
    some?: CertificacaoWhereInput
    none?: CertificacaoWhereInput
  }

  export type EpiListRelationFilter = {
    every?: EpiWhereInput
    some?: EpiWhereInput
    none?: EpiWhereInput
  }

  export type AcidenteListRelationFilter = {
    every?: AcidenteWhereInput
    some?: AcidenteWhereInput
    none?: AcidenteWhereInput
  }

  export type AtestadoListRelationFilter = {
    every?: AtestadoWhereInput
    some?: AtestadoWhereInput
    none?: AtestadoWhereInput
  }

  export type FeriasNullableScalarRelationFilter = {
    is?: FeriasWhereInput | null
    isNot?: FeriasWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TreinamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcidenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtestadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    urlPhoto?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    pais?: SortOrder
    complemento?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    cargo?: SortOrder
    setor?: SortOrder
    foto?: SortOrder
    turno?: SortOrder
    role?: SortOrder
    areasPermitidas?: SortOrder
    niveisAcesso?: SortOrder
    bloqueios?: SortOrder
    asoStatus?: SortOrder
    asoUltimo?: SortOrder
    asoVencimento?: SortOrder
    asoRestricoes?: SortOrder
    situacaoGeral?: SortOrder
    motivoDesligamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    urlPhoto?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    pais?: SortOrder
    complemento?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    cargo?: SortOrder
    setor?: SortOrder
    foto?: SortOrder
    turno?: SortOrder
    role?: SortOrder
    asoStatus?: SortOrder
    asoUltimo?: SortOrder
    asoVencimento?: SortOrder
    asoRestricoes?: SortOrder
    situacaoGeral?: SortOrder
    motivoDesligamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    urlPhoto?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    pais?: SortOrder
    complemento?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    cargo?: SortOrder
    setor?: SortOrder
    foto?: SortOrder
    turno?: SortOrder
    role?: SortOrder
    asoStatus?: SortOrder
    asoUltimo?: SortOrder
    asoVencimento?: SortOrder
    asoRestricoes?: SortOrder
    situacaoGeral?: SortOrder
    motivoDesligamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TreinamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    concluidoEm?: SortOrder
    venceEm?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type TreinamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    concluidoEm?: SortOrder
    venceEm?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type TreinamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    concluidoEm?: SortOrder
    venceEm?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type CertificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    emitidaEm?: SortOrder
    venceEm?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type CertificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    emitidaEm?: SortOrder
    venceEm?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type CertificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    emitidaEm?: SortOrder
    venceEm?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EpiCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    retiradoEm?: SortOrder
    devolvido?: SortOrder
    quantidade?: SortOrder
    userId?: SortOrder
  }

  export type EpiAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type EpiMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    retiradoEm?: SortOrder
    devolvido?: SortOrder
    quantidade?: SortOrder
    userId?: SortOrder
  }

  export type EpiMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    retiradoEm?: SortOrder
    devolvido?: SortOrder
    quantidade?: SortOrder
    userId?: SortOrder
  }

  export type EpiSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AcidenteCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    afastamento?: SortOrder
    userId?: SortOrder
  }

  export type AcidenteMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    afastamento?: SortOrder
    userId?: SortOrder
  }

  export type AcidenteMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    afastamento?: SortOrder
    userId?: SortOrder
  }

  export type AtestadoCountOrderByAggregateInput = {
    id?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    motivo?: SortOrder
    userId?: SortOrder
  }

  export type AtestadoMaxOrderByAggregateInput = {
    id?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    motivo?: SortOrder
    userId?: SortOrder
  }

  export type AtestadoMinOrderByAggregateInput = {
    id?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    motivo?: SortOrder
    userId?: SortOrder
  }

  export type FeriasCountOrderByAggregateInput = {
    id?: SortOrder
    periodoAquisitivo?: SortOrder
    proximoPeriodo?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type FeriasMaxOrderByAggregateInput = {
    id?: SortOrder
    periodoAquisitivo?: SortOrder
    proximoPeriodo?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type FeriasMinOrderByAggregateInput = {
    id?: SortOrder
    periodoAquisitivo?: SortOrder
    proximoPeriodo?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateareasPermitidasInput = {
    set: string[]
  }

  export type UserCreateniveisAcessoInput = {
    set: string[]
  }

  export type UserCreatebloqueiosInput = {
    set: string[]
  }

  export type TreinamentoCreateNestedManyWithoutUserInput = {
    create?: XOR<TreinamentoCreateWithoutUserInput, TreinamentoUncheckedCreateWithoutUserInput> | TreinamentoCreateWithoutUserInput[] | TreinamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreinamentoCreateOrConnectWithoutUserInput | TreinamentoCreateOrConnectWithoutUserInput[]
    createMany?: TreinamentoCreateManyUserInputEnvelope
    connect?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
  }

  export type CertificacaoCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificacaoCreateWithoutUserInput, CertificacaoUncheckedCreateWithoutUserInput> | CertificacaoCreateWithoutUserInput[] | CertificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificacaoCreateOrConnectWithoutUserInput | CertificacaoCreateOrConnectWithoutUserInput[]
    createMany?: CertificacaoCreateManyUserInputEnvelope
    connect?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
  }

  export type EpiCreateNestedManyWithoutUserInput = {
    create?: XOR<EpiCreateWithoutUserInput, EpiUncheckedCreateWithoutUserInput> | EpiCreateWithoutUserInput[] | EpiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpiCreateOrConnectWithoutUserInput | EpiCreateOrConnectWithoutUserInput[]
    createMany?: EpiCreateManyUserInputEnvelope
    connect?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
  }

  export type AcidenteCreateNestedManyWithoutUserInput = {
    create?: XOR<AcidenteCreateWithoutUserInput, AcidenteUncheckedCreateWithoutUserInput> | AcidenteCreateWithoutUserInput[] | AcidenteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcidenteCreateOrConnectWithoutUserInput | AcidenteCreateOrConnectWithoutUserInput[]
    createMany?: AcidenteCreateManyUserInputEnvelope
    connect?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
  }

  export type AtestadoCreateNestedManyWithoutUserInput = {
    create?: XOR<AtestadoCreateWithoutUserInput, AtestadoUncheckedCreateWithoutUserInput> | AtestadoCreateWithoutUserInput[] | AtestadoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AtestadoCreateOrConnectWithoutUserInput | AtestadoCreateOrConnectWithoutUserInput[]
    createMany?: AtestadoCreateManyUserInputEnvelope
    connect?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
  }

  export type FeriasCreateNestedOneWithoutUserInput = {
    create?: XOR<FeriasCreateWithoutUserInput, FeriasUncheckedCreateWithoutUserInput>
    connectOrCreate?: FeriasCreateOrConnectWithoutUserInput
    connect?: FeriasWhereUniqueInput
  }

  export type TreinamentoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TreinamentoCreateWithoutUserInput, TreinamentoUncheckedCreateWithoutUserInput> | TreinamentoCreateWithoutUserInput[] | TreinamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreinamentoCreateOrConnectWithoutUserInput | TreinamentoCreateOrConnectWithoutUserInput[]
    createMany?: TreinamentoCreateManyUserInputEnvelope
    connect?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
  }

  export type CertificacaoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificacaoCreateWithoutUserInput, CertificacaoUncheckedCreateWithoutUserInput> | CertificacaoCreateWithoutUserInput[] | CertificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificacaoCreateOrConnectWithoutUserInput | CertificacaoCreateOrConnectWithoutUserInput[]
    createMany?: CertificacaoCreateManyUserInputEnvelope
    connect?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
  }

  export type EpiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EpiCreateWithoutUserInput, EpiUncheckedCreateWithoutUserInput> | EpiCreateWithoutUserInput[] | EpiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpiCreateOrConnectWithoutUserInput | EpiCreateOrConnectWithoutUserInput[]
    createMany?: EpiCreateManyUserInputEnvelope
    connect?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
  }

  export type AcidenteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AcidenteCreateWithoutUserInput, AcidenteUncheckedCreateWithoutUserInput> | AcidenteCreateWithoutUserInput[] | AcidenteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcidenteCreateOrConnectWithoutUserInput | AcidenteCreateOrConnectWithoutUserInput[]
    createMany?: AcidenteCreateManyUserInputEnvelope
    connect?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
  }

  export type AtestadoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AtestadoCreateWithoutUserInput, AtestadoUncheckedCreateWithoutUserInput> | AtestadoCreateWithoutUserInput[] | AtestadoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AtestadoCreateOrConnectWithoutUserInput | AtestadoCreateOrConnectWithoutUserInput[]
    createMany?: AtestadoCreateManyUserInputEnvelope
    connect?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
  }

  export type FeriasUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FeriasCreateWithoutUserInput, FeriasUncheckedCreateWithoutUserInput>
    connectOrCreate?: FeriasCreateOrConnectWithoutUserInput
    connect?: FeriasWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateareasPermitidasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateniveisAcessoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatebloqueiosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TreinamentoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreinamentoCreateWithoutUserInput, TreinamentoUncheckedCreateWithoutUserInput> | TreinamentoCreateWithoutUserInput[] | TreinamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreinamentoCreateOrConnectWithoutUserInput | TreinamentoCreateOrConnectWithoutUserInput[]
    upsert?: TreinamentoUpsertWithWhereUniqueWithoutUserInput | TreinamentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreinamentoCreateManyUserInputEnvelope
    set?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
    disconnect?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
    delete?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
    connect?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
    update?: TreinamentoUpdateWithWhereUniqueWithoutUserInput | TreinamentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreinamentoUpdateManyWithWhereWithoutUserInput | TreinamentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreinamentoScalarWhereInput | TreinamentoScalarWhereInput[]
  }

  export type CertificacaoUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificacaoCreateWithoutUserInput, CertificacaoUncheckedCreateWithoutUserInput> | CertificacaoCreateWithoutUserInput[] | CertificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificacaoCreateOrConnectWithoutUserInput | CertificacaoCreateOrConnectWithoutUserInput[]
    upsert?: CertificacaoUpsertWithWhereUniqueWithoutUserInput | CertificacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificacaoCreateManyUserInputEnvelope
    set?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
    disconnect?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
    delete?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
    connect?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
    update?: CertificacaoUpdateWithWhereUniqueWithoutUserInput | CertificacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificacaoUpdateManyWithWhereWithoutUserInput | CertificacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificacaoScalarWhereInput | CertificacaoScalarWhereInput[]
  }

  export type EpiUpdateManyWithoutUserNestedInput = {
    create?: XOR<EpiCreateWithoutUserInput, EpiUncheckedCreateWithoutUserInput> | EpiCreateWithoutUserInput[] | EpiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpiCreateOrConnectWithoutUserInput | EpiCreateOrConnectWithoutUserInput[]
    upsert?: EpiUpsertWithWhereUniqueWithoutUserInput | EpiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EpiCreateManyUserInputEnvelope
    set?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
    disconnect?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
    delete?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
    connect?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
    update?: EpiUpdateWithWhereUniqueWithoutUserInput | EpiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EpiUpdateManyWithWhereWithoutUserInput | EpiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EpiScalarWhereInput | EpiScalarWhereInput[]
  }

  export type AcidenteUpdateManyWithoutUserNestedInput = {
    create?: XOR<AcidenteCreateWithoutUserInput, AcidenteUncheckedCreateWithoutUserInput> | AcidenteCreateWithoutUserInput[] | AcidenteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcidenteCreateOrConnectWithoutUserInput | AcidenteCreateOrConnectWithoutUserInput[]
    upsert?: AcidenteUpsertWithWhereUniqueWithoutUserInput | AcidenteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AcidenteCreateManyUserInputEnvelope
    set?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
    disconnect?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
    delete?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
    connect?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
    update?: AcidenteUpdateWithWhereUniqueWithoutUserInput | AcidenteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AcidenteUpdateManyWithWhereWithoutUserInput | AcidenteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AcidenteScalarWhereInput | AcidenteScalarWhereInput[]
  }

  export type AtestadoUpdateManyWithoutUserNestedInput = {
    create?: XOR<AtestadoCreateWithoutUserInput, AtestadoUncheckedCreateWithoutUserInput> | AtestadoCreateWithoutUserInput[] | AtestadoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AtestadoCreateOrConnectWithoutUserInput | AtestadoCreateOrConnectWithoutUserInput[]
    upsert?: AtestadoUpsertWithWhereUniqueWithoutUserInput | AtestadoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AtestadoCreateManyUserInputEnvelope
    set?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
    disconnect?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
    delete?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
    connect?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
    update?: AtestadoUpdateWithWhereUniqueWithoutUserInput | AtestadoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AtestadoUpdateManyWithWhereWithoutUserInput | AtestadoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AtestadoScalarWhereInput | AtestadoScalarWhereInput[]
  }

  export type FeriasUpdateOneWithoutUserNestedInput = {
    create?: XOR<FeriasCreateWithoutUserInput, FeriasUncheckedCreateWithoutUserInput>
    connectOrCreate?: FeriasCreateOrConnectWithoutUserInput
    upsert?: FeriasUpsertWithoutUserInput
    disconnect?: FeriasWhereInput | boolean
    delete?: FeriasWhereInput | boolean
    connect?: FeriasWhereUniqueInput
    update?: XOR<XOR<FeriasUpdateToOneWithWhereWithoutUserInput, FeriasUpdateWithoutUserInput>, FeriasUncheckedUpdateWithoutUserInput>
  }

  export type TreinamentoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreinamentoCreateWithoutUserInput, TreinamentoUncheckedCreateWithoutUserInput> | TreinamentoCreateWithoutUserInput[] | TreinamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreinamentoCreateOrConnectWithoutUserInput | TreinamentoCreateOrConnectWithoutUserInput[]
    upsert?: TreinamentoUpsertWithWhereUniqueWithoutUserInput | TreinamentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreinamentoCreateManyUserInputEnvelope
    set?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
    disconnect?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
    delete?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
    connect?: TreinamentoWhereUniqueInput | TreinamentoWhereUniqueInput[]
    update?: TreinamentoUpdateWithWhereUniqueWithoutUserInput | TreinamentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreinamentoUpdateManyWithWhereWithoutUserInput | TreinamentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreinamentoScalarWhereInput | TreinamentoScalarWhereInput[]
  }

  export type CertificacaoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificacaoCreateWithoutUserInput, CertificacaoUncheckedCreateWithoutUserInput> | CertificacaoCreateWithoutUserInput[] | CertificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificacaoCreateOrConnectWithoutUserInput | CertificacaoCreateOrConnectWithoutUserInput[]
    upsert?: CertificacaoUpsertWithWhereUniqueWithoutUserInput | CertificacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificacaoCreateManyUserInputEnvelope
    set?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
    disconnect?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
    delete?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
    connect?: CertificacaoWhereUniqueInput | CertificacaoWhereUniqueInput[]
    update?: CertificacaoUpdateWithWhereUniqueWithoutUserInput | CertificacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificacaoUpdateManyWithWhereWithoutUserInput | CertificacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificacaoScalarWhereInput | CertificacaoScalarWhereInput[]
  }

  export type EpiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EpiCreateWithoutUserInput, EpiUncheckedCreateWithoutUserInput> | EpiCreateWithoutUserInput[] | EpiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpiCreateOrConnectWithoutUserInput | EpiCreateOrConnectWithoutUserInput[]
    upsert?: EpiUpsertWithWhereUniqueWithoutUserInput | EpiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EpiCreateManyUserInputEnvelope
    set?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
    disconnect?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
    delete?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
    connect?: EpiWhereUniqueInput | EpiWhereUniqueInput[]
    update?: EpiUpdateWithWhereUniqueWithoutUserInput | EpiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EpiUpdateManyWithWhereWithoutUserInput | EpiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EpiScalarWhereInput | EpiScalarWhereInput[]
  }

  export type AcidenteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AcidenteCreateWithoutUserInput, AcidenteUncheckedCreateWithoutUserInput> | AcidenteCreateWithoutUserInput[] | AcidenteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AcidenteCreateOrConnectWithoutUserInput | AcidenteCreateOrConnectWithoutUserInput[]
    upsert?: AcidenteUpsertWithWhereUniqueWithoutUserInput | AcidenteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AcidenteCreateManyUserInputEnvelope
    set?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
    disconnect?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
    delete?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
    connect?: AcidenteWhereUniqueInput | AcidenteWhereUniqueInput[]
    update?: AcidenteUpdateWithWhereUniqueWithoutUserInput | AcidenteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AcidenteUpdateManyWithWhereWithoutUserInput | AcidenteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AcidenteScalarWhereInput | AcidenteScalarWhereInput[]
  }

  export type AtestadoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AtestadoCreateWithoutUserInput, AtestadoUncheckedCreateWithoutUserInput> | AtestadoCreateWithoutUserInput[] | AtestadoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AtestadoCreateOrConnectWithoutUserInput | AtestadoCreateOrConnectWithoutUserInput[]
    upsert?: AtestadoUpsertWithWhereUniqueWithoutUserInput | AtestadoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AtestadoCreateManyUserInputEnvelope
    set?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
    disconnect?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
    delete?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
    connect?: AtestadoWhereUniqueInput | AtestadoWhereUniqueInput[]
    update?: AtestadoUpdateWithWhereUniqueWithoutUserInput | AtestadoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AtestadoUpdateManyWithWhereWithoutUserInput | AtestadoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AtestadoScalarWhereInput | AtestadoScalarWhereInput[]
  }

  export type FeriasUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FeriasCreateWithoutUserInput, FeriasUncheckedCreateWithoutUserInput>
    connectOrCreate?: FeriasCreateOrConnectWithoutUserInput
    upsert?: FeriasUpsertWithoutUserInput
    disconnect?: FeriasWhereInput | boolean
    delete?: FeriasWhereInput | boolean
    connect?: FeriasWhereUniqueInput
    update?: XOR<XOR<FeriasUpdateToOneWithWhereWithoutUserInput, FeriasUpdateWithoutUserInput>, FeriasUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTreinamentosInput = {
    create?: XOR<UserCreateWithoutTreinamentosInput, UserUncheckedCreateWithoutTreinamentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreinamentosInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTreinamentosNestedInput = {
    create?: XOR<UserCreateWithoutTreinamentosInput, UserUncheckedCreateWithoutTreinamentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreinamentosInput
    upsert?: UserUpsertWithoutTreinamentosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTreinamentosInput, UserUpdateWithoutTreinamentosInput>, UserUncheckedUpdateWithoutTreinamentosInput>
  }

  export type UserCreateNestedOneWithoutCertificacoesInput = {
    create?: XOR<UserCreateWithoutCertificacoesInput, UserUncheckedCreateWithoutCertificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificacoesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificacoesNestedInput = {
    create?: XOR<UserCreateWithoutCertificacoesInput, UserUncheckedCreateWithoutCertificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificacoesInput
    upsert?: UserUpsertWithoutCertificacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificacoesInput, UserUpdateWithoutCertificacoesInput>, UserUncheckedUpdateWithoutCertificacoesInput>
  }

  export type UserCreateNestedOneWithoutEpisInput = {
    create?: XOR<UserCreateWithoutEpisInput, UserUncheckedCreateWithoutEpisInput>
    connectOrCreate?: UserCreateOrConnectWithoutEpisInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEpisNestedInput = {
    create?: XOR<UserCreateWithoutEpisInput, UserUncheckedCreateWithoutEpisInput>
    connectOrCreate?: UserCreateOrConnectWithoutEpisInput
    upsert?: UserUpsertWithoutEpisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEpisInput, UserUpdateWithoutEpisInput>, UserUncheckedUpdateWithoutEpisInput>
  }

  export type UserCreateNestedOneWithoutAcidentesInput = {
    create?: XOR<UserCreateWithoutAcidentesInput, UserUncheckedCreateWithoutAcidentesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcidentesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAcidentesNestedInput = {
    create?: XOR<UserCreateWithoutAcidentesInput, UserUncheckedCreateWithoutAcidentesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcidentesInput
    upsert?: UserUpsertWithoutAcidentesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAcidentesInput, UserUpdateWithoutAcidentesInput>, UserUncheckedUpdateWithoutAcidentesInput>
  }

  export type UserCreateNestedOneWithoutAtestadosInput = {
    create?: XOR<UserCreateWithoutAtestadosInput, UserUncheckedCreateWithoutAtestadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtestadosInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAtestadosNestedInput = {
    create?: XOR<UserCreateWithoutAtestadosInput, UserUncheckedCreateWithoutAtestadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAtestadosInput
    upsert?: UserUpsertWithoutAtestadosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAtestadosInput, UserUpdateWithoutAtestadosInput>, UserUncheckedUpdateWithoutAtestadosInput>
  }

  export type UserCreateNestedOneWithoutFeriasInput = {
    create?: XOR<UserCreateWithoutFeriasInput, UserUncheckedCreateWithoutFeriasInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeriasInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFeriasNestedInput = {
    create?: XOR<UserCreateWithoutFeriasInput, UserUncheckedCreateWithoutFeriasInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeriasInput
    upsert?: UserUpsertWithoutFeriasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeriasInput, UserUpdateWithoutFeriasInput>, UserUncheckedUpdateWithoutFeriasInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TreinamentoCreateWithoutUserInput = {
    id?: string
    nome: string
    concluidoEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
  }

  export type TreinamentoUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    concluidoEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
  }

  export type TreinamentoCreateOrConnectWithoutUserInput = {
    where: TreinamentoWhereUniqueInput
    create: XOR<TreinamentoCreateWithoutUserInput, TreinamentoUncheckedCreateWithoutUserInput>
  }

  export type TreinamentoCreateManyUserInputEnvelope = {
    data: TreinamentoCreateManyUserInput | TreinamentoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificacaoCreateWithoutUserInput = {
    id?: string
    nome: string
    emitidaEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
  }

  export type CertificacaoUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    emitidaEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
  }

  export type CertificacaoCreateOrConnectWithoutUserInput = {
    where: CertificacaoWhereUniqueInput
    create: XOR<CertificacaoCreateWithoutUserInput, CertificacaoUncheckedCreateWithoutUserInput>
  }

  export type CertificacaoCreateManyUserInputEnvelope = {
    data: CertificacaoCreateManyUserInput | CertificacaoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EpiCreateWithoutUserInput = {
    id?: string
    item: string
    retiradoEm?: Date | string | null
    devolvido?: boolean
    quantidade?: number
  }

  export type EpiUncheckedCreateWithoutUserInput = {
    id?: string
    item: string
    retiradoEm?: Date | string | null
    devolvido?: boolean
    quantidade?: number
  }

  export type EpiCreateOrConnectWithoutUserInput = {
    where: EpiWhereUniqueInput
    create: XOR<EpiCreateWithoutUserInput, EpiUncheckedCreateWithoutUserInput>
  }

  export type EpiCreateManyUserInputEnvelope = {
    data: EpiCreateManyUserInput | EpiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AcidenteCreateWithoutUserInput = {
    id?: string
    data: Date | string
    descricao?: string | null
    afastamento?: boolean
  }

  export type AcidenteUncheckedCreateWithoutUserInput = {
    id?: string
    data: Date | string
    descricao?: string | null
    afastamento?: boolean
  }

  export type AcidenteCreateOrConnectWithoutUserInput = {
    where: AcidenteWhereUniqueInput
    create: XOR<AcidenteCreateWithoutUserInput, AcidenteUncheckedCreateWithoutUserInput>
  }

  export type AcidenteCreateManyUserInputEnvelope = {
    data: AcidenteCreateManyUserInput | AcidenteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AtestadoCreateWithoutUserInput = {
    id?: string
    inicio: Date | string
    fim: Date | string
    motivo?: string | null
  }

  export type AtestadoUncheckedCreateWithoutUserInput = {
    id?: string
    inicio: Date | string
    fim: Date | string
    motivo?: string | null
  }

  export type AtestadoCreateOrConnectWithoutUserInput = {
    where: AtestadoWhereUniqueInput
    create: XOR<AtestadoCreateWithoutUserInput, AtestadoUncheckedCreateWithoutUserInput>
  }

  export type AtestadoCreateManyUserInputEnvelope = {
    data: AtestadoCreateManyUserInput | AtestadoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeriasCreateWithoutUserInput = {
    id?: string
    periodoAquisitivo: string
    proximoPeriodo?: string | null
    status: string
  }

  export type FeriasUncheckedCreateWithoutUserInput = {
    id?: string
    periodoAquisitivo: string
    proximoPeriodo?: string | null
    status: string
  }

  export type FeriasCreateOrConnectWithoutUserInput = {
    where: FeriasWhereUniqueInput
    create: XOR<FeriasCreateWithoutUserInput, FeriasUncheckedCreateWithoutUserInput>
  }

  export type TreinamentoUpsertWithWhereUniqueWithoutUserInput = {
    where: TreinamentoWhereUniqueInput
    update: XOR<TreinamentoUpdateWithoutUserInput, TreinamentoUncheckedUpdateWithoutUserInput>
    create: XOR<TreinamentoCreateWithoutUserInput, TreinamentoUncheckedCreateWithoutUserInput>
  }

  export type TreinamentoUpdateWithWhereUniqueWithoutUserInput = {
    where: TreinamentoWhereUniqueInput
    data: XOR<TreinamentoUpdateWithoutUserInput, TreinamentoUncheckedUpdateWithoutUserInput>
  }

  export type TreinamentoUpdateManyWithWhereWithoutUserInput = {
    where: TreinamentoScalarWhereInput
    data: XOR<TreinamentoUpdateManyMutationInput, TreinamentoUncheckedUpdateManyWithoutUserInput>
  }

  export type TreinamentoScalarWhereInput = {
    AND?: TreinamentoScalarWhereInput | TreinamentoScalarWhereInput[]
    OR?: TreinamentoScalarWhereInput[]
    NOT?: TreinamentoScalarWhereInput | TreinamentoScalarWhereInput[]
    id?: StringFilter<"Treinamento"> | string
    nome?: StringFilter<"Treinamento"> | string
    concluidoEm?: DateTimeNullableFilter<"Treinamento"> | Date | string | null
    venceEm?: DateTimeNullableFilter<"Treinamento"> | Date | string | null
    status?: StringFilter<"Treinamento"> | string
    userId?: StringFilter<"Treinamento"> | string
  }

  export type CertificacaoUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificacaoWhereUniqueInput
    update: XOR<CertificacaoUpdateWithoutUserInput, CertificacaoUncheckedUpdateWithoutUserInput>
    create: XOR<CertificacaoCreateWithoutUserInput, CertificacaoUncheckedCreateWithoutUserInput>
  }

  export type CertificacaoUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificacaoWhereUniqueInput
    data: XOR<CertificacaoUpdateWithoutUserInput, CertificacaoUncheckedUpdateWithoutUserInput>
  }

  export type CertificacaoUpdateManyWithWhereWithoutUserInput = {
    where: CertificacaoScalarWhereInput
    data: XOR<CertificacaoUpdateManyMutationInput, CertificacaoUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificacaoScalarWhereInput = {
    AND?: CertificacaoScalarWhereInput | CertificacaoScalarWhereInput[]
    OR?: CertificacaoScalarWhereInput[]
    NOT?: CertificacaoScalarWhereInput | CertificacaoScalarWhereInput[]
    id?: StringFilter<"Certificacao"> | string
    nome?: StringFilter<"Certificacao"> | string
    emitidaEm?: DateTimeNullableFilter<"Certificacao"> | Date | string | null
    venceEm?: DateTimeNullableFilter<"Certificacao"> | Date | string | null
    status?: StringFilter<"Certificacao"> | string
    userId?: StringFilter<"Certificacao"> | string
  }

  export type EpiUpsertWithWhereUniqueWithoutUserInput = {
    where: EpiWhereUniqueInput
    update: XOR<EpiUpdateWithoutUserInput, EpiUncheckedUpdateWithoutUserInput>
    create: XOR<EpiCreateWithoutUserInput, EpiUncheckedCreateWithoutUserInput>
  }

  export type EpiUpdateWithWhereUniqueWithoutUserInput = {
    where: EpiWhereUniqueInput
    data: XOR<EpiUpdateWithoutUserInput, EpiUncheckedUpdateWithoutUserInput>
  }

  export type EpiUpdateManyWithWhereWithoutUserInput = {
    where: EpiScalarWhereInput
    data: XOR<EpiUpdateManyMutationInput, EpiUncheckedUpdateManyWithoutUserInput>
  }

  export type EpiScalarWhereInput = {
    AND?: EpiScalarWhereInput | EpiScalarWhereInput[]
    OR?: EpiScalarWhereInput[]
    NOT?: EpiScalarWhereInput | EpiScalarWhereInput[]
    id?: StringFilter<"Epi"> | string
    item?: StringFilter<"Epi"> | string
    retiradoEm?: DateTimeNullableFilter<"Epi"> | Date | string | null
    devolvido?: BoolFilter<"Epi"> | boolean
    quantidade?: IntFilter<"Epi"> | number
    userId?: StringFilter<"Epi"> | string
  }

  export type AcidenteUpsertWithWhereUniqueWithoutUserInput = {
    where: AcidenteWhereUniqueInput
    update: XOR<AcidenteUpdateWithoutUserInput, AcidenteUncheckedUpdateWithoutUserInput>
    create: XOR<AcidenteCreateWithoutUserInput, AcidenteUncheckedCreateWithoutUserInput>
  }

  export type AcidenteUpdateWithWhereUniqueWithoutUserInput = {
    where: AcidenteWhereUniqueInput
    data: XOR<AcidenteUpdateWithoutUserInput, AcidenteUncheckedUpdateWithoutUserInput>
  }

  export type AcidenteUpdateManyWithWhereWithoutUserInput = {
    where: AcidenteScalarWhereInput
    data: XOR<AcidenteUpdateManyMutationInput, AcidenteUncheckedUpdateManyWithoutUserInput>
  }

  export type AcidenteScalarWhereInput = {
    AND?: AcidenteScalarWhereInput | AcidenteScalarWhereInput[]
    OR?: AcidenteScalarWhereInput[]
    NOT?: AcidenteScalarWhereInput | AcidenteScalarWhereInput[]
    id?: StringFilter<"Acidente"> | string
    data?: DateTimeFilter<"Acidente"> | Date | string
    descricao?: StringNullableFilter<"Acidente"> | string | null
    afastamento?: BoolFilter<"Acidente"> | boolean
    userId?: StringFilter<"Acidente"> | string
  }

  export type AtestadoUpsertWithWhereUniqueWithoutUserInput = {
    where: AtestadoWhereUniqueInput
    update: XOR<AtestadoUpdateWithoutUserInput, AtestadoUncheckedUpdateWithoutUserInput>
    create: XOR<AtestadoCreateWithoutUserInput, AtestadoUncheckedCreateWithoutUserInput>
  }

  export type AtestadoUpdateWithWhereUniqueWithoutUserInput = {
    where: AtestadoWhereUniqueInput
    data: XOR<AtestadoUpdateWithoutUserInput, AtestadoUncheckedUpdateWithoutUserInput>
  }

  export type AtestadoUpdateManyWithWhereWithoutUserInput = {
    where: AtestadoScalarWhereInput
    data: XOR<AtestadoUpdateManyMutationInput, AtestadoUncheckedUpdateManyWithoutUserInput>
  }

  export type AtestadoScalarWhereInput = {
    AND?: AtestadoScalarWhereInput | AtestadoScalarWhereInput[]
    OR?: AtestadoScalarWhereInput[]
    NOT?: AtestadoScalarWhereInput | AtestadoScalarWhereInput[]
    id?: StringFilter<"Atestado"> | string
    inicio?: DateTimeFilter<"Atestado"> | Date | string
    fim?: DateTimeFilter<"Atestado"> | Date | string
    motivo?: StringNullableFilter<"Atestado"> | string | null
    userId?: StringFilter<"Atestado"> | string
  }

  export type FeriasUpsertWithoutUserInput = {
    update: XOR<FeriasUpdateWithoutUserInput, FeriasUncheckedUpdateWithoutUserInput>
    create: XOR<FeriasCreateWithoutUserInput, FeriasUncheckedCreateWithoutUserInput>
    where?: FeriasWhereInput
  }

  export type FeriasUpdateToOneWithWhereWithoutUserInput = {
    where?: FeriasWhereInput
    data: XOR<FeriasUpdateWithoutUserInput, FeriasUncheckedUpdateWithoutUserInput>
  }

  export type FeriasUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodoAquisitivo?: StringFieldUpdateOperationsInput | string
    proximoPeriodo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FeriasUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodoAquisitivo?: StringFieldUpdateOperationsInput | string
    proximoPeriodo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutTreinamentosInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificacoes?: CertificacaoCreateNestedManyWithoutUserInput
    epis?: EpiCreateNestedManyWithoutUserInput
    acidentes?: AcidenteCreateNestedManyWithoutUserInput
    atestados?: AtestadoCreateNestedManyWithoutUserInput
    ferias?: FeriasCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTreinamentosInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificacoes?: CertificacaoUncheckedCreateNestedManyWithoutUserInput
    epis?: EpiUncheckedCreateNestedManyWithoutUserInput
    acidentes?: AcidenteUncheckedCreateNestedManyWithoutUserInput
    atestados?: AtestadoUncheckedCreateNestedManyWithoutUserInput
    ferias?: FeriasUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTreinamentosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTreinamentosInput, UserUncheckedCreateWithoutTreinamentosInput>
  }

  export type UserUpsertWithoutTreinamentosInput = {
    update: XOR<UserUpdateWithoutTreinamentosInput, UserUncheckedUpdateWithoutTreinamentosInput>
    create: XOR<UserCreateWithoutTreinamentosInput, UserUncheckedCreateWithoutTreinamentosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTreinamentosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTreinamentosInput, UserUncheckedUpdateWithoutTreinamentosInput>
  }

  export type UserUpdateWithoutTreinamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificacoes?: CertificacaoUpdateManyWithoutUserNestedInput
    epis?: EpiUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUpdateManyWithoutUserNestedInput
    ferias?: FeriasUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTreinamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificacoes?: CertificacaoUncheckedUpdateManyWithoutUserNestedInput
    epis?: EpiUncheckedUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUncheckedUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUncheckedUpdateManyWithoutUserNestedInput
    ferias?: FeriasUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCertificacoesInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoCreateNestedManyWithoutUserInput
    epis?: EpiCreateNestedManyWithoutUserInput
    acidentes?: AcidenteCreateNestedManyWithoutUserInput
    atestados?: AtestadoCreateNestedManyWithoutUserInput
    ferias?: FeriasCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificacoesInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoUncheckedCreateNestedManyWithoutUserInput
    epis?: EpiUncheckedCreateNestedManyWithoutUserInput
    acidentes?: AcidenteUncheckedCreateNestedManyWithoutUserInput
    atestados?: AtestadoUncheckedCreateNestedManyWithoutUserInput
    ferias?: FeriasUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificacoesInput, UserUncheckedCreateWithoutCertificacoesInput>
  }

  export type UserUpsertWithoutCertificacoesInput = {
    update: XOR<UserUpdateWithoutCertificacoesInput, UserUncheckedUpdateWithoutCertificacoesInput>
    create: XOR<UserCreateWithoutCertificacoesInput, UserUncheckedCreateWithoutCertificacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificacoesInput, UserUncheckedUpdateWithoutCertificacoesInput>
  }

  export type UserUpdateWithoutCertificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUpdateManyWithoutUserNestedInput
    epis?: EpiUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUpdateManyWithoutUserNestedInput
    ferias?: FeriasUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUncheckedUpdateManyWithoutUserNestedInput
    epis?: EpiUncheckedUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUncheckedUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUncheckedUpdateManyWithoutUserNestedInput
    ferias?: FeriasUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutEpisInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoCreateNestedManyWithoutUserInput
    acidentes?: AcidenteCreateNestedManyWithoutUserInput
    atestados?: AtestadoCreateNestedManyWithoutUserInput
    ferias?: FeriasCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEpisInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoUncheckedCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoUncheckedCreateNestedManyWithoutUserInput
    acidentes?: AcidenteUncheckedCreateNestedManyWithoutUserInput
    atestados?: AtestadoUncheckedCreateNestedManyWithoutUserInput
    ferias?: FeriasUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEpisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEpisInput, UserUncheckedCreateWithoutEpisInput>
  }

  export type UserUpsertWithoutEpisInput = {
    update: XOR<UserUpdateWithoutEpisInput, UserUncheckedUpdateWithoutEpisInput>
    create: XOR<UserCreateWithoutEpisInput, UserUncheckedCreateWithoutEpisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEpisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEpisInput, UserUncheckedUpdateWithoutEpisInput>
  }

  export type UserUpdateWithoutEpisInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUpdateManyWithoutUserNestedInput
    ferias?: FeriasUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEpisInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUncheckedUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUncheckedUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUncheckedUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUncheckedUpdateManyWithoutUserNestedInput
    ferias?: FeriasUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAcidentesInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoCreateNestedManyWithoutUserInput
    epis?: EpiCreateNestedManyWithoutUserInput
    atestados?: AtestadoCreateNestedManyWithoutUserInput
    ferias?: FeriasCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAcidentesInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoUncheckedCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoUncheckedCreateNestedManyWithoutUserInput
    epis?: EpiUncheckedCreateNestedManyWithoutUserInput
    atestados?: AtestadoUncheckedCreateNestedManyWithoutUserInput
    ferias?: FeriasUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAcidentesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAcidentesInput, UserUncheckedCreateWithoutAcidentesInput>
  }

  export type UserUpsertWithoutAcidentesInput = {
    update: XOR<UserUpdateWithoutAcidentesInput, UserUncheckedUpdateWithoutAcidentesInput>
    create: XOR<UserCreateWithoutAcidentesInput, UserUncheckedCreateWithoutAcidentesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAcidentesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAcidentesInput, UserUncheckedUpdateWithoutAcidentesInput>
  }

  export type UserUpdateWithoutAcidentesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUpdateManyWithoutUserNestedInput
    epis?: EpiUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUpdateManyWithoutUserNestedInput
    ferias?: FeriasUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAcidentesInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUncheckedUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUncheckedUpdateManyWithoutUserNestedInput
    epis?: EpiUncheckedUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUncheckedUpdateManyWithoutUserNestedInput
    ferias?: FeriasUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAtestadosInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoCreateNestedManyWithoutUserInput
    epis?: EpiCreateNestedManyWithoutUserInput
    acidentes?: AcidenteCreateNestedManyWithoutUserInput
    ferias?: FeriasCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAtestadosInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoUncheckedCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoUncheckedCreateNestedManyWithoutUserInput
    epis?: EpiUncheckedCreateNestedManyWithoutUserInput
    acidentes?: AcidenteUncheckedCreateNestedManyWithoutUserInput
    ferias?: FeriasUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAtestadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAtestadosInput, UserUncheckedCreateWithoutAtestadosInput>
  }

  export type UserUpsertWithoutAtestadosInput = {
    update: XOR<UserUpdateWithoutAtestadosInput, UserUncheckedUpdateWithoutAtestadosInput>
    create: XOR<UserCreateWithoutAtestadosInput, UserUncheckedCreateWithoutAtestadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAtestadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAtestadosInput, UserUncheckedUpdateWithoutAtestadosInput>
  }

  export type UserUpdateWithoutAtestadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUpdateManyWithoutUserNestedInput
    epis?: EpiUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUpdateManyWithoutUserNestedInput
    ferias?: FeriasUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAtestadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUncheckedUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUncheckedUpdateManyWithoutUserNestedInput
    epis?: EpiUncheckedUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUncheckedUpdateManyWithoutUserNestedInput
    ferias?: FeriasUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutFeriasInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoCreateNestedManyWithoutUserInput
    epis?: EpiCreateNestedManyWithoutUserInput
    acidentes?: AcidenteCreateNestedManyWithoutUserInput
    atestados?: AtestadoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeriasInput = {
    id?: string
    urlPhoto?: string | null
    cpf: string
    email: string
    senha: string
    telefone?: string | null
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    pais?: string | null
    complemento?: string | null
    nome: string
    matricula: string
    cargo: string
    setor: string
    foto?: string | null
    turno?: string | null
    role: $Enums.Role
    areasPermitidas?: UserCreateareasPermitidasInput | string[]
    niveisAcesso?: UserCreateniveisAcessoInput | string[]
    bloqueios?: UserCreatebloqueiosInput | string[]
    asoStatus: string
    asoUltimo?: Date | string | null
    asoVencimento?: Date | string | null
    asoRestricoes?: string | null
    situacaoGeral: string
    motivoDesligamento?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treinamentos?: TreinamentoUncheckedCreateNestedManyWithoutUserInput
    certificacoes?: CertificacaoUncheckedCreateNestedManyWithoutUserInput
    epis?: EpiUncheckedCreateNestedManyWithoutUserInput
    acidentes?: AcidenteUncheckedCreateNestedManyWithoutUserInput
    atestados?: AtestadoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeriasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeriasInput, UserUncheckedCreateWithoutFeriasInput>
  }

  export type UserUpsertWithoutFeriasInput = {
    update: XOR<UserUpdateWithoutFeriasInput, UserUncheckedUpdateWithoutFeriasInput>
    create: XOR<UserCreateWithoutFeriasInput, UserUncheckedCreateWithoutFeriasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeriasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeriasInput, UserUncheckedUpdateWithoutFeriasInput>
  }

  export type UserUpdateWithoutFeriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUpdateManyWithoutUserNestedInput
    epis?: EpiUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    urlPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    areasPermitidas?: UserUpdateareasPermitidasInput | string[]
    niveisAcesso?: UserUpdateniveisAcessoInput | string[]
    bloqueios?: UserUpdatebloqueiosInput | string[]
    asoStatus?: StringFieldUpdateOperationsInput | string
    asoUltimo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asoRestricoes?: NullableStringFieldUpdateOperationsInput | string | null
    situacaoGeral?: StringFieldUpdateOperationsInput | string
    motivoDesligamento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treinamentos?: TreinamentoUncheckedUpdateManyWithoutUserNestedInput
    certificacoes?: CertificacaoUncheckedUpdateManyWithoutUserNestedInput
    epis?: EpiUncheckedUpdateManyWithoutUserNestedInput
    acidentes?: AcidenteUncheckedUpdateManyWithoutUserNestedInput
    atestados?: AtestadoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TreinamentoCreateManyUserInput = {
    id?: string
    nome: string
    concluidoEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
  }

  export type CertificacaoCreateManyUserInput = {
    id?: string
    nome: string
    emitidaEm?: Date | string | null
    venceEm?: Date | string | null
    status: string
  }

  export type EpiCreateManyUserInput = {
    id?: string
    item: string
    retiradoEm?: Date | string | null
    devolvido?: boolean
    quantidade?: number
  }

  export type AcidenteCreateManyUserInput = {
    id?: string
    data: Date | string
    descricao?: string | null
    afastamento?: boolean
  }

  export type AtestadoCreateManyUserInput = {
    id?: string
    inicio: Date | string
    fim: Date | string
    motivo?: string | null
  }

  export type TreinamentoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    concluidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TreinamentoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    concluidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TreinamentoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    concluidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CertificacaoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    emitidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CertificacaoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    emitidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CertificacaoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    emitidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EpiUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    retiradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type EpiUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    retiradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type EpiUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    retiradoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devolvido?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type AcidenteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    afastamento?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AcidenteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    afastamento?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AcidenteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    afastamento?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AtestadoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtestadoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtestadoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
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