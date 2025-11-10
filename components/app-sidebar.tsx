"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const stories = [
  { id: "b", title: "B", subtitle: "Fire & Resilience", href: "/stories/b" },
  { id: "s", title: "S", subtitle: "Beneath the Beauty Line", href: "/stories/s" },
  { id: "v", title: "V", subtitle: "Scarred in Play", href: "/stories/v" },
  { id: "hk", title: "H & K", subtitle: "The Cool & the Concealed", href: "/stories/hk" },
]

const sections = [
  { title: "Findings", subtitle: "Reading the Skin", href: "/findings" },
  { title: "Reflection", subtitle: "Researcher's Voice", href: "/reflection" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border px-6 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight">Scars</span>
          <span className="text-xs text-muted-foreground">Reading the Skin</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-xs font-medium text-muted-foreground">
            Stories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {stories.map((story) => (
                <SidebarMenuItem key={story.id}>
                  <SidebarMenuButton asChild isActive={pathname === story.href}>
                    <Link href={story.href} className="flex flex-col items-start px-6 py-3">
                      <span className="font-medium">{story.title}</span>
                      <span className="text-xs text-muted-foreground">{story.subtitle}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="px-6 text-xs font-medium text-muted-foreground">
            Analysis
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((section) => (
                <SidebarMenuItem key={section.href}>
                  <SidebarMenuButton asChild isActive={pathname === section.href}>
                    <Link href={section.href} className="flex flex-col items-start px-6 py-3">
                      <span className="font-medium">{section.title}</span>
                      <span className="text-xs text-muted-foreground">{section.subtitle}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border px-6 py-4">
        <p className="text-xs text-muted-foreground italic">
          Scars don't change meaning. We do.
        </p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
