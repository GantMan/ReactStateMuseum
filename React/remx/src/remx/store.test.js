import { Store } from './store';

describe(`remx store is easily testable (and TDD-able)`, () => {
  let store;

  beforeEach(() => {
    store = new Store();
  });

  it('start with 3 default items', () => {
    expect(store.getItems()).toEqual(['nacho', 'burrito', 'hotdog']);
  });

  it('clear the store', () => {
    store.clear();
    expect(store.getItems()).toEqual([]);
  });

  it('holds new item text', () => {
    expect(store.getNewItemText()).toEqual('');
    store.setNewItemText('the new item text');
    expect(store.getNewItemText()).toEqual('the new item text');
  });

  it('addItem', () => {
    expect(store.getItems()).not.toContain('the new item');
    store.setNewItemText('the new item');
    store.addItem();
    expect(store.getItems()).toContain('the new item');
  });

  it('addItem does not add undefined', () => {
    store.clear();
    store.addItem();
    expect(store.getItems()).toEqual(['']);
  });
});