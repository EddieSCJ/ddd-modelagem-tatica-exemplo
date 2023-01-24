import RepositoryInterface from "../../@shared/repository/repository.interface";
import ProductDatabaseModel from "../../../infrastructure/product/db/model/product";

export default interface ProductRepositoryInterface extends RepositoryInterface<ProductDatabaseModel> {}