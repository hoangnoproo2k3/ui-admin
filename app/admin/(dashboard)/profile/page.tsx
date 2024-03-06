import Banner from '@/components/admin/profile/Banner'
import General from '@/components/admin/profile/General'

const Posts = () => {
    return (
        <div className="mx-auto p-2 !pt-[10px] md:p-2">
            <div className=" mt-8">
                <Banner />
                <div className="mt-4">
                    <General />
                </div>
            </div>
        </div>
    )
}

export default Posts
