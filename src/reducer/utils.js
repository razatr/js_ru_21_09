import { OrderedMap } from 'immutable'

export function arrToMap(arr, ItemRecord) {
    console.log('ITEM RECORD = ', ItemRecord)
    return arr.reduce((acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item), new OrderedMap({}))
}

export function mapToArr(obj) {
    return Object.values(obj)
}