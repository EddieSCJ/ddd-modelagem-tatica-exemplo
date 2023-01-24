export default interface RepositoryInterface<T> {
    create(item: T): Promise<T>;

    update(id: string, item: T): Promise<void>;

    find(id: string): Promise<T>;

    findAll(): Promise<Array<T>>;
}