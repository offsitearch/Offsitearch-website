import { createContext, useContext, useMemo, useState } from 'react'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const [project, setProject] = useState(null)

  const value = useMemo(
    () => ({
      inquiryOpen,
      project,
      openInquiry: () => setInquiryOpen(true),
      openProject: (p) => setProject(p),
      closeModal: () => {
        setInquiryOpen(false)
        setProject(null)
      }
    }),
    [inquiryOpen, project]
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used inside <StoreProvider>')
  return ctx
}