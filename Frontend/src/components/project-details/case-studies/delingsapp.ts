import type { CaseStudy } from "../types"

import hovedSide from "../../assets/projects/delingsapp/hovedSide.png"
import produkterAndre from "../../assets/projects/delingsapp/Produkter_andre.png"
import reserverProdukt from "../../assets/projects/delingsapp/reserver_produkt.png"
import datoReservasjon from "../../assets/projects/delingsapp/datoReservasjon.png"
import kontakter from "../../assets/projects/delingsapp/kontakter.png"
import chat from "../../assets/projects/delingsapp/chat.png"
import returProdukt from "../../assets/projects/delingsapp/returProdukt.png"
import leimegLogin from "../../assets/projects/delingsapp/leimeg_login.png"
import loginTlf from "../../assets/projects/delingsapp/loginTlf.png"
import leimegHoved from "../../assets/projects/delingsapp/leimeg_hoved.png"
import redigerBruker from "../../assets/projects/delingsapp/Rediger_bruker.png"

export const delingsAppCase: CaseStudy = {
  titleKey: "project.delingsapp.title",
  leadKey: "project.delingsapp.lead",
  hero: {
    src: leimegHoved,
    alt: "DelingsApp hero",
    captionKey: "project.delingsapp.img.hero",
  },
  sections: [
    {
      type: "text",
      titleKey: "project.section.problem",
      bodyKey: "project.delingsapp.problem",
      images: [
        { src: hovedSide, alt: "Home feed and search", captionKey: "project.delingsapp.img.home" },
        { src: produkterAndre, alt: "Product grid", captionKey: "project.delingsapp.img.products" },
      ],
      layout: "grid",
    },
    {
      type: "text",
      titleKey: "project.section.solution",
      bodyKey: "project.delingsapp.solution",
      images: [
        { src: reserverProdukt, alt: "Reserve product", captionKey: "project.delingsapp.img.reserve" },
        { src: datoReservasjon, alt: "Date picker", captionKey: "project.delingsapp.img.datepicker" },
      ],
      layout: "grid",
    },
    {
      type: "bullets",
      titleKey: "project.section.architecture",
      itemsKeys: [
        "project.delingsapp.arch.1",
        "project.delingsapp.arch.2",
        "project.delingsapp.arch.3",
        "project.delingsapp.arch.4",
      ],
    },
    {
      type: "bullets",
      titleKey: "project.section.features",
      itemsKeys: [
        "project.delingsapp.features.1",
        "project.delingsapp.features.2",
        "project.delingsapp.features.3",
        "project.delingsapp.features.4",
        "project.delingsapp.features.5",
        "project.delingsapp.features.6",
      ],
      images: [
        { src: kontakter, alt: "Contacts", captionKey: "project.delingsapp.img.contacts" },
        { src: chat, alt: "Chat", captionKey: "project.delingsapp.img.chat" },
        { src: redigerBruker, alt: "Edit profile", captionKey: "project.delingsapp.img.edit_profile" },
        { src: returProdukt, alt: "Return product", captionKey: "project.delingsapp.img.return_product" },
      ],
      layout: "grid",
    },
    {
      type: "text",
      titleKey: "project.section.role",
      bodyKey: "project.delingsapp.role",
      images: [
        { src: leimegLogin, alt: "Login email", captionKey: "project.delingsapp.img.login_email" },
        { src: loginTlf, alt: "Login phone", captionKey: "project.delingsapp.img.login_phone" },
      ],
      layout: "grid",
    },
    {
      type: "text",
      titleKey: "project.section.challenges",
      bodyKey: "project.delingsapp.challenges",
    },
  ],
}
