import { CalendarDays } from "lucide-react"

import style from "../styles/style.module.css"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className={style.mainHover}>
        <Button variant="link" className={style.hoverButton}>@YuriClan</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-[#e7e7e7]">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/pyro_red.png" />
            <AvatarFallback>YC</AvatarFallback>
          </Avatar>
          <div className={style.hoverMainRight}>
            <h4 className="text-sm font-semibold">@YuriClan</h4>
            <p className="text-sm">
              YuriBot: Enrich Your Discord Community with Power and Style!
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Emoticon Eruption Day! 😎🎉
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
