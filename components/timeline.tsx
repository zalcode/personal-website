interface TimelineItem {
  company: string
  role: string
  period: string
  achievements: string[]
}

export default function Timeline() {
  const experiences: TimelineItem[] = [
    {
      company: "Ruangguru",
      role: "Staff Software Engineer (Frontend)",
      period: "Oct 2022 - Apr 2025",
      achievements: [
        "Architected core web structure for new SaaS product",
        "Developed internal authentication middleware library",
        "Maintained company-wide design system UI library",
        "Led CI/CD deployment pipeline management",
        "Managed monorepo architecture with task commands",
        "Led refactoring initiatives reducing RAM usage from 4GB to 1-2GB",
      ],
    },
    {
      company: "Ruangguru",
      role: "Senior Frontend Engineer",
      period: "Jan 2020 - Sep 2022",
      achievements: [
        "Revamped registration flow using XState state machine",
        "Implemented A/B testing integration with account-UI project",
        "Developed Role-Based Access Control (RBAC) for Super CMS",
        "Optimized core web vitals for Roboguru's question detail page",
        "Built Roboguru Android TWA application in two weeks",
      ],
    },
    {
      company: "Ruangguru",
      role: "Frontend Engineer",
      period: "Nov 2019 - Dec 2020",
      achievements: [
        "Built universal-CMS for Ruangguru content using ReasonML",
        "Created CRUD UI mechanisms in universal-UI",
        "Implemented bulk edit and spreadsheet-like interfaces",
        "Designed nested tree UI for hierarchical data structures",
        "Contributed to SEO optimization efforts",
      ],
    },
    {
      company: "Axiata Digital Services Indonesia",
      role: "Frontend Developer",
      period: "Mar 2019 - Oct 2019",
      achievements: [
        "Developed supplier admin dashboard from scratch",
        "Integrated delivery API services connecting suppliers to UMKM",
        "Maintained gamification features to increase user engagement",
        "Implemented centralized authentication UI",
        "Built responsive company website using Next.js",
      ],
    },
    {
      company: "PT FIRST WAP International (1rstWAP)",
      role: "Programmer",
      period: "May 2017 - Feb 2019",
      achievements: [
        "Enhanced SMS Broadcast Web application for enterprise clients",
        "Implemented comprehensive unit testing suite",
        "Optimized SMS delivery report jobs",
        "Developed full-stack features for SMS broadcast reporting dashboard",
      ],
    },
    {
      company: "TNC Digital Media",
      role: "Frontend Developer",
      period: "Oct 2016 - Apr 2017",
      achievements: [
        "Delivered full-stack web applications using Laravel",
        "Integrated Midtrans payment gateway",
        "Implemented responsive design principles",
        "Collaborated with design team to translate mockups",
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

        {/* Timeline items */}
        {experiences.map((item, index) => (
          <div key={index} className={`mb-16 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            {/* Content */}
            <div className="w-5/12">
              <div
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.company}</h3>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{item.role}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.period}</p>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Center dot */}
            <div className="w-2/12 flex justify-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10 mt-6"></div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
