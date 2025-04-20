import type React from "react"
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiLaravel,
} from "react-icons/si"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TechItem {
  name: string
  icon: React.ReactNode
  proficiency: number
}

export default function TechStack() {
  const languages: TechItem[] = [
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" />, proficiency: 95 },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-500" />, proficiency: 90 },
    { name: "HTML", icon: <SiHtml5 className="w-8 h-8 text-orange-500" />, proficiency: 95 },
    { name: "CSS", icon: <SiCss3 className="w-8 h-8 text-blue-400" />, proficiency: 90 },
    { name: "PHP", icon: <SiPhp className="w-8 h-8 text-purple-500" />, proficiency: 75 },
    {
      name: "ReasonML",
      icon: <div className="w-8 h-8 flex items-center justify-center text-red-500 font-bold">Re</div>,
      proficiency: 80,
    },
  ]

  const frameworks: TechItem[] = [
    { name: "React", icon: <SiReact className="w-8 h-8 text-blue-400" />, proficiency: 95 },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-gray-800 dark:text-white" />, proficiency: 90 },
    { name: "React Native", icon: <SiReact className="w-8 h-8 text-blue-500" />, proficiency: 85 },
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-green-500" />, proficiency: 80 },
    { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-gray-700 dark:text-gray-300" />, proficiency: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, proficiency: 90 },
    { name: "Material UI", icon: <SiMui className="w-8 h-8 text-blue-600" />, proficiency: 85 },
    { name: "Bootstrap", icon: <SiBootstrap className="w-8 h-8 text-purple-600" />, proficiency: 85 },
    { name: "Laravel", icon: <SiLaravel className="w-8 h-8 text-red-500" />, proficiency: 70 },
  ]

  const tools: TechItem[] = [
    {
      name: "NX Monorepo",
      icon: <div className="w-8 h-8 flex items-center justify-center text-blue-600 font-bold">NX</div>,
      proficiency: 85,
    },
    {
      name: "Zustand",
      icon: <div className="w-8 h-8 flex items-center justify-center text-amber-600 font-bold">Z</div>,
      proficiency: 90,
    },
    {
      name: "Tamagui",
      icon: <div className="w-8 h-8 flex items-center justify-center text-purple-600 font-bold">T</div>,
      proficiency: 80,
    },
  ]

  const renderTechItems = (items: TechItem[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">{item.name}</h3>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${item.proficiency}%` }}></div>
            </div>
            <p className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">{item.proficiency}%</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="languages">Languages</TabsTrigger>
        <TabsTrigger value="frameworks">Frameworks & Libraries</TabsTrigger>
        <TabsTrigger value="tools">Tools</TabsTrigger>
      </TabsList>
      <TabsContent value="languages">{renderTechItems(languages)}</TabsContent>
      <TabsContent value="frameworks">{renderTechItems(frameworks)}</TabsContent>
      <TabsContent value="tools">{renderTechItems(tools)}</TabsContent>
    </Tabs>
  )
}
