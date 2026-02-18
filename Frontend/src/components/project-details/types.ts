export type CaseStudyImage = {
  src: string
  alt: string
  captionKey?: string
}

export type CaseStudySection =
  | {
      type: "text"
      titleKey: string
      bodyKey: string
      images?: CaseStudyImage[]
      layout?: "single" | "grid"
    }
  | {
      type: "bullets"
      titleKey: string
      itemsKeys: string[]
      images?: CaseStudyImage[]
      layout?: "single" | "grid"
    }

export type CaseStudy = {
  titleKey?: string
  leadKey?: string
  hero?: CaseStudyImage
  sections: CaseStudySection[]
}
