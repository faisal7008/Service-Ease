import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Community Building',
    description:
      'This section provides a platform where Leadership of the company can drive the company values throughout the organizational hierarchy. It enables user to post articles, videos, announcements and allow employees to engage with these posts (like & comment)',
    icon: GlobeAltIcon,
  },
  {
    name: 'Employee Engagement',
    description:
      'This section addresses multiple facets including professional growth, learning management, task management, recreational activities and reward redemption.',
    icon: ScaleIcon,
  },
  {
    name: 'Client Servicing',
    description:
      'This section enables the administrators and their clients to interface on aspects such as invoicing, raising service requests, tracking ongoing project in real time, feedback mechanism, and a showcase section where the company can highlight case studies and capabilities.',
    icon: BoltIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-12 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-teal-600">Features</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          For a business to thrive
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          it is imperative for them not only to continuously engage with their client but also their employees. Constant effective and efficient engagement with all stakeholders in a company are what drive a business to succeed.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-teal-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
