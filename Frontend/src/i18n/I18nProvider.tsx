import { createContext, useMemo, useState, useEffect } from "react"
import type { ReactNode } from "react"
import type { Language, Messages } from "./messages"
import { en as enMessages, no as noMessages } from "./messages"

type I18nContextType = {
  lang: Language
  messages: Messages
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang")
    return saved === "en" || saved === "no" ? saved : "en"
  })

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const messages = useMemo(() => (lang === "en" ? enMessages : noMessages), [lang])

  const getAge = () => {
    const birth = new Date(1997, 10, 19)
    const today = new Date()

    let age = today.getFullYear() - birth.getFullYear()
    const m = today.getMonth() - birth.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--
    }

    return age
  }

  const value = useMemo(() => {
    const t = (key: string) => {
      let text = messages[key] ?? key
      text = text.replace("{age}", String(getAge()))

      return text
    }

    return { lang, setLang, messages, t }
  }, [lang, messages])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export { I18nContext }
