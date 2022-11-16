import { NavBar } from "../Components"

const _404NotFound = () => (
    <>
        <NavBar />
        <div className="flex flex-row items-start justify-center h-screen w-full mt-44">
            <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px] text-danger">404 Page Not Found</h1>
        </div>
    </>
)

export default _404NotFound