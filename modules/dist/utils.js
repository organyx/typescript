"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sample(list) {
    return list[Math.floor(Math.random() * list.length)];
}
exports.sample = sample;
