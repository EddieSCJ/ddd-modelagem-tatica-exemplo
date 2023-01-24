import ProductRepositoryInterface from "../../../../domain/product/repository/product.repository.interface";
import ProductDatabaseModel from "../../db/model/product";
import SequelizeInstance from "./sequelize.instance";

export default class ProductSequelizeRepository implements ProductRepositoryInterface{
    async create(entity: ProductDatabaseModel): Promise<ProductDatabaseModel> {
        return await SequelizeInstance.create({
            id: entity.id,
            name: entity.name,
            price: entity.price,
        });
    }

    async update(id: string, entity: ProductDatabaseModel): Promise<void> {
        await SequelizeInstance.update(
            {
                name: entity.name,
                price: entity.price,
            },
            {
                where: {
                    id: id,
                },
            }
        );
    }

    async find(id: string): Promise<ProductDatabaseModel> {
        const productModel = await SequelizeInstance.findOne({ where: { id } });
        return new ProductDatabaseModel(productModel!!.id, productModel!!.name, productModel!!.price);
    }

    async findAll(): Promise<Array<ProductDatabaseModel>> {
        const productModels = await SequelizeInstance.findAll();
        return productModels.map((productModel) =>
            new ProductDatabaseModel(productModel.id, productModel.name, productModel.price)
        );
    }

}