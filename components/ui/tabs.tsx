"use client"

import type React from "react"
import { createContext, useContext } from "react"
import { cn } from "@/lib/utils"

// Create context for the tabs
type TabsContextValue = {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

function useTabs() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider")
  }
  return context
}

interface TabsProps {
  value: string
  onValueChange: (value: string) => void
  className?: string
  children: React.ReactNode
}

function Tabs({ value, onValueChange, className, children }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabsListProps {
  className?: string
  children: React.ReactNode
}

function TabsList({ className, children }: TabsListProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface TabsTriggerProps {
  value: string
  className?: string
  children: React.ReactNode
}

function TabsTrigger({ value, className, children }: TabsTriggerProps) {
  const { value: selectedValue, onValueChange } = useTabs()
  const isActive = selectedValue === value

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => onValueChange(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50 hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  )
}

interface TabsContentProps {
  value: string
  className?: string
  children: React.ReactNode
}

function TabsContent({ value, className, children }: TabsContentProps) {
  const { value: selectedValue } = useTabs()
  const isActive = selectedValue === value

  if (!isActive) return null

  return (
    <div
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

