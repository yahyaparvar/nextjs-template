import { BottomNavigation } from '@/src/app/components/BottomNavigation'
import { Inter } from 'next/font/google'
import WorkoutTable from '../../components/WorkoutTable'

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

export default function workout() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${inter.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                {/* <Search placeholder="Search invoices..." />
                <CreateInvoice /> */}
            </div>
            <WorkoutTable/>
            {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <Table query={query} currentPage={currentPage} />
            </Suspense> */}
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    )
}