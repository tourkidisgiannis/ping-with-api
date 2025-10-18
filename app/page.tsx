import PageButton from '@/components/PageButton'
import {
  ActivityIcon,
  ArrowDownRight,
  BanknoteIcon,
  CameraIcon,
  CctvIcon,
  PhoneIcon,
  RadiusIcon,
  SignalHighIcon,
  SirenIcon
} from 'lucide-react'

import React from 'react'

const HomePage = () => {
  return (
    <section className='h-full w-full py-24'>
      <div className='container space-y-10'>
        <h1 className='text-center text-3xl font-bold text-cyan-950'>
          Άμεση Δράση Θεσσαλονίκης
        </h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <PageButton
            link='/ping'
            title='RF Monitoring'
            icon={<ArrowDownRight />}
          />
          <PageButton
            link='/callcenter'
            title='Τηλεφωνικό Κέντρο'
            icon={<PhoneIcon />}
          />
          <PageButton link='/cameras' title='Κάμερες' icon={<CctvIcon />} />
          <PageButton link='/banks' title='Τράπεζες' icon={<BanknoteIcon />} />
          <PageButton
            link='/gps'
            title='GPS Database Monitoring'
            icon={<SignalHighIcon />}
          />
          <PageButton link='/sensors' title='Αισθητήρες' icon={<SirenIcon />} />
          <PageButton
            link='/harddisk'
            title='Hard Disk Monitoring'
            icon={<RadiusIcon />}
          />
          <PageButton
            link='/diagnostics'
            title='Διαγνωστικά'
            icon={<ActivityIcon />}
          />
        </div>
      </div>
    </section>
  )
}

export default HomePage
