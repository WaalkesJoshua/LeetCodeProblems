const LinkedList = require('./linkedlist');

describe('#insertAtHead', () => {
  test('add element to beginning of list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  })
});

describe('#getByIndex', () => {
  describe('with index less than 0', () => {

    test('it returns null', () => {
      const ll = new LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    })
  })

  describe('with index greater than list length', () => {

    test('it returns null', () => {
      const ll = new LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    })
  })

  describe('with index 0', () => {

    test('it returns the head', () => {
      const ll = new LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0).value).toBe(10);
    })
  })

  describe('with index in middle', () => {

    test('it returns the correct value', () => {
      const ll = new LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.getByIndex(2).value).toBe(30);
    })
  })

});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    test('it doesn\'t insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);

      expect(ll.length).toBe(2);
    })
  })

  describe('with index greater than list length', () => {
    test('it doesn\'t insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(4, 30);

      expect(ll.length).toBe(2);
    })
  })

  describe('with index 0', () => {
    test('sets new value to be the head and points to last head', () => {
      const ll = LinkedList.fromValues(10, 20);
      let current = ll.head;
      ll.insertAtIndex(0, 30);

      expect(ll.length).toBe(3);
      expect(ll.head.value).toBe(30);
      expect(ll.head.next).toBe(current);
    })
  })

  describe('with index in the middle', () => {
    test('it should insert at given index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 50);
      ll.insertAtIndex(3, 40);
      const prev = ll.getByIndex(2);
      const node = ll.getByIndex(3);
      const nodeNext = ll.getByIndex(4);

      expect(ll.length).toBe(5);
      expect(node.value).toBe(40);
      expect(prev.next).toBe(node);
      expect(node.next).toBe(nodeNext);
      expect(nodeNext.value).toBe(50)
    })
  })
});

describe('#removeHead', () => {
  test('removes the head', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();

    expect(ll.length).toBe(2);
    expect(ll.head.value).toBe(20);

  })
});

describe('#removeAtIndex', () => {
  describe('with index less than 0', () => {
    test('it doesn\'t remove anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1, 30);

      expect(ll.length).toBe(2);
    })
  })

  describe('with index greater than list length', () => {
    test('it doesn\'t remove anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(4, 30);

      expect(ll.length).toBe(2);
    })
  })

  describe('with index 0', () => {
    test('removes the head', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(0);

      expect(ll.length).toBe(1);
      expect(ll.head.value).toBe(20);
      expect(ll.head.next).toBeNull;
    })
  })

  describe('with index in the middle', () => {
    test('it should remove at given index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 50);
      ll.removeAtIndex(1);
      const prev = ll.getByIndex(0);
      const node = ll.getByIndex(1);

      expect(ll.length).toBe(3);
      expect(node.value).toBe(30);
      expect(prev.next).toBe(node);
    })
  })
});
