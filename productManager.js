import fs from "fs"
const filePath = "Product.json"

class productManager {

    constructor(path) {
        this.path = path
    }

    async getProduct() {
        try {
            if (fs.existsSync(this.path)) {
                const info = await fs.promises.readFile(this.path, "utf-8")
                return JSON.parse(info)
            } else {
                return []
            }
        } catch (error) {
            return error
        }
    }

    async createProd(objProd) {
        try {
            const prodPrev = await this.getProduct()
            let id
            let code
            if (!prodPrev.lenght) {
                id = 1
                code = 1
            } else {
                id = prodPrev[prodPrev.lenght - 1].id + 1
                code = prodPrev[prodPrev.lenght - 1].code + 1
            }
            const newProd = { ...objProd, id, code }
           prodPrev.push(newProd)
            await fs.promises.writeFile(this.path, JSON.stringify(prodPrev))
        } catch (error) {
            return error
        }
    }

    async getProdByID(id) {
        try {
            const prodPrev = await this.getProduct()
            const products = prodPrev.find(p => p.id === id)
            if (!products) {
                return "ID no encontrado"
            } return products
        } catch (error) {
            return error
        }
    }

    async updateProd(id, objProd) {
        try {
            const prodPrev = await this.getProduct()
            const prodIndex = prodPrev.findIndex(p => p.id === id)
            if (prodIndex === -1) {
                return "No Existe ese ID"
            }
            const productIndex = prodPrev[prodIndex]
            prodPrev[prodIndex] = {...productIndex, ...objProd}
            await fs.promises.writeFile(this.path, JSON.stringify(prodPrev))

        } catch (error) {

        }
    }

    async delProd(id) {
        try {
            const prodPrev = await this.getProduct()
            const newArray = prodPrev.filter(p => p.id !== id)
            await fs.promises.writeFile(this.path, JSON.stringify(newArray))
        } catch (error) {
            return error
        }
    }

}

objProd = {
    name: "Short",
    descripcion: "Short Blanco",
    price: 12,
    imagen: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-topper-running-mix-blanco-800020164407001-1.jpg",
    stock: 5
}

const productlist = {
    name: 'Remera',
    descripcion: "Remera negra",
    price: 10,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_995592-MLA46530633561_062021-F.webp",
    stock: 10
}

const productlist2 = {
    name: 'Remera',
    descripcion: "Remera roja",
    price: 10,
    imagen: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1042,b_rgb:f8f8f8/catalog/Apparel/Men%27s%20Apparel/T-Shirts/HW0216/HW0216-web1_mkqeu0.png",
    stock: 10
}

async function test() {
    /* ----------------------------- CREAR PRODUCTO ----------------------------- */
    const primerInstancia = new productManager("Product.json")

    /* ------------------------- AGREGAR PRODUCTO CON ID Y CODE ------------------------ */
    await primerInstancia.createProd(productlist)
    //const products = await primerInstancia.getProduct()


    /* ------------------------ CONSULTAR PRODUCTO POR ID ----------------------- */
    // const product = await primerInstancia.getProdByID(1)
    //console.log(product);


    /* ----------------------------- BORRAR PRODUCTO ---------------------------- */
    //await primerInstancia.delProd(2)

    /* --------------------------- ACTUALIZAR PRODUCTO --------------------------- */
    //await primerInstancia.updateProd(2, objProd)



}

test()
export {productManager}