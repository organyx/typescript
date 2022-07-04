var _a;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var orderStatus = OrderStatus.DELIVERED;
function isDelivered(orderStatus) {
    return orderStatus === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
// enum Compass {
//     NORTH = 'N',
//     EAST = 'E',
//     WEST = 'W',
//     SOUTH = 'S'
// }
"E" /* Compass.EAST */;
var arrows = (_a = {},
    _a["N" /* Compass.NORTH */] = '^',
    _a["E" /* Compass.EAST */] = '>',
    _a["W" /* Compass.WEST */] = '<',
    _a["S" /* Compass.SOUTH */] = 'v',
    _a);
