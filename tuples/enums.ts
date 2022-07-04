enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const orderStatus = OrderStatus.DELIVERED;

function isDelivered(orderStatus: OrderStatus): boolean {
    return orderStatus === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

const enum Compass {
    NORTH = 'N',
    EAST = 'E',
    WEST = 'W',
    SOUTH = 'S'
}

// enum Compass {
//     NORTH = 'N',
//     EAST = 'E',
//     WEST = 'W',
//     SOUTH = 'S'
// }

Compass.EAST;

const arrows  = {
    [Compass.NORTH]: '^',
    [Compass.EAST]: '>',
    [Compass.WEST]: '<',
    [Compass.SOUTH]: 'v'
}