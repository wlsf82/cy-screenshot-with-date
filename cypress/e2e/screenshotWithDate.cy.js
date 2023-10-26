describe('Screenshot with date', () => {
  const date = new Date()

  beforeEach(() => {
    cy.exec('rm -rf cypress/screenshots/* || return 0 ', { log: false   })
  })

  it(`${date.toLocaleString()} - takes a screenshot with the date and time on it`, () => {
    cy.visit('https://walmyr.dev', { log: false   })

    cy.screenshot({ capture: 'runner', log: false })
  })
})
