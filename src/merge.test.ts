import { merge } from './merge';



describe('Merged function test', () => {
  test('Merged [1,3,6] and [4,7] to be [1,2,3,4,6,7]', () => {
    expect(merge([1,3,6], [4,7])).toStrictEqual([1,3,4,6,7])
  })

  test('Merged [1,2,3] and [] to be [1,2,3]', () => {
    expect(merge([1,2,3], [])).toStrictEqual([1,2,3])
  })

  test('Merged [] and [1,2,3] to be [1,2,3]', () => {
    expect(merge([], [1,2,3])).toStrictEqual([1,2,3])
  })

  test('Merged [] and [] to be []', () => {
    expect(merge([], [])).toStrictEqual([])
  })
})
