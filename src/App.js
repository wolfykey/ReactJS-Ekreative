import React from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import AppHero from './components/AppHero/AppHero'

function App() {
  const menuItems = [
    {
      label: 'CYBERTRUCK',
      active: true,
      id: 1
    },
    {
      label: 'MODEL S',
      active: false,
      id: 2
    },
    {
      label: 'MODEL 3',
      active: false,
      id: 3
    },
    {
      label: 'MODEL X',
      active: false,
      id: 4
    },
    {
      label: 'MODEL Y',
      active: false,
      id: 5
    },
    {
      label: 'ROADSTER',
      active: false,
      id: 6
    }
  ]

  const heroContent = {
    title: 'Tesla Cybertruck',
    description:
      'BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR'
  }

  return (
    <>
      <AppHeader links={menuItems} />
      <AppHero content={heroContent} />
    </>
  )
}

export default App
