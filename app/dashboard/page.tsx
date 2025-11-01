'use client'

import { StatCard, InfoCard, ImageCard, ProjectsTable, OrdersOverview } from '@/components/dashboard'
import { useDashboard } from '@/lib/hooks'

export default function DashboardPage() {
  const { stats, projects, orders } = useDashboard()

  return (
    <div className="space-y-4">
      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            color={stat.color}
            index={index}
          />
        ))}
      </div>

      {/* Section Lorem Dashboard - juste après les KPI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InfoCard
          title="Lorem Dashboard"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          image="/chakra-logo.png"
          alt="Chakra"
        />

        <ImageCard
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          image="/team-photo.png"
          alt="Team"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Section Projets */}
        <div className="lg:col-span-2">
          <ProjectsTable projects={projects} />
        </div>

        {/* Section Orders overview */}
        <div>
          <OrdersOverview orders={orders} />
        </div>
      </div>
    </div>
  )
}
