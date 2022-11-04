import {OrderService} from "../database/OrderService"

const orderService = new OrderService();

const get = async (req: any, res: any) => {
    const id:number = req.params.id
    if(!id) return res.json({error:"No order id given"})
    
    res.json(
        orderService.get(id)
    )
}

const post = async (req: any, res: any) => {
    // implement 
}

const del = async (req: any, res: any) => {
    // implement 
}

const update = async (req: any, res: any) => {
    // implement 
}

module.exports = {
  get, post
};
