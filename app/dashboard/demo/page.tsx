"use client"

import { useState } from 'react'
import { Loader, ButtonLoader, InlineLoader, SkeletonLoader } from '@/components/ui/loader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoaderDemo() {
  const [showFullLoader, setShowFullLoader] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [inlineLoading, setInlineLoading] = useState(false)

  const handleButtonClick = () => {
    setButtonLoading(true)
    setTimeout(() => setButtonLoading(false), 3000)
  }

  const handleFullLoaderClick = () => {
    setShowFullLoader(true)
    setTimeout(() => setShowFullLoader(false), 3000)
  }

  const handleInlineClick = () => {
    setInlineLoading(true)
    setTimeout(() => setInlineLoading(false), 3000)
  }

  return (
    <div className="space-y-6">
      {showFullLoader && <Loader />}

      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Loader Components</h2>
        <p className="text-gray-600 dark:text-gray-400">Examples of different loading states</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Page Loader */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Full Page Loader</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Shows a full-screen overlay with loading spinner
            </p>
            <Button onClick={handleFullLoaderClick} className="bg-teal-500 hover:bg-teal-600">
              Show Full Loader (3s)
            </Button>
          </CardContent>
        </Card>

        {/* Button Loader */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Button Loader</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Loading state for buttons
            </p>
            <Button 
              onClick={handleButtonClick} 
              disabled={buttonLoading}
              className="bg-teal-500 hover:bg-teal-600"
            >
              {buttonLoading ? <ButtonLoader variant="light" /> : 'Click to Load'}
            </Button>
          </CardContent>
        </Card>

        {/* Inline Loader */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Inline Loader</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Loading state for inline content
            </p>
            <Button onClick={handleInlineClick} className="bg-teal-500 hover:bg-teal-600 mb-4">
              Load Content (3s)
            </Button>
            {inlineLoading && <InlineLoader />}
          </CardContent>
        </Card>

        {/* Skeleton Loader */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Skeleton Loader</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Skeleton loading for lists and tables
            </p>
            <SkeletonLoader rows={3} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
