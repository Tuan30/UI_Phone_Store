import { api } from ".";

const CategoriesService = {
  list({ offset = 0, limit = 5, id, ...restParam } = {}) {
    return api.call().get(`/mobile/categories`, {
      params: {
        offset,
        limit,
        id,
        ...restParam,
      },
    });
  },
  listProduct({
    id,
    offset = 0,
    limit = 20,
    special,
    is_new,
    sortBy,
    order,
    min_price,
    max_price = 50000000,
    ...restParam
  } = {}) {
    return api.call().get(`/mobile/categories/${id}/products`, {
      params: {
        id,
        offset,
        limit,
        special,
        is_new,
        sortBy,
        order,
        min_price,
        max_price,
        ...restParam,
      },
    });
  },
};

export default CategoriesService;
