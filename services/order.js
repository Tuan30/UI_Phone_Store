import { api } from ".";

const OrderService = {
  order({ data, ...restParam } = {}) {
    return api.call().get(`/mobile/orders`, {
      data,
      ...restParam,
    });
  },
};

export default OrderService;
