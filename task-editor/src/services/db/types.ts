export interface DBQueryResponse<T> {
    data: T | null;
    error: unknown | null;
}
