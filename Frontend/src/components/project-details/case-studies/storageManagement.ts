import type { CaseStudy } from "../types"

import dashboard from "../../assets/projects/dashboard.png"
import reorder from "../../assets/projects/reorder.png"
import products from "../../assets/projects/products.png"
import orderHistory from "../../assets/projects/orderhistory.png"
import orderModal from "../../assets/projects/ordermodal.png"
import login from "../../assets/projects/Login.png"
import newOrders from "../../assets/projects/new_orders.png"

export const storageManagementCase: CaseStudy = {
  titleKey: "project.storage.title",
  leadKey: "project.storage.lead",
  hero: {
    src: dashboard,
    alt: "Storage Management dashboard",
    captionKey: "project.storage.img.dashboard",
  },
  sections: [
    {
      type: "text",
      titleKey: "project.section.problem",
      bodyKey: "project.storage.problem",
      images: [{ src: reorder, alt: "Reorder suggestions", captionKey: "project.storage.img.reorder" }],
      layout: "single",
    },
    {
      type: "text",
      titleKey: "project.section.solution",
      bodyKey: "project.storage.solution",
      images: [{ src: newOrders, alt: "New order cart flow", captionKey: "project.storage.img.new_orders" }],
      layout: "single",
    },
    {
      type: "bullets",
      titleKey: "project.section.architecture",
      itemsKeys: [
        "project.storage.arch.1",
        "project.storage.arch.2",
        "project.storage.arch.3",
        "project.storage.arch.4",
      ],
    },
    {
      type: "bullets",
      titleKey: "project.section.features",
      itemsKeys: [
        "project.storage.features.1",
        "project.storage.features.2",
        "project.storage.features.3",
        "project.storage.features.4",
        "project.storage.features.5",
        "project.storage.features.6",
      ],
      images: [
        { src: products, alt: "Products overview", captionKey: "project.storage.img.products" },
        { src: orderHistory, alt: "Order history", captionKey: "project.storage.img.orderhistory" },
        { src: orderModal, alt: "Order modal", captionKey: "project.storage.img.ordermodal" },
      ],
      layout: "grid",
    },
    {
      type: "text",
      titleKey: "project.section.role",
      bodyKey: "project.storage.role",
    },
    {
      type: "text",
      titleKey: "project.section.challenges",
      bodyKey: "project.storage.challenges",
      images: [{ src: login, alt: "Login screen", captionKey: "project.storage.img.Login" }],
      layout: "single",
    },
  ],
}
