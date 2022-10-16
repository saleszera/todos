describe('Todos page spec', () => {
  before(() => cy.visit('http://localhost:5173/'))

  it('should be able to create an todo', () => {
    cy.get('input').type('test 1')
    cy.get('button').contains(/salvar/i).click()

    cy.contains('test 1').should('exist')
  })
  it('should not be able to create a duplicated todo', () => {
    cy.get('input').type('test 1')
    cy.get('button').contains(/salvar/i).click() 

    cy.contains('test 1').should((todo) => expect(todo).to.have.length(1))
  })
  it('should be able to delete a todo', () => {
    cy.get('input').type('test 2')
    cy.get('button').contains(/salvar/i).click() 

    cy.get('li:last-child').children('button').click()
    cy.get('li').contains(/test 2/i).should('not.exist')
  })
  it('should be able to finish a todo', () => {
    cy.get('input').type('test 2')
    cy.get('button').contains(/salvar/i).click()

    cy.get('li').contains(/test 2/i).dblclick()

    cy.get('p').contains(/test 2/i).invoke('css', 'text-decoration-line').should('equal', 'line-through')
  })
  it('should be able to list only concluded todos', () => {
    cy.get('button').contains(/concluidos/i).click()

    cy.get('p').invoke('css', 'text-decoration-line').should('equal', 'line-through')
    cy.get('svg').invoke('css', 'color').should('equal', 'rgb(77, 139, 49)')
  })
  it('should be able to list only pending todos', () => {
    cy.get('button').contains(/pendentes/i).click()

    cy.get('p').invoke('css', 'text-decoration-line').should('equal', 'none')
    cy.get('svg').invoke('css', 'color').should('equal', 'rgb(248, 248, 248)')
  })
  it('should be able to list all todos', () => {
    cy.get('button').contains(/todos/i).click()

    cy.get('p').invoke('css', 'text-decoration-line').should(value => expect(value).to.match(/none|line-through/g))
    cy.get('svg').invoke('css', 'color').should(value => expect(value).to.match(/^rgb\(248, 248, 248|77, 139, 49\)$/g))
  })
  it('should not be able to have outline on footer buttons', () => {
    cy.get('button').invoke('css', 'outline-style').should('equal', 'none')
  })
})