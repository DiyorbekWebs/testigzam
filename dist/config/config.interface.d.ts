interface IJWT {
    accessTokenSecret: string;
    accessTokenExpiration: string;
    refreshTokenSecret: string;
    refreshTokenExpiration: any;
}
interface IDatabase {
    host: string;
    type: string;
    name: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    synchronize: boolean;
    migrationsRun?: boolean;
    logging?: boolean;
    autoLoadEntities?: boolean;
    migrations?: string[];
    migrationsTableName: string;
    cli?: {
        migrationsDir?: string;
    };
}
export interface IConfig {
    port: number;
    database: IDatabase;
    jwt: IJWT;
    newPasswordBytes: number;
    codeBytes: number;
}
export {};
