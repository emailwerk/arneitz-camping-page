import * as React from 'react'

export function hasWindow() {
  const [isWindow, setIsWindow] = React.useState<boolean>(false)

  React.useEffect(() => {
    setIsWindow(true)

    return () => setIsWindow(false)
  }, [])

  return isWindow
}
