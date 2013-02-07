describe('TodoMVC', function() {

  beforeEach(function() {
    browser().navigateTo('/index.html');
  });

  it('should allow adding a new todo item', function() {
    input('newTodo').enter('A test todo');
    expect(input('newTodo').val()).toEqual('A test todo');
  });
  
});