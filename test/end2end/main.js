describe('TodoMVC', function() {  

  beforeEach(function() {
    browser().navigateTo('/index.html');
  });

  describe( 'Todo creation:', function() {

    beforeEach(function() {
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

      expect(element('#todo-list li').count()).toEqual(3);
    });

    it( 'should not allow adding an empty todo' , function() {
    
      input('newTodo').enter('   ');
      element('#new-todo-submit').click();

      expect(element('#todo-count .ng-binding').text()).toEqual("0");

      expect(element('#todo-list li').count()).toEqual(0);
    });
  });

  describe( 'Todo completion:', function() {
    
    beforeEach(function() {
      element('#clear-all').click();
    });

    it( 'should allow marking a todo complete' , function() {

      input('newTodo').enter('Test todo 1');
      element('#new-todo-submit').click();

      //Mark the item as completed
      element('#todo-list li:last-child .toggle').click();

      expect(element('#todo-list li.completed').count()).toEqual(1);

    });

    it( 'should allow clearing completed todos' , function() {
     
      input('newTodo').enter('Test todo 1');
      element('#new-todo-submit').click();

      //Mark the item as completed
      element('#todo-list li:last-child .toggle').click();

      element('#clear-completed').click();

      expect(element('#todo-list li.completed').count()).toEqual(0);
    });
  });

  describe( 'Todo deletion:', function() {
    beforeEach(function() {
      element('#clear-all').click();
    });

    it( 'should allow deleting a todo' , function() {
      input('newTodo').enter('Test todo 1');
      element('#new-todo-submit').click();

      //Destroy item
      element('#todo-list li:last-child .destroy').click();

      expect(element('#todo-list li.completed').count()).toEqual(0);
    });
  });
});