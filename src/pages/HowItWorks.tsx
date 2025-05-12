
import React from 'react'
import Layout from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/section-header'

const HowItWorks = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="How Oma Hub Works"
            subtitle="Your guide to discovering and connecting with Africa's most innovative fashion designers"
            centered={true}
            italic={true}
          />
          
          <div className="mt-16 text-center">
            <p className="text-lg text-oma-cocoa">
              Content for the How It Works page is coming soon.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HowItWorks
