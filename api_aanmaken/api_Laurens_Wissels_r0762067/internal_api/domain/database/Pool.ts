import { Pool as _pool } from "pg";

export class Pool {
    private pool = new _pool({
        user: process.env.DB_USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.DB_PORT,
    });

    private static instance: Pool;
    private constructor() { }

    public static getInstance(): Pool {
        if (!Pool.instance) {
            Pool.instance = new Pool();
        }

        return Pool.instance;
    }

    public connect() {
        this.pool.connect();
    }

    public end() {
        this.pool.end();
    }

    private resultSetIsEmpty(resultSet: any): boolean {
        return (
            resultSet.length == 0 ||
            (resultSet &&
                Object.keys(resultSet[0]).length === 0 &&
                Object.getPrototypeOf(resultSet[0]) === Object.prototype)
        );
    }

    public async query(SQL: string) {
        const res = await this.pool.query(SQL);
        const resultSet = res.rows;

        // empty result set
        if (this.resultSetIsEmpty(resultSet)) {
            return null;
        } else {
            return resultSet;
        }
    }
}
