import type { CaseStudy } from "../types"

import mainDashboard from "../../../assets/projects/azureServiceBus/servicebus-main-dashboard.png"
import topicsList from "../../../assets/projects/azureServiceBus/servicebus-topic-overview.png"
import topicMessages from "../../../assets/projects/azureServiceBus/servicebus-topic-message-list.png"
import queuesList from "../../../assets/projects/azureServiceBus/servicebus-queue-overview.png"
import queueFilter from "../../../assets/projects/azureServiceBus/servicebus-queue-filter.png"
import messageList from "../../../assets/projects/azureServiceBus/servicebus-message-list.png"
import messageDetailsQueue from "../../../assets/projects/azureServiceBus/servicebus-message-details.png"
import sendMessageDialog from "../../../assets/projects/azureServiceBus/servicebus-send-message-dialog.png"
import resendModal from "../../../assets/projects/azureServiceBus/servicebus-resend-message-dialog.png"
import deadletterList from "../../../assets/projects/azureServiceBus/servicebus-deadletter-list.png"
import messageDetailsDeadletter from "../../../assets/projects/azureServiceBus/servicebus-deadletter-details.png"
import metricsDashboard from "../../../assets/projects/azureServiceBus/servicebus-metrics-dashboard.png"
import dashboardDarkmode from "../../../assets/projects/azureServiceBus/servicebus-dashboard-darkmode.png"
import azureNamespaceOverview from "../../../assets/projects/azureServiceBus/azure-servicebus-namespace-overview.png"
import azureQueueMessages from "../../../assets/projects/azureServiceBus/azure-servicebus-queue-messages.png"
import azureTopicMessages from "../../../assets/projects/azureServiceBus/azure-servicebus-topic-messages.png"
import redisConnections from "../../../assets/projects/azureServiceBus/redis-servicebus-connections.png"
import redisDeadletterCache from "../../../assets/projects/azureServiceBus/redis-deadletter-storage.png"

export const azureServiceBusCase: CaseStudy = {
  titleKey: "project.servicebus.title",
  leadKey: "project.servicebus.lead",
  hero: {
    src: mainDashboard,
    alt: "Azure Service Bus Manager main dashboard",
    captionKey: "project.servicebus.img.main_dashboard",
  },
  sections: [
    {
      type: "text",
      titleKey: "project.section.problem",
      bodyKey: "project.servicebus.problem",
      images: [
        {
          src: azureNamespaceOverview,
          alt: "Azure Service Bus namespace overview",
          captionKey: "project.servicebus.img.azure_namespace_overview",
        },
        {
          src: azureTopicMessages,
          alt: "Azure Service Bus topic messages",
          captionKey: "project.servicebus.img.azure_topic_messages",
        },
      ],
      layout: "grid",
    },
    {
      type: "text",
      titleKey: "project.section.solution",
      bodyKey: "project.servicebus.solution",
      images: [
        {
          src: topicsList,
          alt: "Topics overview",
          captionKey: "project.servicebus.img.topics_list",
        },
        {
          src: queuesList,
          alt: "Queues overview",
          captionKey: "project.servicebus.img.queues_list",
        },
        {
          src: queueFilter,
          alt: "Queue filtering",
          captionKey: "project.servicebus.img.queue_filter",
        },
      ],
      layout: "grid",
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
        {
          src: redisDeadletterCache,
          alt: "Redis deadletter storage",
          captionKey: "project.servicebus.img.redis_deadletter_cache",
        },
      ],
      layout: "grid",
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
          src: messageList,
          alt: "Message list",
          captionKey: "project.servicebus.img.message_list",
        },
        {
          src: topicMessages,
          alt: "Topic messages table",
          captionKey: "project.servicebus.img.topic_messages",
        },
        {
          src: azureQueueMessages,
          alt: "Azure Service Bus queue messages",
          captionKey: "project.servicebus.img.azure_queue_messages",
        },
        {
          src: deadletterList,
          alt: "Deadletter messages list",
          captionKey: "project.servicebus.img.deadletter_list",
        },
        {
          src: sendMessageDialog,
          alt: "Send message dialog",
          captionKey: "project.servicebus.img.send_message_dialog",
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
      ],
      layout: "grid",
    },
    {
      type: "text",
      titleKey: "project.section.role",
      bodyKey: "project.servicebus.role",
      images: [
        {
          src: mainDashboard,
          alt: "Main dashboard",
          captionKey: "project.servicebus.img.main_dashboard",
        },
      ],
      layout: "single",
    },
    {
      type: "text",
      titleKey: "project.section.challenges",
      bodyKey: "project.servicebus.challenges",
      images: [
        {
          src: metricsDashboard,
          alt: "Metrics dashboard",
          captionKey: "project.servicebus.img.metrics_dashboard",
        },
        {
          src: dashboardDarkmode,
          alt: "Dashboard dark mode",
          captionKey: "project.servicebus.img.dashboard_darkmode",
        },
      ],
      layout: "grid",
    },
  ],
}