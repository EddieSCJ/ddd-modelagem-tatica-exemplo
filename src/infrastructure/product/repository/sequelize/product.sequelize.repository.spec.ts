import {Sequelize} from "sequelize-typescript";
import ProductDatabaseModel from "../../db/model/product";
import ProductSequelizeRepository from "./product.sequelize.repository";
import SequelizeInstance from "./sequelize.instance";
import ProductRepositoryInterface from "../../../../domain/product/repository/product.repository.interface";

describe("Product repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: {force: true},
        });
        sequelize.addModels([SequelizeInstance]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should create a product", async () => {
        const productRepository: ProductRepositoryInterface = new ProductSequelizeRepository();
        const product = new ProductDatabaseModel("1", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await SequelizeInstance.findOne({where: {id: "1"}});

        expect(productModel?.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100,
        });
    });

    it("should update a product", async () => {
        const productRepository: ProductRepositoryInterface = new ProductSequelizeRepository();
        const product = new ProductDatabaseModel("1", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await SequelizeInstance.findOne({where: {id: "1"}});

        expect(productModel?.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100,
        });

        product.name = "Product 2";
        product.price = 200;

        await productRepository.update(productModel!!.id, product);

        const productModel2 = await SequelizeInstance.findOne({where: {id: "1"}});

        expect(productModel2?.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 2",
            price: 200,
        });
    });

    it("should find a product", async () => {
        const productRepository = new ProductSequelizeRepository();
        const product = new ProductDatabaseModel("1", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await SequelizeInstance.findOne({where: {id: "1"}});

        const foundProduct = await productRepository.find("1");

        expect(productModel?.toJSON()).toStrictEqual({
            id: foundProduct.id,
            name: foundProduct.name,
            price: foundProduct.price,
        });
    });

    it("should find all products", async () => {
        const productRepository = new ProductSequelizeRepository();
        const product = new ProductDatabaseModel("1", "Product 1", 100);
        await productRepository.create(product);

        const product2 = new ProductDatabaseModel("2", "Product 2", 200);
        await productRepository.create(product2);

        const foundProducts = await productRepository.findAll();
        const products = [product, product2];

        expect(products).toEqual(foundProducts);
    });

});