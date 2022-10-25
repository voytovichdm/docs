module.exports = {
  someSidebar: {
    "Getting Started": [
      "welcome",
      "getting-started/generated-app",
      "getting-started/first-app",
      "getting-started/view-generated-code",
      "how-to/run-dev-env",
      "how-to/add-custom-code",
      "getting-started/deploy",
      "getting-started/authentication",
      "faqs/faqs",
      "getting-started/plugins",
      "getting-started/projects-resources-services",
      "getting-started/cli",
    ],
    "Generated API": [
      "getting-started/generated-app-api",
      "api/generated-api-sorting",
      "api/generated-api-filtering",
      "api/generated-api-pagination",
      "api/meta-query-graphql",
    ],
    "Customize Your Application": [
      "custom-code/managing-custom-files",
      "custom-code/add-business-logic",
      "custom-code/add-action-to-controller",
      "custom-code/add-graphql-query",
      "custom-code/seed-db",
      "custom-code/add-custom-dto",
    ],
   
    "How To": [
      "how-to/how-to-create-app",
      "how-to/how-to-create-entity",
      "how-to/how-to-create-entity-field",
      "how-to/how-to-set-access-permissions",
      "how-to/how-to-commit-changes",
      "getting-started/relations",
      "how-to/base-directories",
      "how-to/api-admin-ui-settings",
      "how-to/create-message-broker",
    ],
    Plugins: [
     {
       type: "category",
       label: "Plugin Creation ",
       items: [
               "plugins/plugin-develop-overview",
               "plugins/plugin-architecture",
            ],
           },
      {
        type: "category",
        label: "Plugin Events",
        items: [
            "plugins/plugin-events/plugin-events",
            "plugins/plugin-events/CreateServer",
            "plugins/plugin-events/createserverdockercompose",
            "plugins/plugin-events/createserverdotenv",
            "plugins/plugin-events/createserverauth",
            "plugins/plugin-events/create-package-json-event",
            "plugins/plugin-events/createentityservice",
            "plugins/plugin-events/createentityservicebase",
            "plugins/plugin-events/createentitycontroller",
            "plugins/plugin-events/createentitycontrollerbase",
            "plugins/plugin-events/createmessagebrokerservice",
            "plugins/plugin-events/createmessagebrokerservice",
            "plugins/plugin-events/createmessagebrokerservicebase",
            "plugins/plugin-events/createmessagebrokernestjsmodule",
            "plugins/plugin-events/createmessagebrokerclientoptionsfactory",
            "plugins/plugin-events/createmessagebrokertopicsenum",
            "plugins/plugin-events/createprismaschema",
            
          
          ],
        },
      ],
    Tutorials: [
      {
        type: "category",
        label: "Angular Todos",
        items: [
          "tutorials/angular-todos/angular-todos-step-000",
          "tutorials/angular-todos/angular-todos-step-001",
          "tutorials/angular-todos/angular-todos-step-002",
          "tutorials/angular-todos/angular-todos-step-003",
          "tutorials/angular-todos/angular-todos-step-004",
          "tutorials/angular-todos/angular-todos-step-005",
          "tutorials/angular-todos/angular-todos-step-006",
        ],
      },
      {
        type: "category",
        label: "React Todos",
        items: [
          "tutorials/react-todos/react-todos-step-000",
          "tutorials/react-todos/react-todos-step-001",
          "tutorials/react-todos/react-todos-step-002",
          "tutorials/react-todos/react-todos-step-003",
          "tutorials/react-todos/react-todos-step-004",
          "tutorials/react-todos/react-todos-step-005",
          "tutorials/react-todos/react-todos-step-006",
        ],
      },
    ],
    "Running Amplication Platform": [
      "getting-started/sync-with-github",
      "getting-started/connect-server-to-github",
    ],
    About: [
      "about/licensing",
      "about/product-roadmap",
      "getting-started/phone-home",
    ],
    Troubleshooting: [
      {
        type: "category",
        label: "Code Generation",
        items: [
          "errors/invalid-code-generation-version",
          "errors/missing-code-generation-version",
        ],
      },
      {
        type: "category",
        label: "Authorization",
        items: ["errors/could-not-authorize-user"],
      },
      {
        type: "category",
        label: "GitHub",
        items: ["errors/merge-conflict", "errors/github-different-app-id"],
      },
      {
        type: "category",
        label: "Set-Up",
        items: ["errors/installation-fails", "errors/installation-slow"],
      },
      {
        type: "category",
        label: "DB",
        items: ["errors/prisma-denied-access-on-postgres"],
      },
    ],
    Community: ["contributing", "community/handling-a-new-issue"],
  },
};
