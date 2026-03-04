import type { CaseStudy } from "../types"

import topicsList from "../../../assets/projects/azureServiceBus/servicebus-topic-overview.png"
import queuesList from "../../../assets/projects/azureServiceBus/servicebus-queue-overview.png"
import topicMessages from "../../../assets/projects/azureServiceBus/servicebus-topic-message-list.png"
import deadletterList from "../../../assets/projects/azureServiceBus/servicebus-deadletter-list.png"
import messageDetailsDeadletter from "../../../assets/projects/azureServiceBus/servicebus-deadletter-details.png"
import messageDetailsQueue from "../../../assets/projects/azureServiceBus/servicebus-message-details.png"
import resendModal from "../../../assets/projects/azureServiceBus/servicebus-resend-message-dialog.png"
import metricsDashboard from "../../../assets/projects/azureServiceBus/servicebus-metrics-dashboard.png"
import redisConnections from "../../../assets/projects/azureServiceBus/redis-servicebus-connections.png"
import redisDeadletterCache from "../../../assets/projects/azureServiceBus/redis-deadletter-storage.png"

export const azureServiceBusCase: CaseStudy = {
  titleKey: "project.servicebus.title",
  leadKey: "project.servicebus.lead",
  hero: {
    src: topicsList,
    alt: "Azure Service Bus Manager topics overview",
    captionKey: "project.servicebus.img.topics_list",
  },
  sections: [
    {
      type: "text",
      titleKey: "project.section.problem",
      bodyKey: "project.servicebus.problem",
      images: [
        {
          src: metricsDashboard,
          alt: "Metrics dashboard",
          captionKey: "project.servicebus.img.metrics_dashboard",
        },
      ],
      layout: "single",
    },
    {
      type: "text",
      titleKey: "project.section.solution",
      bodyKey: "project.servicebus.solution",
      images: [
        {
          src: queuesList,
          alt: "Queues overview",
          captionKey: "project.servicebus.img.queues_list",
        },
      ],
      layout: "single",
    },
    {
      type: "bullets",
      titleKey: "project.section.architecture",
      itemsKeys: [
        "project.servicebus.arch.1",
        "project.servicebus.arch.2",
        "project.servicebus.arch.3",
        "project.servicebus.arch.4",
      ],
      images: [
        {
          src: redisConnections,
          alt: "Redis connections cache",
          captionKey: "project.servicebus.img.redis_connections",
        },
      ],
      layout: "single",
    },
    {
      type: "bullets",
      titleKey: "project.section.features",
      itemsKeys: [
        "project.servicebus.features.1",
        "project.servicebus.features.2",
        "project.servicebus.features.3",
        "project.servicebus.features.4",
        "project.servicebus.features.5",
        "project.servicebus.features.6",
      ],
      images: [
        {
          src: topicMessages,
          alt: "Topic messages table",
          captionKey: "project.servicebus.img.topic_messages",
        },
        {
          src: deadletterList,
          alt: "Deadletter messages list",
          captionKey: "project.servicebus.img.deadletter_list",
        },
        {
          src: resendModal,
          alt: "Resend message modal",
          captionKey: "project.servicebus.img.resend_modal",
        },
        {
          src: messageDetailsDeadletter,
          alt: "Deadletter message details",
          captionKey: "project.servicebus.img.message_details_deadletter",
        },
        {
          src: messageDetailsQueue,
          alt: "Queue message details",
          captionKey: "project.servicebus.img.message_details_queue",
        },
        {
          src: redisDeadletterCache,
          alt: "Cached deadletter payload in Redis",
          captionKey: "project.servicebus.img.redis_deadletter_cache",
        },
      ],
      layout: "grid",
    },
    {
      type: "text",
      titleKey: "project.section.role",
      bodyKey: "project.servicebus.role",
    },
    {
      type: "text",
      titleKey: "project.section.challenges",
      bodyKey: "project.servicebus.challenges",
      images: [
        {
          src: metricsDashboard,
          alt: "Metrics filters",
          captionKey: "project.servicebus.img.metrics_filters",
        },
      ],
      layout: "single",
    },
  ],
}