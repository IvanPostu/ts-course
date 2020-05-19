/**
 * Given a tree, you need to find the sum of all the vertices.
 */

const tree1 = {
  valueNode: 1,
  next: [
    {
      valueNode: 3,
      next: null,
    },
    {
      valueNode: 2,
      next: null,
    },
  ],
}

const tree2 = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null,
    },
    {
      valueNode: 3,
      next: null,
    },
    {
      valueNode: 2,
      next: null,
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null,
        },
        {
          valueNode: 5,
          next: null,
        },
      ],
    },
  ],
}

function getSum(tree: any): number {
  let sum = 0
  sum += tree.valueNode

  if (tree.next) {
    tree.next.forEach((item: any) => {
      sum += getSum(item)
    })
  }

  return sum
}

describe('Binary tree vertices sum module test: ', () => {
  test('getSum function test: ', () => {
    expect(getSum(tree1)).toBe(6)
    expect(getSum(tree2)).toBe(17)
  })
})
