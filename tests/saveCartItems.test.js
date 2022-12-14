const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('se saveCartItems é uma função: ', () => {
    expect.assertions(1);

    expect(typeof saveCartItems).toBe('function');
    
  });
  test('se quando chamamos a função saveCartItems com parametro <ol><li>Item</li></ol> o localStorage.setItem é chamado: ', async () => {

    expect.assertions(1);
    const list = document.createElement('ol');
    list.innerHTML = '<li>items</li>';
    
    await saveCartItems(list);
    
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('se quando chamamos a função saveCartItems com parametro <ol><li>Item</li></ol> o localStorage.setItem é chamado com dois parâmetros: ', async () => {
    expect.assertions(1);
    const list = document.createElement('ol');
    list.innerHTML = '<li>item</li>';
    
    await saveCartItems(list);

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', list);
  });
});
