export type MythicRun = {
  rid: string
  pids: string[]
  pnames: string[]
  dungeon: string
  lvl: number
  time: number
  score: number
  timestamp: number
  pclasses: string[]
  affixes: string[]
}

export type Dungeon = {
  abbr: string
  id: string
  name: string
  timer: number[]
}

export type Player = {
  pid: string
  name: string
  pclass: string
  bruns: string[]
  runCount: number
  fsio: number
  rank?: number
}
