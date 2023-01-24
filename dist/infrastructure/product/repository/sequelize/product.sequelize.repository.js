"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../../db/model/product"));
const sequelize_instance_1 = __importDefault(require("./sequelize.instance"));
class ProductSequelizeRepository {
    async create(entity) {
        return await sequelize_instance_1.default.create({
            id: entity.id,
            name: entity.name,
            price: entity.price,
        });
    }
    async update(id, entity) {
        await sequelize_instance_1.default.update({
            name: entity.name,
            price: entity.price,
        }, {
            where: {
                id: id,
            },
        });
    }
    async find(id) {
        const productModel = await sequelize_instance_1.default.findOne({ where: { id } });
        return new product_1.default(productModel.id, productModel.name, productModel.price);
    }
    async findAll() {
        const productModels = await sequelize_instance_1.default.findAll();
        return productModels.map((productModel) => new product_1.default(productModel.id, productModel.name, productModel.price));
    }
}
exports.default = ProductSequelizeRepository;
