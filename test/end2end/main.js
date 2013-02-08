describe('TodoMVC', function() {  

  beforeEach(function() {
    browser().navigateTo('/index.html');
    element('#clear-all').click();
  });

  it('should allow adding a new todo item', function() {

    input('newTodo').enter('Test todo 1');
    element('#new-todo-submit').click();

    input('newTodo').enter('Test todo 2');
    element('#new-todo-submit').click();

    input('newTodo').enter('Test todo 3');
    element('#new-todo-submit').click();

    expect(element('#todo-count .ng-binding').text()).toEqual("3");
  });

});